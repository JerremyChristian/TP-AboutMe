import { useEffect, useState } from 'react'
import stikmen3 from '../assets/stikmen3.png'
import ph1 from '../assets/ph1.jpg'
import ph2 from '../assets/ph2.jpg'
import ph3 from '../assets/ph3.jpg'

export function AboutMe () {
	const [showAbout, setShowAbout] = useState(false);
  const [count, setCount] = useState(0);

	const onClick = () => {
		setCount(count + 1);
	}

	useEffect(() => {
		if (count == 5) {
			setShowAbout(true);
		}
	}, [count])

	return (
		<div className="fixed inset-0 min-w-[1000px] h-screen bg-red-300 justify-center items-center">
			{showAbout 
			? <div className="flex w-full h-full bg-blue-300 cursor-pointer">
					<div className="w-1/2 h-full bg-gray-800"></div>
					<div className="w-1/2 h-full bg-gray-100"></div>
					<div className="fixed w-full h-full p-32">
						<div className="flex flex-col w-full h-full items-center justify-center px-8">
							<div className="flex w-1/6 h-1/12 bg-gray-800 border border-[4px] border-gray-100 rounded-full justify-center py-1 mb-4 cursor-not-allowed transition-transform duration-300 ease-in-out hover:scale-105 z-10"
								onClick={() => {
									setShowAbout(false);
									setCount(0);
								}}>
								<p className="mb-8 text-xl font-bold text-gray-100">About Me</p>
							</div>
							<div className="flex flex-row w-full h-4/5 bg-gray-100 border border-[4px] border-gray-800 rounded-xl justify-between">
								<div className='flex w-1/6 h-full justify-center'>
									<img src={stikmen3} className='transition-transform duration-300 ease-in-out hover:scale-105 z-10'></img>
								</div>
								<div className='flex flex-col min-w-1/2 h-full justify-center items-center p-8 gap-2'>
									<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-102 z-10'>
										<p>Full Name</p>
										<p>Jerremy Christian Kurnia</p>
									</div>
									<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-102 z-10'>
										<p>Study</p>
										<p> 2nd year Mechatronics Engineering</p>
									</div>
									<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-102 z-10'>
										<p>Hobbies</p>
										<p>Photography, Games, Movies</p>
									</div>
									<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-102 z-10'>
										<p>Fun Facts</p>
										<p>I hate eating</p>
									</div>
									<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-102 z-10'>
										<p>Two sides of me</p>
										<p>Simplistic yet traditional</p>
									</div>
								</div>
								<div className='flex flex-col w-[32%] h-full bg-gray-800 justify-center items-center p-1 gap-2'>
									{[ph1, ph2, ph3].map((src, index) => (
										<img
											key={index}
											src={src}
											className='w-[94%] transition-transform duration-300 ease-in-out hover:scale-105 z-10'
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			: <div className={`flex p-8 w-full h-full bg-black cursor-pointer ${count == 0 ? "justify-center items-center" : ""}`}>
					<div className={`rounded-full justify-center items-center px-2 text-black cursor-not-allowed
						${count == 0 ? "flex w-[250px] h-[65px] text-lg bg-gray-200 py-1" 
						: count == 1 ? "w-[200px] h-[50px] text-md bg-gray-400 py-3"
						: count == 2 ? "w-[180px] h-[35px] text-sm bg-gray-600 py-2"
						: count == 3 ? "w-[120px] h-[25px] text-[10px] bg-gray-800 py-1"
						: "w-[80px] h-[15px] text-[6px] bg-gray-900 py-1"}`}
						onClick={() => onClick()}
						style={count !== 0
							? {
									position: "absolute",
									left: `${Math.random() * 90}%`,
									top: `${Math.random() * 90}%`,
								}
							: {}
						}>
						<p>Click here to know me!</p>
					</div>
				</div>
			}
		</div>
	)
}

export default AboutMe;