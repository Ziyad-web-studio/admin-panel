import { NextResponse } from 'next/server';
import { encrypt } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD is not set in environment variables');
      return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
    }

    if (password === adminPassword) {
      const session = await encrypt({ role: 'admin' });
      const response = NextResponse.json({ success: true });

      response.cookies.set('session', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 1 hour
        path: '/',
        sameSite: 'lax',
      });

      return response;
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
