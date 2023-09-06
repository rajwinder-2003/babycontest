import { CiFacebook } from 'react-icons/ci';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer () {
	const router = useRouter();
	return (
		<main className="px-5 pb-4 lg:pb-0 lg:px-20 bg-white justify-center lg:justify-between w-full lg:flex">
			<div className="py-5 px-2 flex justify-center">
				<div className='flex my-auto'><h2 className='flex my-auto'>Powered By</h2> <img className='w-[8rem]' src="/logo.png" alt="footer logo" /></div>
			</div>
			<div className="py-5 px-2 flex justify-center">
				<ul className="grid  grid-cols-3 gap-x-2 lg:grid-cols-4  gap-y-2">
					<Link href={'/'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/' ? 'text-red-500' : ''}`}>Home</li>
					</Link>
					<Link href={'/about'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/about' ? 'text-red-500' : ''}`}>About</li>
					</Link>
					<Link href={'/contact'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/contact' ? 'text-red-500' : ''}`}>Contact Us</li>
					</Link>
					<Link href={'/privacy-policy'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/privacy-policy' ? 'text-red-500' : ''}`}>Privacy Policy</li>
					</Link>
					<Link href={'/terms-and-conditions'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/terms-and-conditions' ? 'text-red-500' : ''}`}>Terms & Conditions</li>
					</Link>
					<Link href={'/contest-rules'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/contest-rules' ? 'text-red-500' : ''}`}>Contest Rules</li>
					</Link>
					<Link href={'/blog'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/blog' ? 'text-red-500' : ''}`}>Blog</li>
					</Link>
					<Link href={'/disclaimer'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/disclaimer' ? 'text-red-500' : ''}`}>Disclaimer</li>
					</Link>
					<Link href={'/winner-gallary'}>
						<li className={`hover:cursor-pointer hover:text-red-500 text-sm font-medium uppercase ${router.pathname === '/winner-gallary' ? 'text-red-500' : ''}`}>Winner Gallary</li>
					</Link>
				</ul>
			</div>
			<div className='flex space-x-10 justify-center mb-2'>
				<CiFacebook size={40} className='my-auto flex hover:cursor-pointer hover:border-2 border-blue-400 rounded-md px-2 py-1' />
				<BsInstagram size={40} className='my-auto flex hover:cursor-pointer hover:border-2 border-blue-400 rounded-md px-2 py-1' />
				<BsYoutube size={40} className='my-auto flex hover:cursor-pointer hover:border-2 border-blue-400 rounded-md px-2 py-1 ' />
			</div>
		</main>
	)
}