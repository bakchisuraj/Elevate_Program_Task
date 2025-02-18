import React from "react";
import {
  Calendar,
  MessageCircleQuestion,
  BellDot,
  Circle,
  Search,
} from "lucide-react";
const Topbar = () => {
  return (
    <>
      <div class="flex justify-evenly  border border-solid border-black p-4">
        
          <div class="flex items-center w-[20%]">
            <div class="flex ml-8">
              <Search />
              <input type="text" placeholder="Search for anything" />
            </div>
          </div>
          <div class=" flex">
            <div class="flex ">
              <div class="w-14">
                <Calendar />
              </div>
              <div class="w-14">
                <MessageCircleQuestion />
              </div>
              <div class="w-14">
                <BellDot />
              </div>
            </div>
            <div class="flex w-2">
              <h3>name</h3>
              <h3>loction</h3>
              <Circle />
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Topbar;
