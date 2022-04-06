import { useState } from 'react'
import Carousel from '../components/Carousel'
import ProductsList from '../components/Products/ProductsList'

const rawData = require("../constants/data.json")

const adsCarousel = [
	{
		to_path: "/",
		img: "./img/ads/1.png"
	},
	{
		to_path: "/",
		img: "./img/ads/1.png"
	}, {
		to_path: "/",
		img: "./img/ads/1.png"
	}
]

const Home = () => {
    // these items will be fetched from firebase inside an componentDidMount style effect later, for now using local samples above
    const [carouselItems, setCarouselItems] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState(rawData.slice(0, 8))

    return (
        <div className="max-w-screen-xl mx-auto w-full py-8">
            <Carousel items={adsCarousel}/>
            {featuredProducts.length > 0 && <ProductsList products={featuredProducts} title="Produtos em Destaque"/>}
        </div>
    )
}

export default Home