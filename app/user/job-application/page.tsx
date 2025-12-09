// user/job-application/page.tsx


// Mock Data (replace this with actual API fetching)
const mockApplications = [
  { id: 1, title: "Frontend Developer", company: "TechCorp", date: "2025-11-20", status: "Interview Scheduled" },
  { id: 2, title: "Senior UI/UX Designer", company: "Creative Minds Inc.", date: "2025-11-15", status: "Pending Review" },
  { id: 3, title: "Junior Data Analyst", company: "DataFlow Solutions", date: "2025-11-10", status: "Rejected" },
];

export default function JobApplicationPage() {
  const applications = mockApplications; // In real app, this would be data from an API

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">💼 My Job Applications</h1>
      
      {applications.length === 0 ? (
        // --- Empty State UI ---
        <div className="text-center p-10 border rounded-lg bg-gray-50">
          <p className="text-lg text-gray-600 mb-4">You haven't applied for any jobs yet!</p>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Start Job Search
          </button>
        </div>
      ) : (
        // --- Table View UI ---
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title / Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{app.title}</div>
                    <div className="text-sm text-gray-500">{app.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${app.status.includes('Interview') ? 'bg-blue-100 text-blue-800' : 
                         app.status.includes('Pending') ? 'bg-yellow-100 text-yellow-800' : 
                         'bg-red-100 text-red-800'}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href={`/application/${app.id}`} className="text-green-600 hover:text-green-900">
                      View Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}