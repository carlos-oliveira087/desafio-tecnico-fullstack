import { useState, useEffect } from "react";
import { IoIosPerson } from "react-icons/io";
import SwitchButton from "./SwitchButton";
import api from "../services/api";
import { toast } from "react-toastify";

export default function PostField({ onPostCreated }) {
	const [isTyping, setIsTyping] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [isPrivate, setIsPrivate] = useState(false);

  const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (usuario?.foto_perfil) setUserImage(usuario.foto_perfil);
  }, [usuario]);

  const handlePost = async () => {
    if (!isTyping.trim()) return toast.error("Digite algo para postar!");
    if (!usuario?.id || !token) return toast.error("Você precisa estar logado para postar!");

    try {
      const response = await api.post(
        "/posts",
        {
          conteudo: isTyping,
          usuario_id: usuario.id,
          post_privado: isPrivate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsTyping(""); 
      
    } catch (err) {
      console.error("Erro ao postar:", err);
      toast.error(err.response?.data?.message || "Erro ao postar");
    }
  };

  return (
    <div>
			<div className="absolute top-[11.8rem] left-[16.5rem]">
				
          <img
            className="w-11 h-11 rounded-full object-cover"
            src={userImage}
            alt="Foto de perfil"
          />
        
			</div>
			<textarea 
				value={isTyping} 
				maxLength={280} 
				className="w-full h-[11rem] bg-input border-tertiary border-2 rounded-2xl resize-none pt-5 px-[5.5rem] text-quaternary placeholder-quaternary placeholder:text-lg font-semibold text-[14px]" 
				placeholder="O que está acontecendo?" 
				onChange={(e) => setIsTyping(e.target.value)}
			></textarea>

			<div className="absolute top-[18.8rem] left-[20.5rem]">
				<SwitchButton isPrivate={isPrivate} setIsPrivate={setIsPrivate} />
			</div>
			<div className="absolute top-[18rem] right-[17rem]">
				
				<span className="text-md text-quaternary mr-5">{isTyping.length}/280</span>
				<button className="bg-secondary font-semibold text-primary w-24 h-10 rounded-3xl" onClick={handlePost}>
					Postar
				</button>
			</div>
			
    </div>
  );
}
