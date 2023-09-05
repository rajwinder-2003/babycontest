import Head from 'next/head'
import { BiLogoGmail, BiLogoWhatsappSquare } from 'react-icons/bi'
import { FaPhoneSquareAlt } from 'react-icons/fa'


export default function () {
	return (
		<>
			<Head>
				<title>Baby Contest | Contact</title>
				<meta
					name="description"
					content="Baby Contest & Kids Photo Contest 2023, Quizzes & more"
				/>
				<meta
					name="keywords"
					content="baby contest, mycutebaby contest, mycutebaby contest 2023, photo baby contest, monthly baby contest, infant photo contest, newborn photo contest, newborn photography contest, newborn competiton, baby contest competition, babyvote competition, infant competiton, cute baby contest, baby contest india, kids photo contest"
				/>
				<meta name="author" content="Baby Contest" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="mt-20 min-h-screen bg-gray-100 pt-20">
				<div className="flex justify-center items-center">
					<div className="bg-white rounded-lg shadow-lg shadow-red-500 p-10 max-w-2xl w-full px-2 lg:px-10">
						<h1 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-center text-red-500">Contact Us</h1>
						<p className="mb-6 font-semiboldb text-lg lg:text-2xl lg:flex">
							<BiLogoGmail size={40} className='my-auto lg:mr-4 text-red-500' />
							brpsolutions.klw@gmail.com
						</p>
						<p className=" mb-6 font-semibold text-lg lg:text-2xl lg:flex">
							<FaPhoneSquareAlt size={40} className='my-auto lg:mr-4 text-red-500' />
							9468092700
						</p>
						<p className="mb-6 font-semibold text-lg lg:text-2xl lg:flex">
							<BiLogoWhatsappSquare size={40} className='my-auto lg:mr-4 text-red-500' />
							9468092700
						</p>
					</div>
				</div>
			</main>
		</>
	)
}