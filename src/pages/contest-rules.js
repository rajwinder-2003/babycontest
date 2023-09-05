import Head from 'next/head';
import Link from 'next/link';
import { MdDoubleArrow } from 'react-icons/md';

export default function ContestRules() {
	return (
		<>
			<Head>
				<title>Baby Contest | Contest Rules</title>
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
			<main className="mt-20 min-h-screen bg-gray-100 pt-20 pb-20">
				<div className="flex justify-center items-center px-2 lg:px-20">
					<div className="bg-white rounded-lg shadow-lg shadow-red-500 p-10 min-w-2xl w-full px-8">
						<h1 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-center text-red-500">Baby Contest Rules</h1>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Eligibility:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Participants must be between the ages of 0 to 10 years at the time of entry.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								The contest is open to children from any state or region.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Contest Frequency:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								The baby contest will be held twice a month, with specific dates and times announced on our website and social media platforms.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Free Participation:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Entry into the contest is absolutely free. There are no entry fees.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Categories:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								The contest will have one category for all participants within the age range of 0-10 years.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Submission:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Parents or legal guardians may submit a photograph of their child along with the child's name and age through the contest submission form on our website.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Voting and Prizes:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								The winners will be determined by the number of likes received on their submitted photographs on our website.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Prizes will be awarded to the top three most-liked contestants.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Contestants with genuine votes win the contest.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Prizes may include trophies, gift certificates, or other items, as determined by the contest organizers.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								If the winning contestant lives outside India, then the winner can send us Indian address of any friend or relative for the shipment of the gift.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Voting Period:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Voting will be open for a specified duration, typically from the date of submission until a predetermined deadline.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								The exact voting period will be posted on our website for each contest.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Announcement of Winners:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								The winners will be announced on our website and social media platforms after the voting period ends.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Photography and Media:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								By submitting a photograph, participants agree that their child's image may be used for promotional purposes related to the contest.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Rules and Regulations:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Participants and their parents or legal guardians must adhere to all contest rules and regulations, as posted on our website.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Prohibited behavior includes any form of cheating, manipulation, or harassment.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								We can ask for age proof from the contestants. If the age is above 10years then we will cancel your participation and winning prize (If any) and your entry will be marked as disqualified.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Disqualification:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Participants found violating the rules or engaging in any disruptive behavior may be disqualified from the contest.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								If we found any fake/proxy/spammed likes or suspicious activity, then the entry will be deactivated or disqualified from the contest without any prior notice or warning.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								All the entries of the contest are approved by our system, but in case if we found any fake entry, information or photo of any star/celebrity in our contest then your entry to the contest will be disqualified immediately. In case of multiple entries, duplicate entries will be deleted from the contest automatically.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Liability:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								The contest organizers and sponsors are not liable for any injuries or accidents that may occur during the contest.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Code of Conduct:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								Participants and their families are expected to maintain good sportsmanship and respectful behavior throughout the contest.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Amendments:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								The contest organizers reserve the right to amend the rules and guidelines if necessary. Any changes will be communicated, if required, through our website and social media platforms.
							</li>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								In case of any disputes or failure to adhere to these rules in any way, babycontest.org reserves all the rights to disqualify any entry from the contest. All decisions made the organizers are final in all aspects related to the contest.
							</li>
						</ul>
						<h2 className='bg-red-500 text-2xl px-2 text-white font-bold my-4 py-1'>Contact Information:</h2>
						<ul>
							<li className='flex'>
								<MdDoubleArrow size={30} className='text-red-500 my-auto mr-2' />
								For inquiries or assistance related to the contest, please contact <Link className='text-red-500' href={'/contact'}>Contact us</Link>.
							</li>
						</ul>
						<p className="text-gray-700 mb-6">These rules should be made easily accessible on your website and in any promotional materials to ensure all participants and their families are well-informed about the contest guidelines.</p>
					</div>
				</div>
			</main>
		</>
	)
}