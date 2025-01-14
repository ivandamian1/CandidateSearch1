// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  name: string | null; // Candidate's name (nullable if not provided)
  username: string; // GitHub username (equivalent to login in GitHub API)
  location: string | null; // Candidate's location (nullable if not provided)
  avatar: string; // URL of the candidate's avatar image
  email: string | null; // Candidate's email (nullable if not provided)
  html_url: string; // URL to the candidate's GitHub profile
  company: string | null; // Candidate's company (nullable if not provided)
}
