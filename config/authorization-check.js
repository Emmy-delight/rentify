import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function AuthorizationCheck () {
     const session = await auth();
        if(!session?.user) {
            redirect("/auth/login");
        }
}