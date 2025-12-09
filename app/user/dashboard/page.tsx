import {Eye} from "lucide-react";
export default function UserDashboard() {
    return (
      <main className="h-screen  flex flex-col">  
      <h1 className="text-4xl font-bold text-gray-900  mb-4">
    Welcome Back, <span>SEMANA SHEMA Parfait</span>
    </h1>
    <div className="bg-white">
        <div></div>
        <div>
            <h1>Your Latest cv</h1>
            <p className="">
            Quickly view or update your latest CV to keep your profile up to date.
            </p>
            <button className="border-2 text-blue-600 text-sm border-blue-600 py-1 px-2 rounded-lg flex gap-1"><Eye size={10}/> View</button>
        </div>
    </div>

      </main>  
)
}