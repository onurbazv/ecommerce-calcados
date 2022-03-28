import React from 'react'

const ProductPreview = ({product}) => {
    return (
        <div className="p-4 text-lg bg-white">
            <p className="text-red-700">{product.nome}</p>
            <p className="text-red-300">R${product.preco}</p>
        </div>
    )
}

export default ProductPreview