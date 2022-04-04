import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'
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
				<div className="bg-stone-200">
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

export default App;
