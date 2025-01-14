import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface.tsx';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  const removeCandidate = (username: string) => {
    const updatedCandidates = savedCandidates.filter((candidate) => candidate.username !== username);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };
  return (
    savedCandidates.length ? (
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.username}>
              <td>
                <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} width="50" />
              </td>
              <td>
                {candidate.name} ({candidate.username})
              </td>
              <td>{candidate.location || 'Not Provided'}</td>
              <td>{candidate.email || 'Not Provided'}</td>
              <td>{candidate.company || 'Not Provided'}</td>
              <td>Candidate bio...</td>
              <td>
                <button onClick={() => removeCandidate(candidate.username)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No potential candidates saved yet.</p>
    ))
  }

export default SavedCandidates;
