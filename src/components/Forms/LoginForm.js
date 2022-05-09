import { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        // tries to login 
        event.preventDefault()
        console.log(event)
    }

    return (
        <>
            <h2 className="text-xl m-0 font-bold">Já sou cliente</h2>
            <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="email"
                    placeholder="Endereço de Email"
                    className="w-full p-2 border rounded-md border-stone-600"
                    value={formData.email}
                    onChange={handleChange}
                    />
                <input 
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="w-full p-2 border rounded-md border-stone-600"
                    value={formData.password}
                    onChange={handleChange}
                    />
                <div className="font-medium w-full py-2 text-lg text-center bg-stone-200 shadow-md rounded-lg hover:bg-stone-300 cursor-pointer">
                    ENTRAR
                </div>
            </form>
        </>
    )
}

export default LoginForm