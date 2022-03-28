import React, { useContext } from 'react'
import ModalContext from '../context/ModalContext'
import ProductPreview from './ProductPreview'

const ProductListing = ({product}) => {
    const modalControls = useContext(ModalContext)

    const handleClick = () => {
        modalControls.open(<ProductPreview product={product}/>)
    }

    return (
        <p 
            onClick={handleClick}
            className="mt-2 cursor-pointer">
            {product.id}
        </p>
    )
}

export default ProductListing