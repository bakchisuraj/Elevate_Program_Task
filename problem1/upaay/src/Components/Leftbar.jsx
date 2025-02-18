import React from 'react'
import { LayoutGrid ,MessageSquareMore,ListChecks,UsersRound,Settings    } from 'lucide-react';
const Leftbar = () => {
  return (
    <>
    <div class="border border-solid border-black w-[20%] p-2">
        <div class="flex p-2">
        <LayoutGrid /><h2>Home</h2>
        </div>
        <div class="flex p-2">
        <MessageSquareMore /><h2>Messages</h2>
        </div>
        <div class="flex p-2">
        <ListChecks /><h2>Task</h2>
        </div>
        <div class="flex p-2">
        <UsersRound /><h2>Members</h2>
        </div>
        <div class="flex p-2">
        <Settings  /><h2>Settings</h2>
        </div>


    </div>
    </>
  )
}

export default Leftbar