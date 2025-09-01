import { auth, signIn } from "@/auth";
import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export default async function Login () {
    const session = await auth();
    console.log(session);
    return (
          <main className="min-h-screen flex justify-center px-2 md:px-12 lg:px-16 py-4 md:py-6 lg:py-12">
            <div className="w-full md:w-[356px] max-h-[420px] flex flex-col gap-8 rounded md:shadow-md md:px-3 md:py-4">
                <div>
                    <h1 className="text-3xl font-semibold text-center">Sign In</h1>
                    <p className="block text-blue-300 text-center">Create an acccount or sign in</p>
                </div>
                <form className="justify-items-center">
                    <div className="w-full mb-2">
                        <TextField
                        placeholder="@emmanuel.com"
                        className="w-full"/> 
                    </div>
                    <button type="submit" className="block text-white bg-blue-500 rounded-md w-full hover:opacity-40 p-3">
                        Continue
                    </button>
                </form>
                <p className="text-center">Or Sign up with</p>
                <div className="flex flex-col gap-2">
                    <form
                     action={async()=>{
                         "use server"
                        await signIn("google")
                     }}
                     className="justify-items-center">
                        <button className="w-full h-[45px] hover:shadow-md rounded-md md:w-full md:h-[45px] flex justify-center items-center gap-3 md:rounded-md md:hover:shadow-md cursor-pointer">
                         <FcGoogle className="text-2xl" />
                         <span className="text-black font-semibold">Sign In with Google</span>
                        </button>
                    </form>
                </div>

            </div>

         </main>
    )
}