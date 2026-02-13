import { useState } from "react";
import { Link, useLocation } from "react-router";
import Logo from "../assets/image/png/logo.png";
import ShortLogo from "../assets/image/png/short-logo.png";
import {
  BagIcon,
  BoxOutlinedIcon,
  HelpIcon,
  HomeBoldIcon,
  HomeOutlinedIcon,
  InboxIcon,
  InvoiceOutlinedIcon,
  InvoioceBoldIcon,
  LogoutIcon,
  MoonIcon,
  ReimburseIcon,
  SettingIcon,
  SidebarArrow,
  StatusUpBoldIcon,
  StatusUpOutlinedIcon,
  SunIcon,
} from "./Icons";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

const menuItems = [
  {
    path: "/",
    label: "Home",
    icon: HomeOutlinedIcon,
    activeIcon: HomeBoldIcon,
  },
  {
    path: "/insight",
    label: "Insight",
    icon: StatusUpOutlinedIcon,
    activeIcon: StatusUpBoldIcon,
  },
  {
    path: "/invoices",
    label: "Invoices",
    icon: InvoiceOutlinedIcon,
    activeIcon: InvoioceBoldIcon,
  },
  {
    path: "/products",
    label: "Products",
    icon: BoxOutlinedIcon,
    activeIcon: BoxOutlinedIcon,
  },
  {
    path: "/reimburse",
    label: "Reimburse",
    icon: ReimburseIcon,
    activeIcon: ReimburseIcon,
  },
  {
    path: "/inbox",
    label: "Inbox",
    icon: InboxIcon,
    activeIcon: InboxIcon,
  },
  {
    path: "/people-teams",
    label: "People & Teams",
    icon: InboxIcon,
    activeIcon: InboxIcon,
  },
];

const preferencesItems = [
  {
    path: "/settings",
    label: "Settings",
    icon: SettingIcon,
    activeIcon: SettingIcon,
  },
  {
    path: "/help-center",
    label: "Help & Center",
    icon: HelpIcon,
    activeIcon: HelpIcon,
  },
];

function Sidebar({ isCollapsed, onToggle }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isDark, toggleTheme } = useTheme();

  return (
    <aside
      className={` shrink-0 border-r border-gray-200 bg-white max-h-screen fixed top-0 left-0 bottom-0 z-20 transition-all duration-300 ${
        isCollapsed ? "w-[80px]" : "w-[286px]"
      }`}
    >
      <Button
        onClick={onToggle}
        className="absolute p-0! top-[29px] right-0 h-6! w-6! rounded-md border border-primary/40 text-primary! hover:text-white! flex items-center justify-center translate-x-1/2 bg-white shadow-[0px_4px_4px_0px_#40A19840]"
      >
        <div
          className={`transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : ""
          }`}
        >
          <SidebarArrow />
        </div>
      </Button>
      <div
        className={`py-[30px] h-full flex flex-col ${
          isCollapsed ? "px-4" : "px-4"
        }`}
      >
        <Link to="/" className="inline-block">
          <img src={isCollapsed ? ShortLogo : Logo} alt="Letmegrab" />
        </Link>
        <nav className="overflow-y-auto max-h-[calc(100vh-210px)] custom-scrollbar mt-[30px] space-y-14">
          <div>
            {!isCollapsed && (
              <h6 className="text-sm font-medium text-gray px-4 mb-2.5">
                Main Menu
              </h6>
            )}
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const isActive = currentPath === item.path;
                const IconComponent = isActive ? item.activeIcon : item.icon;

                return (
                  <li key={item.path} className="overflow-hidden">
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3.5 font-medium  rounded-[10px] text-lg leading-normal transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-gray-50 hover:text-primary hover:bg-background"
                      } ${isCollapsed ? "px-3 py-2" : "px-4 py-3.5"}`}
                    >
                      <IconComponent
                        color={isActive ? "white" : "currentColor"}
                        className="shrink-0"
                      />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            {!isCollapsed && (
              <h6 className="text-sm font-medium text-gray px-4 mb-2.5">
                Preferences
              </h6>
            )}
            <ul className="space-y-1">
              {preferencesItems.map((item) => {
                const isActive = currentPath === item.path;
                const IconComponent = isActive ? item.activeIcon : item.icon;

                return (
                  <li key={item.path} className="overflow-hidden">
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3.5 font-medium rounded-[10px] text-lg leading-normal transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-gray-50 hover:text-primary hover:bg-background"
                      } ${isCollapsed ? "px-3 py-2" : "px-4 py-3.5"}`}
                    >
                      <IconComponent
                        color={isActive ? "white" : "currentColor"}
                        className="shrink-0"
                      />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <div
                  className={`flex items-center justify-between py-3.5 px-4 rounded-[10px] text-lg leading-normal text-gray-50 ${
                    isCollapsed ? "p-0!" : "px-4 py-3.5"
                  }`}
                >
                  {!isCollapsed && (
                    <>
                      <BagIcon />
                      <span className="font-medium">Dark Mode</span>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="relative w-[68px] rounded-full bg-background transition-all duration-300 flex p-1 justify-between h-[34px] cursor-pointer"
                    aria-label="Toggle dark mode"
                  >
                    <div className="relative z-10 h-[26px] w-[26px] flex items-center justify-center">
                      <SunIcon size={18} color={isDark ? "#1A202C" : "white"} />
                    </div>
                    <div className="relative z-10 h-[26px] w-[26px] flex items-center justify-center">
                      <MoonIcon
                        size={15}
                        color={isDark ? "white" : "#1A202C"}
                      />
                    </div>
                    <span
                      className={`w-[27px] h-[27px] rounded-full bg-primary absolute top-1/2 -translate-y-1/2 transition-all duration-300 z-0 ${
                        isDark ? "left-[38px]" : "left-1"
                      }`}
                    ></span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Link
          to="/logout"
          className={`flex items-center gap-3.5 font-medium rounded-[10px] text-lg leading-normal transition-colors text-gray-50 hover:text-primary mt-auto overflow-hidden ${
            isCollapsed ? "px-3 py-2" : "px-4 py-3.5"
          }`}
        >
          <LogoutIcon className="shrink-0" />
          <span className="whitespace-nowrap">Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
