import Head from "next/head";
import Image from "next/image";


export default function WinnerGallary() {

	return (
		<>
			<Head>
				<title>Baby Contest | Winner Gallary</title>
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
			<main>
				<div className="px-2 lg:px-20 mt-20 min-h-screen">
					<div>
						<div className=" bg-red-500 px-2 py-2">
							<h1 className="text-2xl font-bold text-white text-center">Winner Gallary</h1>
						</div>
						<div className="my-10">
							<div>
								<h1 className="text-xl text-white bg-red-500 px-5 py-1 w-fit">Winners</h1>
							</div>
							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8 gap-4">
								<div>
									<Image width={500} height={500} src='/lastwin1.jpg' />
								</div>
								<div>
									<Image width={500} height={500} src='/winner.jpg' />
								</div>
								<div>
									<Image width={500} height={500} src='/winner2.jpg' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}