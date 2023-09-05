import Image from "next/image";
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function Layout() {

	const router = useRouter();
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<main className="px-5 lg:px-24 bg-white py-2 fixed top-0 w-full">
			<div className="hidden navabar lg:flex justify-between py-2">
				<div className="flex">
					<Link className="flex space-x-2" href='/'>
						<Image src='/mainlogo.png' width={40} height={20} alt="logo" />
						<h1 className="text-2xl font-extrabold uppercase tracking-widest my-auto "><strong className="text-red-500">Baby</strong>contest</h1>
					</Link>
				</div>
				<div className="flex">
					<ul className="flex space-x-10 my-auto">
						<Link href={'/'}>
							<li className={`hover:cursor-pointer hover:text-red-500 text-lg font-medium uppercase ${router.pathname === '/' ? 'text-red-500' : ''}`}>Home</li>
						</Link>
						<Link href={'/about'}>
							<li className={`hover:cursor-pointer hover:text-red-500 text-lg font-medium uppercase ${router.pathname === '/about' ? 'text-red-500' : ''}`}>About</li>
						</Link>
						<Link href={'/contact'}>
							<li className={`hover:cursor-pointer hover:text-red-500 text-lg font-medium uppercase ${router.pathname === '/contact' ? 'text-red-500' : ''}`}>Contact Us</li>
						</Link>
						<Link href={'/privacy-policy'}>
							<li className={`hover:cursor-pointer hover:text-red-500 text-lg font-medium uppercase ${router.pathname === '/privacy-policy' ? 'text-red-500' : ''}`}>Privacy Policy</li>
						</Link>
						<Link href={'/blog'}>
							<li className={`hover:cursor-pointer hover:text-red-500 text-lg font-medium uppercase ${router.pathname === '/blog' ? 'text-red-500' : ''}`}>Blog</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className="lg:hidden navbar flex justify-between py-[0.30rem]">
				<div className="flex">
					<Link className="flex space-x-2" href='/'>
						<Image src='/mainlogo.png' width={40} height={20} alt="logo" />
						<h1 className="text-xl font-extrabold uppercase tracking-widest my-auto "><strong className="text-red-500">Baby</strong>contest</h1>
					</Link>
				</div>
				<div className="flex">
					<button onClick={() => setShowNavbar(!showNavbar)}>
						<AiOutlineMenu className="" size={25} />
					</button>
				</div>
			</div>
			<div className={` bg-white fixed top-0 h-screen w-1/2 left-0 lg:hidden ${showNavbar ? '-translate-x-0 ease-out delay-150 duration-200' : '-translate-x-full'}`}>
				<div className="flex justify-center py-4">
					<Link className="flex space-x-2" href='/'>
						<Image src='/mainlogo.png' width={30} height={20} alt="logo" />
						<h1 className="font-extrabold uppercase text-sm my-auto "><strong className="text-red-500">Baby</strong>contest</h1>
					</Link>
				</div>
				<hr />
				<div>
					<ul className="text-center">
						<Link href={'/'}>
							<li onClick={() => setShowNavbar(!showNavbar)} className={`hover:cursor-pointer hover:bg-gray-50 py-4 ${router.pathname === '/' ? 'bg-gray-50 text-red-500' : 'hover:cursor-pointer py-4'}`}>Home</li>
						</Link>
						<hr />
						<Link href={'/about'}>
							<li onClick={() => setShowNavbar(!showNavbar)} className={`hover:cursor-pointer hover:bg-gray-50 py-4 ${router.pathname === '/about' ? 'bg-gray-50 text-red-500' : 'hover:cursor-pointer py-4'}`}>About</li>
						</Link>
						<hr />
						<Link href={'/contact'}>
							<li onClick={() => setShowNavbar(!showNavbar)} className={`hover:cursor-pointer hover:bg-gray-50 py-4 ${router.pathname === '/contact' ? 'bg-gray-50 text-red-500' : 'hover:cursor-pointer py-4'}`}>Contact Us</li>
						</Link>
						<hr />
						<Link href={'/privacy-policy'}>
							<li onClick={() => setShowNavbar(!showNavbar)} className={`hover:cursor-pointer hover:bg-gray-50 py-4 ${router.pathname === '/privacy-policy' ? 'bg-gray-50 text-red-500' : 'hover:cursor-pointer py-4'}`}>Privacy Policy</li>
						</Link>
						<Link href={'/blog'}>
							<li onClick={() => setShowNavbar(!showNavbar)} className={`hover:cursor-pointer hover:bg-gray-50 py-4 ${router.pathname === '/blog' ? 'bg-gray-50 text-red-500' : 'hover:cursor-pointer py-4'}`}>Blog</li>
						</Link>
						<hr />
					</ul>
				</div>
			</div>
		</main>
	)
}