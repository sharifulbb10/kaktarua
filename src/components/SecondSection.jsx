import React, {useEffect} from 'react'

function SecondSection() {

	useEffect(()=>{
		let foundingMembers = document.querySelector(".founding-members");
		foundingMembers.innerHTML += foundingMembers.innerHTML;
	}, [])

	return (
		<div className="mt-8 flex flex-col items-center relative overflow-hidden">
			<h1 className="text-lg py-3 font-bold">Our Founding Members</h1>
			<div className="founding-members flex items-center">
				<img className="each-image first-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/mehedi-kaktarua.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/rana.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/minuddin.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/mehedi-math.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/shanthu.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/boro-miah.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/solaiman.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/kamrul.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/sayem.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/shahadat.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/shanto-dev.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/sobuj.jpeg" alt=""/>
				<img className="each-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/jamirul.jpeg" alt=""/>
				<img className="each-image last-image w-100 h-100 p-1 border-3 border-zinc-300" src="/kaktarua/src/assets/founding-members/shariful.jpeg" alt=""/>
			</div>

			<div>
				<div className="flex items-center flex-col mt-8 mx-3">
			<h1 className="text-2xl">Our Stories</h1>
			<h3 className="text-sm text-gray-500 text-center">Here's everything we have in our past</h3>
			
			<div className="flex my-6">
				<div className="h-79 flex flex-col justify-evenly">
					<p className="text-right mr-4 text-[12px] text-gray-500">May 2023</p>
					<p className="text-right mr-4 text-[12px] text-gray-500">May 2023</p>
					<p className="text-right mr-4 text-[12px] text-gray-500">June 2023</p>
					<p className="text-right mr-4 text-[12px] text-gray-500">July 2024</p>
					<p className="text-right mr-4 text-[12px] text-gray-500">July 2024</p>
					<p className="text-right mr-4 text-[12px] text-gray-500">Mar 2024</p>
					<p className="text-right mr-4 text-[12px] text-gray-500">Upcoming</p>
				</div>

				<div className="verLine border-1 h-auto w-0 relative left-[7px]"></div>

				<div className="h-80 flex flex-col justify-evenly">
					<div className="1 w-3 h-3 bg-black rounded-full"></div>
					<div className="2 w-3 h-3 bg-black rounded-full"></div>
					<div className="3 w-3 h-3 bg-black rounded-full"></div>
					<div className="4 w-3 h-3 bg-black rounded-full"></div>
					<div className="5 w-3 h-3 bg-black rounded-full"></div>
					<div className="6 w-3 h-3 bg-black rounded-full"></div>
					<div className="7 w-3 h-3 bg-black rounded-full"></div>
				</div>

				<div className="h-79 flex flex-col justify-evenly">
					<p className="ml-5 text-[12px]">Very first proposal from Mehedi Hasan</p>
					<p className="ml-5 text-[12px]">Initial notice to the plan</p>
					<p className="ml-5 text-[12px]">First official meeting beneath the Woodapple tree of a tea-stall</p>
					<p className="ml-5 text-[12px]">First meeting as an organization</p>
					<p className="ml-5 text-[12px]">First recruitment of treasurer</p>
					<p className="ml-5 text-[12px]">Second recruitment of treasurer</p>
					<p className="ml-5 text-[12px]">Second phase planning</p>
				</div>
			</div>
		</div>
		</div>
		</div>
	)
}

export default SecondSection