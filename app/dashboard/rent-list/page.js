   "use client"
import { db } from "@/config/firebase.config"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function RentList () {
    const [tenants, setTenants] = React.useState([]);
    const {data: session} = useSession();

     React.useEffect(()=>{
        const fetchTenants =async () =>{
            try {
                 const q  = query(
                    collection(db, "tenants"),
                    where("user", "==", session?.user?.id),
                    // orderBy("timeCreated", "desc")
                 );
                 const snapShot = await getDocs(q);

                 const compileTenant = [];
                  snapShot.docs.forEach((doc)=>{
                     compileTenant.push({
                        id: doc.id,
                        data: doc.data(),
                     });
                  });
                   setTenants(compileTenant);
                   console.log(compileTenant);

                } catch(error) {
                    console.error("Error occured while fetching tenants",error)
                }
        }
        if(session) {
            fetchTenants();
        }
     },[session]);

    return(
         <main className="min-h-screen mx-auto  py-8 bg-gray-50 shadow-lg">
            <h1 className="text-3xl font-semi-bold mb-6 text-center">Rent List</h1>
            <p className="text-center text-gray-500 mb-6">Collection of All Rents Paid</p> 
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 px-10">
               {tenants.map(tenants=>(
                <div key={tenants.id}>
                    {/* Tenant Image */}
                    <Image
                    src="/building.webp"
                    alt="my-image"
                    width={300}
                    height={300}
                    className="rounded-t-xl"
                    />
                    {/* Tenant Details */}
                    <div className="p-4">
                        <span className="block font-semibold text-gray-800"> {tenants.data.fullName} </span>
                        <span className="block text-sm text-gray-500">{tenants.data.phone} </span>
                        <span className="block text-sm text-gray-500">{tenants.data.email}</span>
                        <span className="block font-medium text-gray-800">{tenants.data.apartment}</span>
                        <span className="block font-semibold">{tenants.data.rentAmount}</span>
                        <span className="block text-sm font-semibold text-gray-500">{tenants.data.dueDate}</span>
                        <span className="block text-sm font-semibold text-green-500">{tenants.data.paymentStatus}</span>
                        <span className="block text-sm text-gray-800">{tenants.data.timeCreated}</span>
                        <span className="block text-sm text-gray-600">{tenants.data.notes}</span>
                    </div>

                </div>
                ))} 
            </div>

         </main>
    )
}


