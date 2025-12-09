"use client";
import { useState,useEffect } from "react";
import {
  BellRing,CircleUserRound,LayoutDashboard,Cog,LogOut,Briefcase,Sparkles,FileText} from "lucide-react";
import './user.css'
export default function UserPage() {
  const links = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Job Applications", icon: Briefcase },
    { name: "Matching Jobs", icon: Sparkles },
    { name: "My Profile", icon: CircleUserRound },
    { name: "CV / Documents", icon: FileText },
    { name: "Settings", icon: Cog },
  ];
  const Dashboard = () => <div>Dashboard Content</div>;
const JobApplications = () => <div>Job Applications</div>;
const MatchingJobs = () => <div>Matching Jobs</div>;
const Profile = () => <div>My Profile</div>;
const Documents = () => <div>CV / Documents</div>;
const Settings = () => <div>Settings</div>;

    const [active, setActive] = useState("Dashboard");
  return (
    <main className="h-screen  flex flex-col">
      <header className="flex items-center justify-between px-4 border-b border-b-gray-200 bg-white h-16">
        <img src="/logo.png" alt="logo on user dashboard" width={150} />

        <div className="flex items-center gap-4 cursor-pointer">
          <BellRing size={20} />
          <CircleUserRound size={20} />
        </div>
        <div className="hidden">
          <p>Semana</p>
          <p>semanaa@techvive.com</p>
          <ul>
            <li>Profile</li>
            <li>Notfication</li>
            <li>Log out</li>
          </ul>
        </div>
      </header>
      <section className="flex flex-1">
         {/* <aside className="bg-green-600 w-16 hover:w-48 transition-all duration-300 ease-in-out group flex flex-col"> */}
        <aside className=" bg-white  text flex flex-col justify-between">
    <ul className="mt-4 space-y-1 link-user">
      {links.map((link) => (
        <li key={link.name} className="flex items-center gap-2 px-4 py-3  cursor-pointer">
          <link.icon size={18} /> 
          <span>{link.name}</span>
        </li>
      ))}


    </ul>

    <p className="flex items-center gap-2 px-4 py-3 text-red-500 text-right cursor-pointer">
        <LogOut size={18} /> Logout
    </p>

        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-semibold">Welcome back,<span>SEMANA SHEMA Parfait</span></h1>
          {/* Main content goes here */}
        </div>


      </section>
    </main>
  );
}
