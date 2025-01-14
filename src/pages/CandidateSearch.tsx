import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API.tsx';
import { Candidate } from '../interfaces/Candidate.interface.tsx';


const CandidateSearch = () => {


  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  useEffect(() => {
    const loadCandidates = async () => {
      const results: Candidate[] = await searchGithub();
      setCandidates(results);
    };
    loadCandidates();
  }, []);



  const currentCandidate = candidates[currentCandidateIndex];

  const saveCandidate = (candidate: Candidate) => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    moveToNextCandidate();
  };

  const rejectCandidate = () => {
    moveToNextCandidate();
  };
  
  const moveToNextCandidate = () => {
    if (currentCandidateIndex < candidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    } else {
      setCandidates([]);
    }
  };
  
  return currentCandidate ? (
    <div>
      <img src={currentCandidate.avatar} alt={`${currentCandidate.name}'s avatar`} />
      <h2>
        {currentCandidate.name} ({currentCandidate.username})
      </h2>
      <p>Location: {currentCandidate.location || 'Not Provided'}</p>
      <p>Email: {currentCandidate.email || 'Not Provided'}</p>
      <p>Company: {currentCandidate.company || 'Not Provided'}</p>
      <button onClick={() => saveCandidate(currentCandidate)}>+</button>
      <button onClick={rejectCandidate}>-</button>
    </div>
  ) : (
    <p>No candidates available to review.</p>
  );
};

  // const findCandidates = async () => {
  //   const results: Candidate[] = searchGithub()
  //   console.log('Results:', results)
  //   setCandidates(results)
  // }
  // const findCandidate = async (username: string) => {
  //   const results: Candidate = searchGithubUser(username)
  //   console.log('Results:', results)
  //   setCandidates([results])
  // }

  // useEffect(() => {
  //   findCandidates()
  // }, []);

  //return <h1>CandidateSearch</h1> 
 // ;



export default CandidateSearch;
