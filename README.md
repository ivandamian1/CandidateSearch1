# Candidate Search Application

## Description

The **Candidate Search Application** is a web application that allows employers to search for candidates using the GitHub API, evaluate their profiles, and save potential candidates for hiring. The app provides functionality to browse candidates, save profiles to a potential candidates list, and persist this data using `localStorage`.

## Deployed Application

[Linked Here](https://candidatesearch1-hmgo.onrender.com/)

## Features
- Fetch candidate data from the GitHub API.
- Display candidate profiles with details including name, username, location, avatar, email, company, and bio.
- Save or reject candidates.
- View a list of saved candidates with their information.
- Persistent storage of saved candidates using `localStorage`.
- Clean and polished user interface.

## Technologies Used
- **React** with **TypeScript**
- **Vite** for building and bundling
- **GitHub REST API**
- **LocalStorage** for data persistence
- **Render** for deployment

## Installation

### Prerequisites
- Node.js installed
- A GitHub personal access token for API authentication

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add your GitHub personal access token:
     ```env
     VITE_GITHUB_TOKEN=your_personal_access_token
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build the project:
   ```bash
   npm run build
   ```

## Usage

### Candidate Search Page
- Displays a candidate's information fetched from the GitHub API.
- Use the `+` button to save a candidate to the potential candidates list.
- Use the `-` button to reject a candidate and move to the next.

### Potential Candidates Page
- Lists all saved candidates.
- Displays the saved candidate's information.
- Allows the removal of saved candidates.

## Deployment
The application is deployed using [Render](https://render.com). To deploy:
1. Run the build command:
   ```bash
   npm run build
   ```
2. Set the **Publish Directory** to the output folder.
3. Configure environment variables in Render for the GitHub token.

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## Screenshots

### Candidate Search Page
![Candidate Search](./Screen%20Shot%202025-01-14%20at%205.48.46%20PM.png)

### Potential Candidates Page
![Potential Candidates](/Screen%20Shot%202025-01-14%20at%205.48.55%20PM.png)

## License
This project is licensed under the [MIT License](./LICENSE).

## Acknowledgments
- [GitHub REST API Documentation](https://docs.github.com/en/rest)
- [Render Deployment Guide](https://render.com/docs/deploy-a-react-app)
