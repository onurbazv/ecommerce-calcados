import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ICON_CHEVRON_LEFT, ICON_CHEVRON_RIGHT } from '../constants/icons'
// Items recebidos estão no seguinte formato:

// {
// 	label: "Sample Item",
// 	to_path: "/",
// 	img: "https://www.evergreenlandscape.net/ideas/wp-content/uploads/2014/04/patios_and_walkways_30_1000x563.jpg"
// }


const Carousel = ({items}) => {
	const [selectedItem, setSelectedItem] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSelectedItem(prev => prev === items.length - 1 ? 0 : prev + 1)
		}, 5000)
		return () => clearTimeout(timeout)
	}, [selectedItem, items])

	return (
		items.length > 0 && (
			<div className="relative w-full mb-8 rounded-lg overflow-hidden">
				<Link to={items[selectedItem].to_path}>
					<div					
						className={`w-full h-96`}
						style={{
							backgroundImage: `url(${items[selectedItem].img})`,
							backgroundPosition: "center",
							backgroundSize: "cover"
						}}
						alt={`Carousel Item ${selectedItem}`}>
					</div>
				</Link>
				<div
					className={`absolute top-1/2 left-2 rounded-lg -translate-y-1/2 bg-white/25 hover:bg-white/50 z-10`}
					onClick={() => {
						setSelectedItem(prev => prev === 0 ? items.length - 1 : prev - 1)
					}}>
					{ICON_CHEVRON_LEFT}
				</div>
				<div 
					className={`absolute top-1/2 right-2 rounded-lg -translate-y-1/2 bg-white/25 hover:bg-white/50 z-10`}
					onClick={() => {
						setSelectedItem(prev => prev === items.length - 1 ? 0 : prev + 1)
					}}>
					{ICON_CHEVRON_RIGHT}
				</div>
				<div 
					className="absolute bottom-2 left-1/2 -translate-x-1/2 text-3xl flex gap-2 w-fit p-2 rounded-lg bg-white/25 hover:bg-white/50 z-10 text-gray-800">
					{items.map((item, index) => (
						<div 
							key={index} 
							className={`cursor-pointer rounded-full p-1 border-black border-2 ${index === selectedItem ? "bg-black" : ""}`}
							onClick={() => setSelectedItem(index)}>
						</div>
					))}
				</div>
			</div>	
		)
	)
}

export default Carousel