import React, {useEffect} from 'react'

function ThirdSection() {

	useEffect(()=>{

		const handleScroll2nd = () => {
			let scrollVal = window.scrollY;
			if (scrollVal>250 && scrollVal<450) {
				let anotherImage = document.querySelector(".another-image");
				anotherImage.style.transform = `rotate(${(scrollVal-250)*90/200}deg)`;
				anotherImage.style.width = `${50+(scrollVal-250)*90/200}%`
			}
		}

		window.addEventListener('scroll', handleScroll2nd);

		return ()=> {window.removeEventListener('scroll', handleScroll2nd);}

	}, [])

	return (
		<div className="mt-8 flex justify-center">
			<div>
				<img className="another-image w-[10%]" src="src/assets/another-image.png" alt=""/>
			</div>
		</div>
	)
}

export default ThirdSection