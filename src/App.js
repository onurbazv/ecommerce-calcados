import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import ModalContext from "./context/ModalContext";
import Modal from "./components/Modal";

import Navbar from "./components/Navbar";
import Home from "./pages/Home"


function App() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalComponent, setModalComponent] = useState(null)

	return (
		<>
			<ModalContext.Provider value={{
				close: () => {
					setModalComponent(null)
					setIsModalOpen(false)
				},
				open: (component) => {
					setModalComponent(component)
					setIsModalOpen(true)
				}
			}}>
				<div
					style={{
						background: "url('img/bg75.png'), linear-gradient(40deg, rgba(231,229,228,1) 0%, rgba(214,211,209,1) 100%)",
						backgroundBlendMode: "overlay",
						backgroundAttachment: "fixed"
					}}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/teste" element={<div>HELLO WORLD</div>} />
					</Routes>
				</div>
			</ModalContext.Provider>
			<Modal child={modalComponent} isOpen={isModalOpen} close={() => {
				setModalComponent(null)
				setIsModalOpen(false)
			}} />
		</>
		);
}

// <blend-mode> = normal | 
// (en-US) multiply | (en-US) screen | (en-US) overlay | 
// (en-US) darken | (en-US) lighten | (en-US) color-dodge | 
// (en-US) color-burn | (en-US) hard-light | (en-US) soft-light | 
// (en-US) difference | (en-US) exclusion | (en-US) hue | 
// (en-US) saturation | (en-US) color | (en-US) luminosity

export default App;
