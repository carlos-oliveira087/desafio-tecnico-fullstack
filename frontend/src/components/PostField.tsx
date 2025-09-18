import { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import SwitchButton from "./SwitchButton";

export default function PostField() {
	const [isTyping, setIsTyping] = useState("");

  return (
    <div>
			<div className="absolute top-[11.8rem] left-[16.5rem]">
				<img className="rounded-full" src="/frontend/public/logo.png" alt="" />
				<p className="rounded-full bg-secondary p-1 text-[2.1rem]"><IoIosPerson/></p>
			</div>
			<textarea 
				value={isTyping} 
				maxLength={280} 
				className="w-full h-[11rem] bg-input border-tertiary border-2 rounded-2xl resize-none pt-5 px-[5.5rem] text-quaternary placeholder-quaternary placeholder:text-lg font-semibold text-[14px]" 
				placeholder="O que está acontecendo?" 
				onChange={(e) => setIsTyping(e.target.value)}
			></textarea>

			<div className="absolute top-[18.8rem] left-[20.5rem]">
				<SwitchButton />
			</div>
			<div className="absolute top-[18rem] right-[17rem]">
				
				<span className="text-md text-quaternary mr-5">{isTyping.length}/280</span>
				<button className="bg-secondary font-semibold text-primary w-24 h-10 rounded-3xl">
					Postar
				</button>
			</div>
			
    </div>
  );
}
