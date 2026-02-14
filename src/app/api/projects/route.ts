import { NextResponse } from 'next/server';
import { getProjects, saveProjectsLocal, publishProjects } from '@/lib/projects';
import { Project } from '@/types';
import { decrypt } from '@/lib/auth';
import { cookies } from 'next/headers';

async function isAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  if (!session) return false;
  try {
    await decrypt(session);
    return true;
  } catch {
    return false;
  }
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const projects = getProjects();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { action, projects } = body;

    if (!projects || !Array.isArray(projects)) {
      return NextResponse.json({ error: 'Invalid projects data' }, { status: 400 });
    }

    if (action === 'save') {
      saveProjectsLocal(projects as Project[]);
      return NextResponse.json({ success: true, message: 'Projects saved locally' });
    }

    if (action === 'publish') {
      await publishProjects(projects as Project[], 'Update projects via Admin Panel');
      return NextResponse.json({ success: true, message: 'Projects published to GitHub' });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
