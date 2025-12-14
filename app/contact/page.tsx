"use client"
import { EnvelopeIcon, FacebookLogoIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import {Instagram, LocationEdit, PhoneCall} from "lucide-react"
export default function contact (){
    return(
        <main>
            <Navbar/>
            <div className="relative pt-20 ">
            {/* Background Image */}
            <img
                src="https://i.pinimg.com/736x/ee/c6/07/eec607001a0c2f778ddf14ab5bb8555f.jpg"
                alt="contact us page"
                className="w-full h-[40vh] object-cover  shadow-lg"
            />
            </div>
            <section className="flex gap-2 items-center flex-wrap justify-center ">
                <div className="">
        <h1 className="font-semibold text-[30px]">Get in touch</h1>
        <p>Have a project in mind or just want to say hi? We’d love <br /> to hear from you </p><br />
        <div className="flex flex-col gap-4">

            {/* Email */}
            <div >
            <div className="flex items-center justify-center md:justify-start gap-2">
                <EnvelopeIcon
                width={20}
                />
                <div>
                <h1 className="font-semibold text-lg">Email us</h1>
                <p className="text-gray-500">techvibe@info.org</p>
                <p className="text-gray-500">techvibe@info.com</p>
                </div>
            </div>
            </div>

            {/* Location */}
            <div >
            <div className="flex items-center justify-center md:justify-start gap-2">
                <LocationEdit/>
                <div>
                <h1 className="font-semibold text-lg">Head Office</h1>
                <p className="text-gray-500">Kigali, Rwanda</p>
                <p className="text-gray-500">Kigali, Rwanda</p>
                </div>
            </div>

            </div>
                    {/* Phone */}
            <div >
            <div className="flex items-center justify-center md:justify-start gap-2">
                <PhoneCall/>
                <div>
                <h1 className="font-semibold text-lg">Call us</h1>
                <p className="text-gray-500">(+250) 787 845 162</p>
                <p className="text-gray-500">(+250) 787 845 162</p>
                </div>
            </div>
        </div>

            </div><br />
            <hr /><br />
            <h1>Follow our social media</h1>
            <div className='cursor-pointer flex gap-2'><br />
          <FacebookLogoIcon/>
          <InstagramLogoIcon/>
          <GithubLogoIcon/>
          <LinkedinLogoIcon/>
        </div>
        </div>
                    <form className="flex flex-col  gap-3 w-fit z-20 bg-white py-10 px-5 ">
              <h1 className="font-semibold text-[30px]">Send us a message</h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full">
            <input 
                type="email" 
                placeholder="Email" 
                className="border px-3 py-2 rounded-2xl w-full sm:w-[48%] outline-none text-black"
            />
            <input 
                type="tel" 
                placeholder="Phone number" 
                className="border px-3 py-2 rounded-2xl w-full sm:w-[48%] outline-none "
            />
            </div>

                <input type="text" placeholder="Name"  className="border px-3 py-1.5 rounded-2xl outline-none"/>
                <textarea  cols="28" rows="10" placeholder="Enter your Message" className="border px-4 resize-none rounded-2xl outline-none "></textarea>
            <button className="bg-green-950 text-white py-2 rounded-2xl font-medium">Submit <i className="fa-solid fa-paper-plane"></i></button>
            </form>
            </section>
         <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg px-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.429523133115!2d30.0782980740155!3d-1.9827701979993024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6108d6db08d%3A0xbfc486d1fb045285!2sKK%20567%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1765703465124!5m2!1sen!2srw"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>

            <Footer/>
        </main>
    )
}