import {Eye} from "lucide-react";
export default function UserDashboard() {
    return (
      <main className="h-screen flex flex-col"> 
      <div className="bg-blue-900 hidden text-white py-10 px-8 rounded-xl  justify-between items-center mb-6">
        <div>

    <h1 className="text-2xl font-bold mb-2">
      Welcome back, <span >Semana Shema Parfait</span>
    </h1>

    <p >
      Manage your services, review your activity, and track your progress on Hustle Base.
    </p>

    <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md transition">
      Review Dashboard
    </button>
        </div>
        <div className="">

    <img src="/user.png" alt="" width={200} color="white"  />
        </div>

        </div> 
<div className="bg-white flex items-center gap-6 p-6 rounded-xl shadow-md">
  {/* Illustration */}
  <div className="shrink-0">
    <img
      src="/user1.jpg"
      alt="User CV illustration"
      className="w-[180px]"
    />
  </div>

  {/* Content */}
  <div className="flex-1">
    <h1 className="text-lg font-semibold mb-1">
      Your Latest CV
    </h1>

    <p className="text-gray-600 text-sm mb-4">
      Quickly view or update your latest CV to keep your profile up to date.
    </p>

    <button className="border border-blue-600 text-blue-600 text-sm py-1.5 px-3 rounded-lg flex items-center gap-1 hover:bg-blue-50 transition">
      <Eye size={14} />
      View CV
    </button>
  </div>
</div>


      </main>  
)
}