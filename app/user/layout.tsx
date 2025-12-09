import { ReactNode } from "react";
import Link from "next/link";

import {
  BellRing,CircleUserRound,LayoutDashboard,Cog,LogOut,Briefcase,Sparkles,FileText} from "lucide-react";
export default function UserLayout({
  children,
}: {
  children: ReactNode;
}) {

      const links = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Job Application", icon: Briefcase },
    { name: "Matching Jobs", icon: Sparkles },
    { name: "My Profile", icon: CircleUserRound },
    { name: "CV / Documents", icon: FileText },
    { name: "Settings", icon: Cog },
  ];
  return (
    <main className="h-screen flex flex-col">
      <header className="flex items-center justify-between px-4 border-b border-b-gray-200 bg-white h-16">
        <Link href="/">
        <img src="/logo.png" alt="logo on user dashboard" width={150} />
        </Link>

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
<Link 
                href={`/user/${link.name.toLowerCase().replace(' ', '-')}`}
                // 2. Add the styling to the <Link> instead of the <li>
                className="flex items-center gap-2 px-4 py-3 hover:bg-green-700 hover:text-white"
            >
                <link.icon size={18} /> 
                <span>{link.name}</span>
            </Link>
      ))}


    </ul>

    <p className="flex items-center gap-2 px-4 py-3 text-red-500 text-right cursor-pointer">
        <LogOut size={18} /> Logout
    </p>

        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
         {children}
        </div>


      </section>
    </main>
  );
}
