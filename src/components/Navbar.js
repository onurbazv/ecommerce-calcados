import React from 'react'
import { Link } from 'react-router-dom'
import { ICON_SEARCH, ICON_CART, ICON_USER } from '../constants/icons'

const Navbar = () => {
    return (
        <nav className="w-full p-6 bg-stone-300">
            <div className="flex justify-between items-center gap-12 mx-auto max-w-screen-xl">
                <Link className="font-extrabold text-xl tracking-tighter" to="/">InternetShoes</Link>
                <div className="w-full relative">
                    <input
                        className="rounded-full w-full py-2 px-3 font-semibold text-sm"
                        placeholder="O que você está procurando?"/>
                    <div className="absolute right-2.5 top-1.5 cursor-pointer">
                        {ICON_SEARCH}
                    </div>
                </div>
                <div className="flex gap-3">
                    <Link className="font-semibold flex items-center" to="/">
                        {ICON_USER} Entrar
                    </Link> 
                    <Link className="font-semibold relative" to="/teste">
                        {ICON_CART}
                        <div className="absolute bottom-0 left-5 bg-stone-100 bg-opacity-90 rounded-full px-1 text-xs">
                            0
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar