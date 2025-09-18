import { IoIosPerson } from "react-icons/io";
import { useState } from "react";
import { PiPencilSimple, PiTrash } from "react-icons/pi";

export default function Post({ id, image, author, content, createdAt, isOwner, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const getTimeAgo = () => {
    const now = new Date();
    const posted = new Date(createdAt);
    const diffMs = now.getTime() - posted.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffMinutes < 60) return `${diffMinutes}min`;
    if (diffHours < 24) return `${diffHours}h`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d`;
  };

  const handleSaveEdit = () => {
    if (editedContent.trim()) {
      onEdit(id, editedContent);
      setIsEditing(false);
    }
  };

  return (
    <div className="w-full m-4 p-4 mb-4 shadow-sm relative rounded-xl">
      <div className="flex flex-row items-center mb-2 gap-4">
        <img src={image} alt="Foto de Perfil" className="w-6 h-6 rounded-full object-cover" />
        <span className="font-bold">{author}</span>
        <span className="text-sm text-quaternary">{getTimeAgo()}</span>
      </div>

      {isEditing ? (
        <div className="ml-12 flex flex-col gap-2">
          <textarea
						maxLength={280} 
            className="bg-input border-tertiary text-quaternary border-2 w-full h-36 py-2 px-4 my-5 rounded-xl resize-none"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className="bg-secondary font-semibold text-primary rounded-2xl px-3 py-1 text-sm"
              onClick={handleSaveEdit}
            >
              Salvar
            </button>
            <button
              className="text-white rounded-2xl px-3 py-1 text-sm"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <p className="text-left ml-12">{content}</p>
      )}

      {isOwner && !isEditing && (
        <div className="absolute top-4 left-48 flex gap-2">
          <button
            className="flex justify-center text-center items-center bg-auth text-white rounded-full w-7 h-7 text-md"
            onClick={() => setIsEditing(true)}
          >
            <PiPencilSimple />
          </button>
          <button
            className="flex justify-center text-center items-center bg-auth text-white rounded-full w-7 h-7 text-md"
            onClick={() => onDelete(id)}
          >
            <PiTrash />
          </button>
        </div>
      )}
    </div>
  );
}
