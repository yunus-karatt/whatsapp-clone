import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import Chat from "../assets/chat.svg";
import Call from "../assets/call.svg";
import ChatList from "./ChatList";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside className="flex duration-300 md:w-[500px] h-screen relative">
      <div
        className={`${
          open ? "w-44" : "w-16"
        } bg-slate-100 flex flex-col absolute h-full left-0 top-0 z-50 duration-300 ${!open ? "items-center" :"ps-5"} `}
      >
        <div className="h-16 flex">
          <button onClick={() => setOpen((prev) => !prev)}>
            <img src={hamburger} alt="icon" />
          </button>
        </div>
        <div className="flex flex-col gap-5 duration-300">
          <button className={`${open && "flex gap-5 items-center"}`}>
            <img src={Chat} alt="icon" />
            {open && <span>Chats</span>}
          </button>
          <button className={`${open && "flex gap-5 items-center"}`}>
            <img src={Call} alt="icon" />
            {open && <span>Calls</span>}
          </button>
          <button className={`${open && "flex gap-5 items-center"}`}> 
            <img src={Call} alt="icon" />
            {open && <span>Status</span>}
          </button>
        </div>
      </div>

      <ChatList />
    </aside>
  );
};

export default Sidebar;
