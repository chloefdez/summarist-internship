import Sidebar from "../components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left sidebar */}
        <Sidebar />

        {/* Right content */}
        <div className="flex-1">
          {/* Top bar */}
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="ml-auto max-w-md">
              <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                <input
                  placeholder="Search for books"
                  className="w-full bg-transparent text-sm outline-none"
                />
                <span className="text-slate-500">🔍</span>
              </div>
            </div>
          </div>

          {/* Page content */}
          <main className="px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}