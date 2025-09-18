export default function Input({ type = "text", placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      name={name}     
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-[29rem] h-16 rounded-xl border-tertiary border-2 bg-input pl-4 placeholder-quaternary text-lg"
    />
  );
}
