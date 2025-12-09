
export default function Hero() {
  return (
    <main className="w-full  h-screen flex items-center md:p-10 ">
        

    <section className=" md:w-[35%] text-left flex flex-col gap-2 px-7">   
        <h1 className="md:text-6xl text-3xl font-bold mb-4">Your career. <br /> Unlocked.</h1>
        <p className="text-lg mb-6  max-w-2xl">Build a cv that gets noticed,and let <b>AI find & apply</b> for your dream job in <b>Rwanda .</b></p>
        <div className="flex  gap-4">

        <button className="bg-blue-600 text-white py-1 px-4 rounded-lg font-semibold cursor-pointer text-[14px] md:text-base">Get Started</button>
         <button className="border-green-700 border-2 text-green-700 py-1 px-4 rounded-lg font-semibold cursor-pointer">Find & Apply for Jobs</button>
        </div>
        <p>Trusted by Candidates hire at:</p>
        <div className="flex gap-2 py-3">
            <img src="/alu1.png" alt="" width={80}/>
            <img src="/solvit1.png" alt="" width={80}/>
        </div>

    </section>
    <section>

    </section>
    </main>
  );
}