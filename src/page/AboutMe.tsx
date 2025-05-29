import { useEffect, useState } from 'react'
import stikmen3 from '../assets/stikmen3.png'
import ph1 from '../assets/ph1.jpg'
import ph2 from '../assets/ph2.jpg'
import ph3 from '../assets/ph3.jpg'

export function AboutMe () {
	
  const [count, setCount] = useState(0);

	// const onClick

	return (
		<div className="fixed inset-0 min-w-[1000px] h-screen bg-red-300 justify-center items-center">
			<div className="flex w-full h-full bg-blue-300">
				<div className="w-1/2 h-full bg-gray-800"></div>
				<div className="w-1/2 h-full bg-gray-100"></div>
				<div className="fixed w-full h-full p-32">
					<div className="flex flex-col w-full h-full items-center justify-center px-8">
						<div className="flex w-1/6 h-1/12 bg-gray-800 border border-[4px] border-gray-100 rounded-full justify-center py-1 mb-4">
							<p className="mb-8 text-xl font-bold text-gray-100">About Me</p>
						</div>
						<div className="flex flex-row w-full h-4/5 bg-gray-100 border border-[4px] border-gray-800 rounded-xl justify-between">
							<div className='flex w-1/6 h-full justify-center'>
								<img src={stikmen3}></img>
							</div>
							<div className='flex flex-col min-w-1/2 h-full justify-center items-center p-8 gap-2'>
								<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800'>
									<p>Full Name</p>
									<p>Jerremy Christian Kurnia</p>
								</div>
								<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800'>
									<p>Study</p>
									<p> 2nd year Mechatronics Engineering</p>
								</div>
								<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800'>
									<p>Hobbies</p>
									<p>Photography, Games, Movies</p>
								</div>
								<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800'>
									<p>Fun Facts</p>
									<p>I hate eating</p>
								</div>
								<div className='flex flex-row w-full h-1/6 rounded rounded-full justify-between items-center px-8 py-1 bg-gray-800'>
									<p>Two sides of me</p>
									<p>Simplistic yet traditional</p>
								</div>
							</div>
							<div className='flex flex-col w-[32%] h-full bg-gray-800 justify-center items-center p-1 gap-2'>
								<img className='w-[94%]' src={ph1}></img>
								<img className='w-[94%]' src={ph2}></img>
								<img className='w-[94%]' src={ph3}></img>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default AboutMe;