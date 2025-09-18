import { useLocation } from 'react-router-dom';
import AuthButton from "./AuthButton"

export default function Header() {

	const location = useLocation();
	const isAuthPage = location.pathname === '/auth';

	const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
	const isLoggedIn = !!usuario;

	return (
		<div>
			<div className='py-2 px-20 flex flex-row justify-between items-center'>
				<a href="/">
					<div className='flex flex-row items-center gap-4'>
						<img src="../../public/logo.png" alt="Microblog" className='h-4 w-5'/>
						<h1 className="text-xl font-bold">Microblog</h1>
					</div>  
				</a>  
				<div className='flex flex-row gap-6 justify-center items-center text-end h-11'>
						{!isAuthPage && <AuthButton />}
						{isLoggedIn && (
							<img
								src={usuario.foto_perfil}
								alt="Foto do usuário"
								className="w-9 h-9 rounded-full object-cover"
            />
          )}
				</div>
			</div>
				
			<hr className="bg-quinternary"/>
		</div>
	)
}
