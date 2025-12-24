import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
            <ul>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Settings</li>
                <li>Analytics</li>
                <li>Reports</li>
            </ul>
        </nav>
      </aside>

      {/* Page content */}
      <section className="flex-1 bg-slate-50 p-6">
        {children}
      </section>
    </div>
  );
}
