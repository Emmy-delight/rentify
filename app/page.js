import Image from "next/image";

export default function HomePage () {
   return (
        <main className="bg-gray-50">
            <div  className="bg-[url(/mybg.jpg)] h-[40vh] bg-contain bg-no-repeat md:bg-[url(/mybg.jpg)] md:h-[60vh] md:bg-contain md:bg-no-repeat lg:bg-[url(/mybg.jpg)] lg:h-[100vh] lg:bg-cover lg:bg-no-repeat">
             <p className="text-4xl text-center font-bold text-white">This is my background Image</p>
            </div>
            <h1 className="text-4xl font-bold text-center mt-5">MY PRODUCTS</h1>
            <div className="ml-5 mb-5 grid grid-cols-4 mt-5">
              <div className="w-[300px] h-[300px] rounded shadow-md ">
                <Image
                width={300}
                height={200}
                src="/building.webp"
                alt="product-image"/>
                <p className="text-sm text-gray-500">5 bedroom duplex at Guzape</p>
                <p>2.5 Billion</p>
              </div>
               <div className="w-[300px] h-[300px] rounded shadow-md ">
                <Image
                width={300}
                height={200}
                src="/building.webp"
                alt="product-image"/>
                <p className="text-sm text-gray-500">5 bedroom duplex at Guzape</p>
                <p>2.5 Billion</p>
              </div>
               <div className="w-[300px] h-[300px] rounded shadow-md ">
                <Image
                width={300}
                height={200}
                src="/building.webp"
                alt="product-image"/>
                <p className="text-sm text-gray-500">5 bedroom duplex at Guzape</p>
                <p>2.5 Billion</p>
              </div>
               <div className="w-[300px] h-[300px] rounded shadow-md ">
                <Image
                width={300}
                height={200}
                src="/building.webp"
                alt="product-image"/>
                <p className="text-sm text-gray-500">5 bedroom duplex at Guzape</p>
                <p>2.5 Billion</p>
              </div>
            </div>
         
        </main>
   )
}
