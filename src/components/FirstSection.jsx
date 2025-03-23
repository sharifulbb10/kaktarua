import React, {useEffect} from 'react'

function FirstSection() {

	useEffect(()=>{
		setTimeout(()=>{
			document.querySelector('.dynamic-div').style.display="block";
		}, 500)
	}, [])

	useEffect(()=> {

		const handleScroll = ()=> {
			let scrollVal = window.scrollY;
			if (scrollVal>20 && scrollVal<200) {
				document.querySelector('.dynamic-div').style.transform = `translateY(${1.7*(window.scrollY)}px)`;
				document.querySelector('.dynamic-div').style.opacity = `${1-(window.scrollY)/180}`;

			}
		}

		window.addEventListener('scroll', handleScroll);

		return ()=> {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [])

	return (
		<div className="">
			<h1 className="text-xl font-bold text-cyan-700 pl-5 p-4 bg-zinc-200">কাকতাড়ুয়া</h1>
			<div className="flex flex-col items-center relative">
				<img className="m-2 w-[95%] md:w-[50%]" src="/kaktarua/public/assets/bg.png" alt=""/>
				<div style={{'display': 'none'}} className="dynamic-div w-[60%] h-25 bg-black/50 absolute top-[20%] left-0 rounded-r-md">
					<p className="dynamic-div-text text-sm md:text-lg p-2 pl-5 text-amber-200 font-bold">একটি সামাজিক সেবামূলক সংগঠন - শাহ রাহাত আলী উচ্চ বিদ্যালয় ব্যাচ ২০১৬</p>
				</div>
			</div>
		</div>
	)
}

export default FirstSection