import { useState, useEffect, useRef } from "react";
import { BellIcon, ChevronDownIcon, MenuIcon, SearchIcon } from "./Icons";
import Input from "./Input";
import UserAvatar from "../assets/image/png/user.png";
import Button from "./Button";

const notifications = [
  { id: 1, title: "Payment received", time: "2 min ago" },
  { id: 2, title: "New invoice", time: "1 hour ago" },
  { id: 3, title: "Account updated", time: "3 hours ago" },
];

const profileMenuItems = [
  { id: 1, label: "My Profile" },
  { id: 2, label: "Settings" },
  { id: 3, label: "Billing" },
  { id: 4, label: "Log Out" },
];

function Header({ onToggle }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);
  return (
    <header className="py-3 md:py-[18px] px-4 md:px-8 bg-white border-b border-gray-200 sticky top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between gap-4 lg:gap-6">
        <Button
          onClick={onToggle}
          variant="link"
          className="p-0! w-8 h-8 block md:hidden"
        >
          <MenuIcon />
        </Button>
        <div className="w-full max-w-[300px] xl:max-w-[400px] relative md:block hidden">
          <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-3 lg:left-6" />
          <Input
            placeholder="Search something here"
            className="rounded-full ps-10 lg:ps-18"
          />
        </div>
        <div className="flex items-center gap-6 ml-auto">
          <SearchIcon className="block md:hidden" />
          <div className="relative group">
            <Button
              type="button"
              aria-label="Notifications"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-100 bg-white p-0! cursor-pointer hover:bg-white hover:border-primary"
            >
              <BellIcon size={20} />
              <span className="absolute right-px top-px h-2.5 w-2.5 rounded-full bg-danger"></span>
            </Button>
            <div className="absolute right-0 top-full w-[400px] pt-3 z-50 group-hover:opacity-100 group-hover:visible opacity-0 invisible duration-300 translate-y-4 group-hover:translate-y-0">
              <div className=" bg-white border border-gray-200 rounded-[10px] shadow-lg ">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h3 className="text-base font-semibold text-dark-gray">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-96 overflow-y-auto p-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="py-1 border-b border-gray-200 last:border-0"
                    >
                      <div className="px-3 py-2 hover:bg-background transition-colors cursor-pointer rounded-md">
                        <p className="text-sm font-medium text-dark-gray">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-gray-200">
                  <Button
                    variant="link"
                    className="text-sm font-medium text-primary hover:underline w-full text-left p-0!"
                  >
                    View all notifications
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="h-11 w-11 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={UserAvatar}
                  alt="John Cornors"
                  className="h-11 w-11 rounded-full object-cover"
                />
              </div>
              <span className=" hidden md:block text-base font-semibold text-dark-gray">
                John Cornors
              </span>
              <ChevronDownIcon
                size={16}
                className={`transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-[10px] shadow-lg z-50 p-2">
                {profileMenuItems.map((item) => (
                  <Button
                    variant="link"
                    key={item.id}
                    onClick={() => {
                      setIsProfileOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left! justify-start! no-underline! hover:text-primary! text-sm font-medium text-dark-gray! hover:bg-background"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
