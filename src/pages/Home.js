import { useState } from 'react'
import Carousel from '../components/Carousel'
import ProductsList from '../components/Products/ProductsList'

const rawData = require("../constants/data.json")

const adsCarousel = [
	{
		to_path: "/",
		img: "https://www.evergreenlandscape.net/ideas/wp-content/uploads/2014/04/patios_and_walkways_30_1000x563.jpg"
	},
	{
		to_path: "/",
		img: "https://d25tv1xepz39hi.cloudfront.net/2017-12-12/files/eos-6d-mark-ii-sample-image_1723-1.jpg"
	}, {
		to_path: "/",
		img: "https://hebdo25.net/wp-content/uploads/2021/03/Business-concept-effort-for-success-feature-getty.jpg"
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