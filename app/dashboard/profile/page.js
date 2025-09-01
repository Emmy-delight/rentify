import Image from "next/image"

export default function Profile() {
     return (
            <main className="min-h-screen flex justify-center py-4 md:py-25 md:px-12 lg:py-15 lg:px-16 bg-gray-50 ">
               <div className="w-full md:w-[380px] flex flex-col gap-4 shadow-lg rounded-md  ">
                    <div className="flex justify-center">
                         <Image
                         width={80}
                         height={80}
                         src="/mybg.jpg"
                         alt="profile-image"
                         className="w-[80px] h-[80px] rounded-full"
                         />
                    </div>
                    <p className="text-center py-3 border-b border-gray-600">Emmy Billions</p>
                    <p className="text-center py-3 border-b border-gray-600">emmybillions@gmail.com</p>
                    <p className="text-center py-3 border-b border-gray-600">User ID</p>
               </div>
            </main>
     )
}