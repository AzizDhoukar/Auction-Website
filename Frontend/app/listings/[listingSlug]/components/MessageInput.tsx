'use client';

import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import axios from "axios";

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');

  const onSubmit = ( event : any) => {
    event.preventDefault();
    axios.post('/api/messages', { message });
    setMessage('');
  }
  
  const handleInputChange = (event : any) => {
    setMessage(event.target.value);
  };

  return ( 
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
      <form 
        onSubmit={onSubmit} 
        className="flex items-center gap-2 lg:gap-4 w-full">
        <div className="relative w-full">
            <input
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
                id='message'
                placeholder="Write a message"
                value={message}
                onChange={handleInputChange}/>
        </div>
        <button 
          type="submit" 
          className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition">
          <HiPaperAirplane
            size={18}
            className="text-white"
          />
        </button>
      </form>
    </div>
  );
}
 
export default MessageInput;