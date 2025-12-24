import {KeySquare} from "lucide-react";
export default function MyProfile() {
    return (
      <main className="h-screen  flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900  mb-4">
    My Profile page
    </h1>
    <form className="flex flex-col gap-0.5 ">
        <div className=" flex flex-wrap w-full gap-3">
          <div className="flex flex-col">
            <label className="text-sm font-medium ">YOUR NAME</label>
            <input className="border-2 rounded-lg py-1 px-2 mb-2" type="text"  />

          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium ">EMAIL ADDRESS</label>
            <input type="email" className="border-2 rounded-lg py-1 px-2 mb-2" />
          </div>

        </div>
        <div className=" flex flex-wrap w-full gap-3">
           <div className="flex flex-col">
            <label className="text-sm font-medium ">Phone number</label>
            <input type="phone" className="border-2 rounded-lg py-1 px-2 mb-2" />
          </div>
           <div className="flex flex-col">
            <label className="text-sm font-medium ">JOINED</label>
            <input className="border-2 rounded-lg py-1 px-2 mb-2" type="text"  />

          </div>

        </div>

        <p className="flex font-semibold"> <KeySquare/>Change Password</p>
        <div className="w-[42%] flex flex-col">
        <label className="text-sm font-medium ">CURRENT PASSWORD</label>
        <input type="password" className="border-2 rounded-lg py-1 px-2 mb-2 w-full"/>
        <label className="text-sm font-medium ">NEW PASSWORD</label>
        <input type="password" className="border-2 rounded-lg py-1 px-2 mb-2"/>
        <label className="text-sm font-medium ">NEW PASSWORD</label>
        <input type="password" className="border-2 rounded-lg py-1 px-2 mb-2"/>
        </div>
        <button className="bg-green-800 py-1 rounded-lg w-[42%]">Save</button>

    </form>
        </main>
    )
}