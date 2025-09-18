import { useState } from "react";

export default function SwitchButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-row justify-center items-center">
			<span className="text-md font-semibold mr-4">{isOn ? "Postagem Privada" : "Postagem Pública"}</span>
			<div
			onClick={() => setIsOn(!isOn)}
			className={`w-10 h-5 flex items-center bg-auth rounded-full p-1 cursor-pointer transition-colors duration-300 ${
					isOn ? "bg-secondary" : "bg-PRIMARY"
			}`}
			>
				<div
						className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ${
						isOn ? "translate-x-5" : ""
						}`}
				></div>
			</div>
    </div>
  );
}
