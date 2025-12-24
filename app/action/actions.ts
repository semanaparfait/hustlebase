"use server";

import prisma from '@/app/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

export async function handleSubmit(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fullname = formData.get('fullname') as string; 

  const isSignup = !!fullname;

  if (isSignup) {
    // --- SIGN UP LOGIC ---
    const hashedPassword = await bcrypt.hash(password, 12);

    try {
      await prisma.user.create({
        data: {
          fullnames: fullname,
          email: email,
          password: hashedPassword,
        },
      });
      
      // Return success to the client instead of redirecting
      return { success: true, message: "Account created successfully! Please log in." };

    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new Error("This email is already registered.");
      }
      throw new Error("Something went wrong during sign up.");
    }
  } else {
    // --- LOG IN LOGIC ---
    const user = await prisma.user.findUnique({
      where: { email },
    });
    const admin = await prisma.user.findFirst({
      where: { isAdmin: true },
    });

        if (user?.isAdmin) {
        redirect('/admin/dashboard');
        }


    if (!user) {
      throw new Error("Invalid email or password.");
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
      throw new Error("Invalid email or password.");
    }
    
    // Set the session cookie
    (await cookies()).set('session', user.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    // Redirect to dashboard only on successful login
    redirect('/user'); 
  }
}