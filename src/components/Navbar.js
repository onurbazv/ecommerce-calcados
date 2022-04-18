import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ICON_SEARCH, ICON_CART, ICON_USER, ICON_MENU, ICON_CLOSE } from '../constants/icons'

const Navbar = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false)

    const toggleSubmenu = () => setSubmenuOpen(prev => !prev)

    return (
        <nav className="w-full p-6 bg-stone-300 relative">
            <div className="flex justify-between items-center gap-12 mx-auto max-w-screen-xl">
                <Link className="font-extrabold text-xl tracking-tight" to="/">InternetShoes</Link>
                <div className="w-full relative">
                    <input
                        className="rounded-full w-full py-2 px-3 font-semibold text-sm"
                        placeholder="O que você está procurando?"/>
                    <div className="absolute right-2.5 top-1.5 cursor-pointer">
                        {ICON_SEARCH}
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="flex cursor-pointer" onClick={toggleSubmenu}>
                        {ICON_MENU}
                        <div className="ml-2 text-lg font-medium">
                            Categorias
                        </div>
                    </div>
                    <Link className="font-medium text-lg flex items-center" to="/">
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
            {/* Categorias Submenu */}
            {submenuOpen && <div className="w-full h-screen bg-black/40 absolute left-0 bottom-0 translate-y-full z-20">
                <div className="bg-white w-1/2 p-12 mx-auto rounded-b-xl flex text-center font-medium text-lg relative">
                    <div className="w-1/2">
                        <p className="text-2xl font-semibold mb-2">Masculino</p>
                        <ul>
                            <li className="mb-1">Tênis</li>
                            <li className="mb-1">Sapatênis</li>
                            <li className="mb-1">Botas</li>
                        </ul>
                    </div>
                    <div className="w-1/2 border-l-2 border-stone-300">
                        <p className="text-2xl font-semibold mb-2">Feminino</p>
                        <ul>
                            <li className="mb-1">Tênis</li>
                            <li className="mb-1">Crocs</li>
                            <li className="mb-1">Botas</li>
                        </ul>
                    </div>
                    <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleSubmenu}>
                        {ICON_CLOSE}
                    </div>
                </div>
            </div>}
            
        </nav>
    )
}

export default Navbar