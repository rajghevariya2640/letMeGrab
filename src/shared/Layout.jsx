import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth >= 992) {
        setIsCollapsed(false);
      } else if (window.innerWidth <= 991) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      <div
        className={`flex-1 min-w-0 flex flex-col transition-all duration-300 ${
          isCollapsed ? "md:ml-[80px] ml-0" : "md:ml-[286px] ml-0"
        }`}
      >
        <Header onToggle={toggleSidebar} />
        <main className="flex-1 min-w-0 p-4 3xl:p-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
