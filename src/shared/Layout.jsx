import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      <div
        className={`flex-1 min-w-0 flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-[80px]" : "ml-[286px]"
        }`}
      >
        <Header />
        <main className="flex-1 min-w-0 p-4 3xl:p-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
