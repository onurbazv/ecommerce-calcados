import { useState } from "react";
import ModalContext from "./context/ModalContext";
import ProductListing from "./components/ProductListing";
import Modal from "./components/Modal";


const produtos = require("./constants/data.json")


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
				<div className="min-h-screen bg-stone-100 p-16">
					<div className="max-w-screen-lg mx-auto text-center">
						<p className="text-4xl">
							Produtos
						</p>
						<div className="mt-4">
							{produtos.map((produto, index) => (
								<ProductListing key={index} product={produto}/>
							))}
						</div>
					</div>
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
