import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export function Footer () {
  const year = new Date().getFullYear();
    return (
        <footer className="bg-black grid grid-cols-1 md:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:px-5 lg:bg-black ">
           <div>
             <p className="text-2xl text-blue-500 font-bold">Rentify</p>
             <p className="text-xs text-gray-100"> &copy; {year} Rental Management system</p>
           </div>
           <div>
              <p className="text-md text-gray-700">Head Office</p>
              <p className="text-md text-gray-700">Umaru Musa Way, Asokoro</p>
           </div>
           <div>
              <ul className="flex lg:justify-end items-center gap-8">
                <li><Link href="#"><FaFacebookF className="text-3xl text-blue-500" /></Link></li>
                <li><Link href="#"><FaLinkedinIn  className="text-3xl text-blue-500" /></Link></li>
                <li><Link href="#"><FaGithubSquare className="text-3xl text-blue-500" /></Link></li>
              </ul>
              <ul className="flex lg:justify-end items-center gap-4">
                <li><Link href="#" className="text-sm text-gray-100">Glossary</Link></li>
                <li><Link href="#" className="text-sm text-gray-100">Cookies</Link></li>
                <li><Link href="#" className="text-sm text-gray-100">Privacy Policy</Link></li>
              </ul>
           </div>
        </footer>
    )
}