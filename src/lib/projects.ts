import fs from 'fs';
import path from 'path';
import { Octokit } from '@octokit/rest';
import { Project } from '@/types';

const projectsFilePath = path.join(process.cwd(), 'src/data/projects.json');

export function getProjects(): Project[] {
  try {
    if (!fs.existsSync(projectsFilePath)) {
      return [];
    }
    const fileContent = fs.readFileSync(projectsFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading projects:", error);
    return [];
  }
}

export function saveProjectsLocal(projects: Project[]): void {
  try {
    const dir = path.dirname(projectsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error("Error saving projects locally:", error);
  }
}

export async function publishProjects(projects: Project[], commitMessage: string): Promise<void> {
  // Also save locally to ensure consistency
  saveProjectsLocal(projects);

  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_REPO_OWNER;
  const repo = process.env.GITHUB_REPO_NAME;

  if (!token || !owner || !repo) {
    console.warn("GitHub credentials not set, skipping remote commit.");
    return;
  }

  const octokit = new Octokit({
    auth: token,
  });

  const branch = 'main';
  const filePath = 'src/data/projects.json';

  // Get the current file SHA to update it
  let sha: string | undefined;
  try {
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: filePath,
      ref: branch,
    });

    if (!Array.isArray(data) && data.sha) {
      sha = data.sha;
    }
  } catch (error) {
    console.warn('Could not fetch existing file SHA, assuming new file or error.', error);
  }

  const content = Buffer.from(JSON.stringify(projects, null, 2)).toString('base64');

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: filePath,
    message: commitMessage,
    content,
    sha,
    branch,
  });
}
