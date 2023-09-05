import Head from "next/head";
import Image from "next/image";

export default function Blog() {
	return (
		<>
			<Head>
				<title>Baby Contest | Blog</title>
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
			<main className="min-h-screen bg-gray-100 mt-20 pb-20">
				<div className="flex bg-red-500 text-white justify-center items-center py-20 px-2">
					<div className="">
						<h1 className="text-center text-3xl font-medium">Baby Contest Blogs</h1>
						<p className="text-center text-xl">Discover the cutest contenders in our adorable baby contest – where every smile steals a piece of your heart!</p>
					</div>
				</div>
				<div className="justify-center px-2 lg:px-20 my-20">
					<div>
						<h1 className="bg-red-400 text-white w-1/2 px-5 font-medium py-2 text-2xl">Blogs</h1>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-10">
						<div className="bg-white rounded-md shadow-lg shadow-red-500">
							<Image className="rounded-md" width={500} height={500} src='/main.jpg' />
							<div className="px-2">
								<h1 className="text-xl font-semibold text-red-500">Blog Title</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe officiis esse ab cupiditate nostrum ad inventore tempore beatae dolor.</p>
								<div className="flex justify-end py-2">
									<button className="text-red-500 text-lg hover:scale-95 focus:text-gray-300">Read More</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}