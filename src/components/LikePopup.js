import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Loading from './loading';

export default function LikePopup({ isVisible, setShowLikePopup, post }) {
	if (!isVisible) return null;
	const router = useRouter();

	const [name, setName] = useState('');
	const [mobile, setMobile] = useState('');

	const [loading, setLoading] = useState(false);

	const Like = async (post) => {

		const data = await fetch('/api/post/updatepost', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: post._id,
				like: post.like
			})
		}).then((res) => res.json())
		
	}

	const AddDetails = async () => {

		if (!name || !mobile) {
			toast.error('Please Fill all fields!', {
				position: toast.POSITION.TOP_RIGHT
			});
		}
		if (!localStorage.getItem("contest3")) {
			setLoading(true)
		}
		try {
			if (name && mobile && mobile.length === 10) {

				const data = await fetch('/api/post/likepost', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: name,
						mobile: mobile,
						date: new Date()
					})
				}).then((res) => res.json())
				

				if (data) {
					setLoading(false);
					await toast.success('Add Like succesfully', {
						position: toast.POSITION.TOP_RIGHT
					});
					await Like(post)
					await localStorage.setItem("contest3", `${mobile}`)
					setTimeout(() => {
						setName(''),
							setMobile('');
							router.reload();
							setShowLikePopup(false);
					}, 1000);
				}
			} else {
				toast.error('Please Enter vailid mobile number', {
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
					setShowLikePopup(false)
				}} className="text-white text-xl place-self-end bg-black rounded-full px-2">
					X
				</button>
				<div className="bg-white px-2 py-4 rounded">
					<div className="space-y-4">
						<h1 className='text-center text-lg'>Like Baby Pic</h1>
						<div className="flex w-full">
							<input value={name} onChange={(e) => setName(e.target.value)} className="flex w-full text-black px-4 py-2 outline-none border-2 border-red-500" type="text" placeholder="Your Name" />
						</div>
						<div className="flex w-full">
							<input value={mobile} onChange={(e) => setMobile(e.target.value)} className="flex w-full text-black px-4 py-2 outline-none border-2 border-red-500" type="number" placeholder="Mobile No." pattern="[1-9]{1}[0-9]{9}" />
						</div>
						<div className="flex w-full justify-center items-center">
							{localStorage.getItem("contest3") ? (
								<button disabled onClick={() => AddDetails()} className={`text-white rounded-md px-2 py-1 flex my-auto bg-red-200 hover:cursor-not-allowed`}>
									Like
									<AiFillHeart className='text-white my-auto ml-2' />
								</button>
							) : (
								<button onClick={() => AddDetails()} className={`text-white bg-red-500 rounded-md px-2 py-1 hover:scale-95 focus:scale-95 flex my-auto focus:bg-red-300`}>
									Like
									<AiFillHeart className='text-white my-auto ml-2' />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			<Loading isVisible={loading} />
		</div>
	)
}