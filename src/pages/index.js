import PostPopup from '@/components/PostPopup';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

const images = [
  '/main.jpg',
  '/main2.png'
]

const WinnerImages = [
  '/winner.jpg',
  '/winner2.jpg'
]

export default function Home({ alldata }) {

  const router = useRouter();

  const [showPostPopup, setShowPostPopup] = useState(false);
  const [postData, setPostData] = useState(null);

  // Home page image slider code
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  const nextSlide = () => {
    const newIndex = (currentImage + 1) % images.length;
    setCurrentImage(newIndex);
  };

  // Home page image slider code
  const [currentWinnerImage, setCurrentWinnerImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentWinnerImage]);

  const nextImage = () => {
    const newIndex = (currentWinnerImage + 1) % WinnerImages.length;
    setCurrentWinnerImage(newIndex);
  };

  //Top three winner  code
  alldata.sort((a, b) => b.like - a.like);
  const topThreeLikes = alldata.slice(0, 3);


  return (
    <>
      <Head>
        <title>Baby Contest</title>
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
      <main className="mt-[4rem]">
        <div className="Header w-full lg:justify-between py-20 px-2 lg:px-5">
          <div className="lg:flex px-2 mt-[3.5rem] lg:px-20">
            <div className="text-center lg:text-left flex-col justify-center text-white font-semibold lg:mx-10 lg:w-[30rem]">
              <h1 className="text-3xl font-extrabold tracking-widest">Registrations Open For This Contest</h1>
              <h2 className="tracking-widest text-2xl mt-3">Competitions are held two times in a month and Top 3 cute babies with the most Likes wins.</h2>
              <p className="lg:pr-14 text-base">✅Free Entry 👫Age 0-10 yrs 🎁Win Gifts & Certificates 💸Prizes Worth ₹1,000 🏆3 Winners 👶Exciting Gifts For Baby's 🌎Make Your Kid Famous ✨✨</p>
              <div className='mt-4 justify-center flex items-center lg:justify-start'>
                <button onClick={() => setShowPostPopup(!showPostPopup)} className='px-4 bg-white w-fit py-2 text-black rounded-lg hover:scale-90 hover:bg-red-500 hover:text-white focus:bg-red-500'>Participate Now</button>
              </div>
            </div>
            <div className="lg:justify-end mt-14 lg:mt-0">
              <div className='flex justify-center items-center lg:justify-end lg:items-end'>
                <Image width={500} height={500} className="w-[30rem] h-[18rem] flex shadow-lg rounded-md" src={images[currentImage]} alt="main image" />
              </div>
              <h2 className="text-white font-medium tracking-widest font-sans lg:w-[25rem] px-2"> Organised BY- BRP SOLUTIONS </h2>
              <p className='text-white font-medium tracking-widest font-sans lg:w-[25rem] px-2'>Smart Services ! Real Results</p>
            </div>
          </div>
        </div>

        {/* winner section show hide */}
        <div className='hidden shadow-lg py-20 px-2 lg:px-5'>
          <div className='px-2 lg:px-20'>
            <h1 className='text-red-500 text-2xl text-center font-bold'>Winner of this contest</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-4 gap-x-6 mt-10'>
              {topThreeLikes && topThreeLikes.map((winner, index) => {
                return (
                  <div key={index} className='rounded-md shadow-lg shadow-red-500'>
                    <Image className='rounded-md h-[25rem]' src={winner.url} width={500} height={500} alt='winner 1' />
                    <div>
                      <h1 className='text-red-500 text-2xl text-center'>Rank {index + 1}</h1>
                      <h1 className='text-red-500 text-2xl text-center'>Like {winner.like}</h1>
                      <p className='text-xl text-center'>{winner.name}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="pyro post h-fit bg-[#dbfaff] w-full shadow-lg py-20 px-2 lg:px-5">
          <h1 className='px-2 lg:px-20 text-xl mb-4 text-red-500 font-extrabold'>Winner of Last Contest</h1>
          <div className="before"></div>
          <div className="after"></div>
          <div className="lg:flex px-2 lg:px-20">
            <div className="justify-end mt-14 lg:mt-0">
              <div className='flex justify-center items-center lg:justify-end lg:items-end'>
                <Image width={500} height={500} className="w-[30rem] h-[18rem] flex shadow-lg rounded-md" src={WinnerImages[currentWinnerImage]} alt="winner image" />
              </div>
              <h2 className="font-medium tracking-widest font-sans lg:w-[25rem] px-2"></h2>
            </div>
            <div className="text-center mt-4 lg:mt-0 lg:text-left flex-col justify-center font-semibold lg:mx-10 lg:w-[30rem]">
              <h1>This contest is completely free forever for you & there is no participation fee. So, don't pay anyone for any kind of fees.</h1>
              <h1>Don't miss this fun & winning opportunity for your kid to shine & recognized as one of the cutest babies around .</h1>
              <h1>Participate now & share the link for more & more Likes for your kid.</h1>
              <ul className='mt-4'>
                <li className='text-xl tracking-widest mb-2 font-extrabold text-red-500'>LET THE CUTENESS BEGIN</li>
                <li className='text-lg mb-1'> </li>
              </ul>
            </div>
          </div>
          <div className='mt-10 px-2 lg:px-20'>
            <h1 className='text-center text-xl font-bold mb-4'>You are just 3 Step Away to Win Existing Gifts & Certificates, How?</h1>
            <div className='space-y-4 lg:space-y-0 lg:space-x-4 lg:flex justify-between mt-10'>
              <div className='bg-white px-4 py-2 rounded-md shadow-lg border-2 hover:cursor-pointer border-red-500'>
                <h1 className='text-center text-xl text-red-500 font-bold'>Step 1</h1>
                <h1 className='text-red-500 font-bold'>UPLOAD PHOTO</h1>
                <p className='break-words'>Upload 0-10 yr aged baby photo and Submit for free.</p>
              </div>
              <div className='bg-white px-4 py-2 rounded-md shadow-lg border-2 hover:cursor-pointer border-red-500'>
                <h1 className='text-center text-xl text-red-500 font-bold'>Step 2</h1>
                <h1 className='text-red-500 font-bold'>GET MORE LIKES</h1>
                <p className='break-words'>Share baby's photo link with friends & Family to get more Likes.</p>
              </div>
              <div className='bg-white px-4 py-2 rounded-md shadow-lg border-2 hover:cursor-pointer border-red-500'>
                <h1 className='text-center text-xl text-red-500 font-bold'>Step 3</h1>
                <h1 className='text-red-500 font-bold'>WIN PRIZES</h1>
                <p className='break-words'>Win existing gifts & Certificates.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full py-10 px-2 lg:px-20'>
          <h1 className='text-lg font-extrabold lg:text-4xl lg:font-extrabold text-red-500 tracking-widest text-center'>Winner Prize Details</h1>
          <div className=' gap-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-0 mt-8 lg:px-5'>
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
        <div className='bg-white w-full py-10 px-2 lg:px-5'>
          <div className='px-2 grid grid-cols-3 lg:grid-cols-7 lg:px-20 gap-x-2 gap-y-2 '>
            <img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad1.jpg" alt='ad1' />
            <img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad2.jpg" alt='ad2' />
            <img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad8.jpg" alt='ad3' />
            <img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad9.jpg" alt='ad4' />
            <img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad10.jpg" alt='ad5' />
            <img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad11.jpg" alt='ad6' />
            <img className='h-[15rem] border-2 border-purple-500 rounded-md shadow-lg' src="/ad12.jpg" alt='ad7' />
          </div>
        </div>
        <PostPopup setShowPostPopup={setShowPostPopup} isVisible={showPostPopup} />
      </main>
    </>
  )
}

export async function getServerSideProps() {

  const Snapshot = await fetch('https://babycontest.org/api/post/getpost');
  const alldata = await Snapshot.json();

  return {
    props: { alldata },
  }
}