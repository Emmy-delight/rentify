import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import TenantForm from "./tenant-form";

export default async function Page() {
    const session = await auth();
    return (
       <>
       <AuthorizationCheck/>
       <TenantForm userId={session?.user?.id}/>
       </>
 )
}