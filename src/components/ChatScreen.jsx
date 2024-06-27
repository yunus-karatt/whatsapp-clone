import React from "react";
import profile from "../assets/yunus_dp.jpg";
import video from "../assets/video.svg";
import call from "../assets/call.svg";
import lense from "../assets/search.svg";
import smiley from "../assets/smiley.svg";
import paperClip from "../assets/paperClip.svg";
import mic from "../assets/mic.svg";
const ChatScreen = () => {
  return (
    <section className="relative w-full ms-16 md:ms-0">
      <div className="w-full h-16 bg-white border border-l-0 flex justify-between items-center px-5">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border flex justify-center items-center">
            <img
              src={profile}
              alt="profile pic"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h6 className="font-bold text-base">+919995868047</h6>
            <span className="text-[#8696a0] text-sm">online</span>
          </div>
        </div>
        <div className="flex ">
          <div className="flex border rounded-md h-[80%] p-2 me-5 ">
            <div className="border-r pr-3">
              <button>
                <img src={video} alt="video camera" />
              </button>
            </div>
            <div className="pl-3">
              <button>
                <img src={call} alt="call icon" />
              </button>
            </div>
          </div>
          <button>
            <img src={lense} alt="lense icon" />
          </button>
        </div>
      </div>

      <div className="w-full h-12 bg-white absolute bottom-1 border flex justify-between items-center px-5 gap-4">
        <div className="flex gap-4">
          <button>
            <img src={smiley} alt="icon" />
          </button>
          <button>
            <img src={paperClip} alt="icon" />
          </button>
        </div>
        <div className="w-full">
          <input type="text" placeholder="Type a Message" className="w-full" />
        </div>
        <div>
          <button>
            <img src={mic} alt="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatScreen;
