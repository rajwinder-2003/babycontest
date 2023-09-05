import { LuSend } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Loading from './loading';
import Link from 'next/link';

export default function PostPopup({ isVisible, setShowPostPopup }) {
	if (!isVisible) return null;
	const router = useRouter();

	const [name, setName] = useState('');
	const [mobile, setMobile] = useState('');
	const [city, setCity] = useState('');
	const [url, setUrl] = useState("");

	const [loading, setLoading] = useState(false);

	const [data, setData] = useState(null);

	function handleOnchange(e) {
		var reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			setUrl(reader.result)
		};
		reader.onerror = (error) => {
			console.log("Error:", error);
		}
	}

	const SubmitDetails = async (e) => {
		e.preventDefault();
		try {
			if (name && mobile && city && url && mobile.length === 10) {
				setLoading(true)
				const data = await fetch('/api/post/addpost', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: name,
						mobile: mobile,
						city: city,
						url: url,
						like: 0,
						date: new Date()
					})
				}).then((res) => res.json())
				setData(data);
				if (data.postId) {
					setLoading(false);
					toast.success('Add Post succesfully', {
						position: toast.POSITION.TOP_RIGHT
					});
					setShowPostPopup(false);
					router.push(`/participate/${data.postId}`)
					setTimeout(() => {
						setName(''),
							setMobile(''),
							setCity(''),
							setUrl('');
					}, 3000);
				}
			} else {
				toast.error('Please Enter a valid mobile number', {
					position: toast.POSITION.TOP_RIGHT
				});
			}

		} catch (error) {
			toast.error('Internal Server error', {
				position: toast.POSITION.TOP_RIGHT
			});
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center px-2">
			<div className="w-[500px] flex flex-col overflow-auto">
				<button type="button" onClick={() => {
					setShowPostPopup(false);
				}} className="text-white text-xl place-self-end bg-black rounded-full px-2">
					X
				</button>
				<div className="bg-white px-2 py-4 rounded">
					<div className="space-y-4">
						<h1 className='text-center text-lg'>Upload Baby Pic For Participate this Contest</h1>
						<p className='text-center'>✅Free Entry 👫Age 0-10 yrs 🎁Win Gifts & Certificates 💸Prizes Worth ₹1,000 🏆3 Winners 👶Exciting Gift For Baby's Also 🌎Make Your Kid Famous</p>
						<div className="flex w-full">
							<input value={name} onChange={(e) => setName(e.target.value)} className="flex w-full text-black px-4 py-2 outline-none border-2 border-red-500 rounded-md" type="text" placeholder="Enter Your Baby Name" />
						</div>
						<div className="flex w-full">
							<input value={mobile} onChange={(e) => setMobile(e.target.value)} className="flex w-full text-black px-4 py-2 outline-none border-2 border-red-500 rounded-md" type="number" placeholder="Enter Your Mobile No." />
						</div>
						<div className="flex w-full">
							<input value={city} onChange={(e) => setCity(e.target.value)} className="flex w-full text-black px-4 py-2 outline-none border-2 border-red-500 rounded-md" type="text" placeholder="Enter Your City" />
						</div>
						<div className="flex w-full">
							<input onChange={handleOnchange} className="block w-full text-sm rounded-lg cursor-pointer focus:outline-red-500 border px-4 py-2 border-red-500" type="file" />
						</div>
						<div className='flex w-full px-2'>
							<h1 className='text-xs'>By clicking Submit Entry, you agree to <Link className='text-red-500' href='/contest-rules'>Contest Rules</Link>, <Link className='text-red-500' href='/privacy-policy'>Privacy Policy</Link> and <Link className='text-red-500' href='/terms-&-conditions'>T&C</Link>.</h1>
						</div>
						<div className="flex w-full justify-center items-center">
							<button disabled onClick={(e) => SubmitDetails(e)} className="bg-red-500  text-white rounded-md px-2 py-1 hover:scale-95 focus:scale-95 flex my-auto">
								Submit
								<LuSend className='text-white my-auto ml-2' />
							</button>
						</div>
					</div>
				</div>
			</div>
			<Loading isVisible={loading} />
		</div>
	)
}