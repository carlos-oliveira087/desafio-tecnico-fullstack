export default function SwitchButton({ isPrivate, setIsPrivate }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <span className="text-md font-semibold mr-4">
        {isPrivate ? "Postagem Privada" : "Postagem Pública"}
      </span>
      <div
        onClick={() => setIsPrivate(!isPrivate)}
        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isPrivate ? "bg-secondary" : "bg-primary"
        }`}
      >
        <div
          className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ${
            isPrivate ? "translate-x-5" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
