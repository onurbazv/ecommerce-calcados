import React from 'react'

const ProductPreview = ({product}) => {
    return (
        <div
            className="p-2 font-medium rounded-lg border-2 border-stone-400 bg-white shadow-md">
            <img src={`./img/products/${product.id}/0.webp`} alt={`${product.nome} preview`}/>
            <p>
                {product.nome}
            </p>
            {product.desconto === 0 ? (
                <p className="text-lg uppercase font-bold">
                    R$ {product.preco.toFixed(2)}
                </p>
            ) : (
                <p className="text-lg uppercase font-bold">
                    <span className="text-base font-medium line-through mr-1">R${product.preco}</span>
                     R${(product.preco * (1 - (product.desconto / 100))).toFixed(2)}
                </p>
            )}
        </div>
    )
}

export default ProductPreview