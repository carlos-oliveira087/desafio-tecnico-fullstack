export default function AuthSubmitButton({ type = "submit", children, onClick }) {

  return (
    <div>
      <button 
        type={type}
        onClick={onClick}
        className="bg-secondary hover:bg-secondary/80 text-primary font-bold w-[32rem] h-11 rounded-3xl"
      > 
        {children}
      </button>
    </div>
  )
}

