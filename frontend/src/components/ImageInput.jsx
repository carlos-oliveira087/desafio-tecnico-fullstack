import { useState } from "react";
import { TbCameraShare } from "react-icons/tb";

export default function ImageInput({ fotoPerfil, setFotoPerfil }) {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-8 w-full">
      <label
        htmlFor="fotoPerfil"
        className="cursor-pointer bg-secondary text-primary font-semibold py-2 px-4 rounded-2xl hover:bg-secondary/80 transition-colors flex items-center gap-2"
      >
        Selecionar Foto
        <TbCameraShare />
      </label>
      <input
        id="fotoPerfil"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-2 w-12 h-12 rounded-full object-cover border-2 border-secondary"
        />
      )}
      {!preview && fotoPerfil && (
        <span className="mt-2 text-sm text-quaternary">{fotoPerfil.name}</span>
      )}
    </div>
  );
}
