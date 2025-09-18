import { useLocation } from 'react-router-dom';
import AuthButton from "./AuthButton"

export default function Header() {

	const location = useLocation();
	const isAuthPage = location.pathname === '/auth';

	return (
		<div>
			<div className='py-2 px-20 flex flex-row justify-between items-center'>
				<a href="/">
					<div className='flex flex-row items-center gap-4'>
						<img src="../../public/logo.png" alt="Microblog" className='h-4 w-5'/>
						<tittle className="text-xl font-bold">Microblog</tittle>
					</div>  
				</a>  
				<div className='items-end text-end h-11'>
						{!isAuthPage && <AuthButton />}
				</div>
			</div>
				
			<hr className="bg-quinternary"/>
		</div>
	)
}
