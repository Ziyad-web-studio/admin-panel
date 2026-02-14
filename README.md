# Futuristic Minimal Portfolio

A modern, brutalist-style personal portfolio website built with Next.js (App Router), Tailwind CSS, and TypeScript.

## Features

- **Futuristic Design**: Clean, dark, and powerful aesthetic with violet accents.
- **Projects Management**: Admin panel to manage projects.
- **File-Based CMS**: Projects are stored in `src/data/projects.json`.
- **GitHub Integration**: Publishing updates directly to GitHub to trigger Vercel deployments.
- **Authentication**: Simple password-based admin access.

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript
- Framer Motion
- Lucide React
- Octokit (GitHub API)
- Jose (JWT Auth)

## Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Copy `.env.example` to `.env.local` and fill in the values:
    ```bash
    cp .env.example .env.local
    ```
    - `ADMIN_PASSWORD`: Password for accessing the admin panel.
    - `JWT_SECRET`: Secret key for signing JWTs (generate a strong random string).
    - `GITHUB_TOKEN`: A GitHub Personal Access Token (PAT) with `repo` scope.
    - `GITHUB_REPO_OWNER`: Your GitHub username.
    - `GITHUB_REPO_NAME`: The name of this repository.

4.  **Run locally:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` for the public site.
    Visit `http://localhost:3000/admin` for the admin panel.

## Deployment on Vercel

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the environment variables from your `.env.local` to the Vercel project settings.
4.  Deploy!

## Admin Usage

1.  Navigate to `/admin`.
2.  Login with your `ADMIN_PASSWORD`.
3.  Add or edit projects.
4.  Click "Publish to GitHub" to commit changes to `src/data/projects.json`.
5.  Wait for Vercel to redeploy with the new content.

## License

MIT
