

import { signIn } from "@/auth"
import Image from "next/image";

export default function SignIn() {



  const handleSignIn = async() => {
    "use server"
    await signIn("google", {redirectTo:"/playlists"}); 
  }
  return (
    <><h1 className="text-3xl text-center font-sans font-bold p-4 text-red-400">Welcome to YT Playlist retriever!</h1>
    <form
      action={handleSignIn}
    >
      <div className="flex items-center justify-center h-screen dark:bg-gray-800">
    <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google logo"
          width={500} 
          height={300}
          className="w-6 h-6"
        />
        <span>Login with Google</span>
    </button>
</div>
    </form>
    </>
  )
}  