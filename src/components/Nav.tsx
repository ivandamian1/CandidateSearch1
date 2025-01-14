import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>
        Home
      </Link>
      <Link to="/SavedCandidates" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>
        Potential Candidates
      </Link>
    </div>
  )
};

export default Nav;
