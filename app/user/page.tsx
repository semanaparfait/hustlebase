// user/page.tsx

import Link from 'next/link';

export default function UserRootPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">

      </h1>
      <p className="text-gray-600">
        This is your central hub for job applications, profile management, and more.
      </p>
      
      {/* Optional: Add a quick link to the dashboard */}
      <Link href="/user/dashboard" className="w-fit px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-150">
        Go to Dashboard
      </Link>
      
      <div className="mt-8 p-4 bg-gray-50 border rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700">Quick Status</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>5 jobs applied this week.</li>
            <li>Your profile completeness is 75%.</li>
            <li>2 new matching jobs found.</li>
        </ul>
      </div>
    </div>
  );
}