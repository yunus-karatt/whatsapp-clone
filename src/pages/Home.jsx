import React from "react";
import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";

const Home = () => {
  return (
    <main className=" h-lvh overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <ChatScreen />
      </div>
    </main>
  );
};

export default Home;
