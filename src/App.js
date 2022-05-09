import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import ModalContext from "./context/ModalContext";
import Modal from "./components/Modal";

import Navbar from "./components/Navbar";

import Home from "./pages/Home"
import Login from "./pages/Login"

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
					className="min-h-screen"
					style={{
						background: "url('img/bg75.png'), linear-gradient(40deg, rgba(231,229,228,1) 0%, rgba(214,211,209,1) 100%)",
						backgroundBlendMode: "overlay",
						backgroundAttachment: "fixed"
					}}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
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
