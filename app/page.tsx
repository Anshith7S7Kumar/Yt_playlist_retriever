'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter(); 
  return (
   <>
   <h1 className="text-3xl text-center font-sans font-bold p-4 text-red-400">Welcome to YT Playlist retriever!</h1>
   <div className='flex justify-center items-center'>
   <button onClick={() => router.push('/components/signIn')} className="border border-red-300 p-4">Redirect to SignIn</button>
   </div>
   </>
  );
}
