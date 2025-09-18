import { useNavigate } from 'react-router-dom';

export default function AuthButton() {
  const navigate = useNavigate();

  return (
    <div>
        <button 
          className='flex items-center text-md font-semibold justify-center bg-auth rounded-3xl h-10 w-24 hover:bg-quinternary hover:text-input' 
          onClick={() => navigate('/auth')}>
            Login
        </button>
    </div>
  )
}

