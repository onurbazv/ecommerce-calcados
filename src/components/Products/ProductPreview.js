import React from 'react'

const ProductPreview = ({product}) => {
    console.log(product)
    return (
        <div className="p-2 font-medium rounded-lg border-2 border-stone-400 bg-white shadow-md">
            <img src={`./data/${product.id}/0.webp`} alt={`${product.nome} preview`}/>
            <p>
                {product.nome}
            </p>
            <p className="text-xl uppercase font-extrabold">
                R$ {product.preco}
            </p>
        </div>
    )
}

export default ProductPreview