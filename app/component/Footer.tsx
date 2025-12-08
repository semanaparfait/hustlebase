export default function Footer() {
  return (
        <main className=" w-full">
            <section>
                <div className="bg-[#0c4242] text-white rounded-2xl flex flex-wrap w-[96%] gap-8 items-center justify-between p-15 mx-auto mt-10">
                    <div className="md:w-1/2">
                        <h1 className="font-bold text-3xl">Subscribe our <br /> newsletter</h1>
                        <p className="pt-2 hidden md:block">Subscribe to our newsletter and be the first to recive insights, updates,and expert tips on optimizing your financial managememnt.</p>
                    </div>
                    <div>
                        <label className="font-medium px-2.5 mb-5">Stay up to date</label>
                        <form className="flex flex-wrap gap-1.5 my-1.5">
                        <input
                         type="email"
                         placeholder="Enter your email"
                         className="bg-[#1e534b] outline-none py-2 px-4 rounded-3xl"
                         />
                        <button className="bg-[#bfe39f] text-[#0c4242] font-medium py-2.5 px-3.5 rounded-3xl">Subscribe</button>
                        </form>
                        <p>By subscribing you agree to our <u>Privacy policy</u></p>
                    </div>
                </div>
            </section>
            <section className="flex flex-wrap gap-4 items-center justify-between px-4 h-[17rem]">
                <div>
                    <img src="/logo.png" alt="logo for thr footer"  width={170}/>
                    <p className="md:w-[40%] md:block hidden">Your all-in-one career assistant. Build CVs, automate job applications, and track your career growth in one place.</p>
                </div>
                <div className="flex md:gap-20 gap-5 cursor-pointer">
                    <ul>
                        <li className="font-semibold text-[17px] pb-2">Features</li>
                        <li>Payment</li>
                        <li>Card</li>
                        <li>Pricing</li>
                    </ul>
                    <ul>
                        <li className="font-semibold text-[17px] pb-2">Support</li>
                        <li>Help</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li className="font-semibold text-[17px] pb-2">Legal</li>
                        <li>Privacy Police</li>
                        <li>Terms of services</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </section>
        <footer className="w-full h-16 flex justify-center items-center bg-green-900 text-white mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} HustleBase Rwanda. All rights reserved.</p>
    </footer>
        </main>
  );
}