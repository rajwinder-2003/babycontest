import LikePopup from "@/components/LikePopup";
import PostPopup from "@/components/PostPopup";
import { useRouter } from "next/router"
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineContentCopy, MdDoubleArrow } from 'react-icons/md';
import { useState } from "react";
import { toast } from 'react-toastify';
import Head from "next/head";
import Image from "next/image";

export default function Slug({ data, alldata }) {
	const [showLikePopup, setShowLikePopup] = useState(false);
	const [showPostPopup, setShowPostPopup] = useState(false);
	const [post, setPost] = useState(data.Onepost)
	const [postData, setPostData] = useState(post);

	let dataArray = [alldata];
	let highestLikeObject = dataArray[0];

	for (const obj of dataArray) {
		if (obj.like > highestLikeObject.like) {
			highestLikeObject = obj;
		}
	}


	let targetLike = 0;

	targetLike = parseFloat(highestLikeObject[0].like) - parseFloat(post.like)

	const router = useRouter();
	const { slug } = router.query;

	const CopyLink = (id) => {
		navigator.clipboard.writeText(`Hello there👏, Please Like for my Little Star till 31-08-2023 in the *Little Star Contest(On Rakhshabadhan). It takes only 5 seconds. Click on the link below to Like👇
https://babycontest.org/participate${slug}`)
		toast.success('Copy Link succesfully', {
			position: toast.POSITION.TOP_RIGHT
		});
	}

	return (
		<>
			<Head>
				<title>Baby Contest | {post.name}</title>
				<meta
					name="description"
					content={`Please like for ${post.name} -Little Star Contest BRP SOLUTIONS Organised Little Star Contest for your Star Kids.`}
				/>
				<meta
					name="keywords"
					content="baby contest, mycutebaby contest, mycutebaby contest 2023, photo baby contest, monthly baby contest, infant photo contest, newborn photo contest, newborn photography contest, newborn competiton, baby contest competition, babyvote competition, infant competiton, cute baby contest, baby contest india, kids photo contest"
				/>
				<meta name="author" content="Baby Contest" />
				<link rel="icon" href={post.url} />
			</Head>
			<main className="mt-[4rem]">
				<div className="">
					<div className="post w-full py-10 mt-10 my-10">
						<div className="px-2 lg:px-20">
							<div className="bg-red-500 py-2 mb-4 rounded-md">
								<h1 className="text-white text-center text-3xl font-bold">{post.name} Like Section</h1>
							</div>
							<div className=" space-y-4 lg:flex lg:justify-between lg:space-y-0">
								<div className="">
									<div className="flex justify-center items-center lg:justify-start lg:items-start">
										<Image className="flex rounded-md h-[25rem]" width={200} height={200} src={post.url} alt="participate pic" />
									</div>
									<div className="space-y-2 mt-3">
										<div className=" flex justify-center items-center text-red-500">
											<button onClick={() => { setShowLikePopup(!showLikePopup) }}><AiOutlineHeart size={35} /></button>
										</div>
										<div className="flex justify-center items-center">
											<button onClick={() => { setShowLikePopup(!showLikePopup) }} className="text-xl text-center font-bold px-7 py-1 rounded-md border-2 border-red-500 ">Like</button>
										</div>
									</div>
								</div>
								<div className="px-2 lg:px-8">
									<div className="flex space-x-4">
										<h1 className="text-2xl font-bold">Baby Name</h1>
										<h2 className="text-xl font-extrabold text-red-500 my-auto">{post.name}</h2>
									</div>
									<div className="flex space-x-4">
										<h1 className="text-2xl font-bold">Like</h1>
										<h2 className="text-xl font-extrabold text-red-500 my-auto">{post.like}</h2>
									</div>
									<div className="flex space-x-4">
										<h1 className="text-2xl font-bold">You are <strong className="text-red-500"> {targetLike} </strong> Like's Away to become The Winner🏆🏆🏆🏆 HURRY UP!</h1>
									</div>
									<div className="lg:flex lg:space-x-4">
										<h1 className="text-2xl font-bold">Share this Link for More Likes</h1>
										<div onClick={() => CopyLink()} className="flex justify-center focus:bg-gray-200 mt-4 lg:mt-0 items-center text-red-500 hover:cursor-pointer border-2 rounded-md px-2 py-1 border-black">
											<MdOutlineContentCopy size={30} className="my-auto" />
											<h1 className="my-auto text-lg">Copy Link</h1>
										</div>
									</div>
								</div>
								<div>
									<div className="bg-red-500 py-2 mb-4 rounded-md px-2">
										<h1 className="text-white text-xl font-bold text-center">Message for Parents & Relatives</h1>
									</div>
									<div className="">
										<div className="flex">
											<h1 className="text-lg">Babycontest.org is purely like based online free website for your <strong>Little Star Kids</strong></h1>
										</div>
										<div className="flex">
											<MdDoubleArrow size={30} className="text-red-500" />
											<h1 className="text-lg">Upload your Baby's Photo</h1>
										</div>
										<div className="flex">
											<MdDoubleArrow size={30} className="text-red-500" />
											<h1 className="text-lg">Copy Link of your baby's Post</h1>
										</div>
										<div className="flex">
											<MdDoubleArrow size={30} className="text-red-500" />
											<h1 className="text-lg">Share the copied link to get more Likes</h1>
										</div>
										<div className="flex">
											<MdDoubleArrow size={30} className="text-red-500" />
											<h1 className="text-lg">🎁Win the exciting Gift and Certificate</h1>
										</div>
									</div>
								</div>
							</div>
							<div className="my-8">
								<div className="flex justify-center items-center">
									<div className="px-2 lg:px-10 py-4 shadow-lg rounded-md">
										<h1 className="text-center text-2xl font-extrabold">Registrations Open For This Contest</h1>
										<h2 className="text-center text-xl font-bold">Competitions are held two times in a month and Top 3 cute babies with the most Likes wins.</h2>
										<p className="text-center text-lg font-semibold">✅Free Entry 👫Age 0-10 yrs 🎁Win Gifts & Certificates 💸Prizes Worth ₹1,000 🏆3 Winners 👶Exciting Gifts For Baby's 🌎Make Your Kid Famous ✨✨</p>
										<div className="flex justify-center items-center my-5">
											<button onClick={() => setShowPostPopup(!showPostPopup)} className="bg-red-500 text-white text-2xl font-bold px-4 py-1 rounded-md">
												Participate Now
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full py-5 px-2'>
								<h1 className='text-lg font-extrabold lg:text-4xl lg:font-extrabold text-red-500 tracking-widest text-center'>Winner Prize Details</h1>
								<div className=' gap-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-0 mt-8'>
									<div className='px-4 py-2 border-2 rounded-md border-red-500'>
										<h1 className='text-center text-2xl font-bold text-red-500'>Rank 1</h1>
										<p className='text-lg'>🎁🎁 Gift Hamper for Kid + Winning Certificate with Photo</p>
									</div>
									<div className='px-4 py-2 border-2 rounded-md border-red-500'>
										<h1 className='text-center text-2xl font-bold text-red-500'>Rank 2</h1>
										<p className='text-lg'>🎁🎁 Gift Hamper for Kid + Winning Certificate with Photo</p>
									</div>
									<div className='px-4 py-2 border-2 rounded-md border-red-500'>
										<h1 className='text-center text-2xl font-bold text-red-500'>Rank 3</h1>
										<p className='text-lg'>🎁🎁 Winning Certificate with Photo</p>
									</div>
								</div>
							</div>
							<div className='bg-white w-full py-5 px-2'>
								<div className='grid grid-cols-3 lg:grid-cols-7 gap-x-2 gap-y-2 '>
									<img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad1.jpg" alt='ad1' />
									<img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad2.jpg" alt='ad2' />
									<img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad8.jpg" alt='ad3' />
									<img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad9.jpg" alt='ad4' />
									<img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad10.jpg" alt='ad5' />
									<img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad11.jpg" alt='ad6' />
									<img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad12.jpg" alt='ad7' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<LikePopup setShowLikePopup={setShowLikePopup} isVisible={showLikePopup} post={postData} />
				<PostPopup setShowPostPopup={setShowPostPopup} isVisible={showPostPopup} />
			</main>
		</>
	)
}
export async function getServerSideProps(context) {
	const { slug } = context.query;
	const response = await fetch(`https://babycontest.org/api/post/findonepost?slug=${slug}`);
	const data = await response.json();

	const Snapshot = await fetch('https://babycontest.org/api/post/getpost');
	const alldata = await Snapshot.json();

	return {
		props: { data, alldata },
	}
}