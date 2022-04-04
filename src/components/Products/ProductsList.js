import React from 'react'
import ProductPreview from './ProductPreview'

const ProductsList = ({products, title}) => {
    return (
        <>
            <p className="text-3xl font-extrabold mb-4">{title}</p>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <ProductPreview product={product} key={index} />
                ))}
            </div>
        </>
    )
}

export default ProductsList