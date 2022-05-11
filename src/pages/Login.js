import { useState } from "react"
import LoginForm from "../components/Forms/LoginForm"
import SignupForm from "../components/Forms/SignupForm"
import { isValidEmail } from '../helpers/validation'

const Login = () => {
	const [isNewUser, setIsNewUser] = useState(false)
	const [email, setEmail] = useState("")

	return (
			isNewUser ? <SignupForm preFill={email} /> : (
				<div className="h-full mx-auto max-w-screen-lg my-16 p-16 bg-white rounded-lg">
					<div className="grid grid-cols-2">
						<div className="pr-16 border-r border-stone-400">
							<LoginForm />
						</div>
						<div className="pl-16">
							<h2 className="text-xl m-0 font-bold">Criar conta</h2>
							<form className="mt-4 flex flex-col gap-3" onSubmit={(event) => {
								event.preventDefault()
								isValidEmail(email) && setIsNewUser(true)
							}}>
								<input 
									type="text"
									name="email"
									placeholder="Endereço de Email"
									className="w-full p-2 border rounded-md border-stone-600"
									value={email}
									onChange={({target}) => setEmail(target.value)}
									/>
								<button className="font-medium w-full py-2 text-lg text-center bg-stone-200 shadow-md rounded-lg hover:bg-stone-300 cursor-pointer">
									PROSSEGUIR
								</button>
							</form>
						</div>
					</div>
				</div>
			)
	)
}

export default Login