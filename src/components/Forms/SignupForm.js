import { useState } from 'react'
import DefaultInput from './Inputs/DefaultInput'
import SelectInput from './Inputs/SelectInput'
import { isValidNumber } from '../../helpers/validation'
import { optionsDia, optionsMes, optionsAno } from '../../constants/select_options'

const emptyFormData = {
    telefone: "",
    email: "",
    senha: "",
    nome: "",
    sobrenome: "",
    sexo: "",
    cpf: "",
    data_de_nascimento: {
        dia: "",
        mes: "",
        ano: ""
    }, endereco: {
        cep: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        estado: "",
        cidade: "",
        referencia: ""
    }
}

const SignupForm = ({preFill}) => {
    const [formData, setFormData] = useState({...emptyFormData, email: preFill})

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target
        if (name.includes("@")) {
            const [target, sub] = name.split("@")
            setFormData(prev => ({
                ...prev,
                [target] : {
                    ...formData[target],
                    [sub]: value,
                }
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form 
            className="h-full mx-auto max-w-screen-xl my-16 p-16 bg-white rounded-lg"
            onSubmit={handleSubmit}>
            <div className="grid grid-cols-5">
                <div className="border-r border-stone-400 col-span-3 pr-16 flex flex-col gap-4">
                    <h2 className="text-lg font-medium mb-2">Sobre você</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <DefaultInput 
                            required={true}
                            type="text"
                            labelText="* Nome"
                            name="nome"
                            handleChange={handleChange}
                            value={formData.nome} />
                        <DefaultInput 
                            required={true}
                            type="text"
                            labelText="* Sobrenome"
                            name="sobrenome"
                            handleChange={handleChange}
                            value={formData.sobrenome} />
                        <div className="relative">
                            <label className="text-sm text-stone-500 absolute -translate-y-1/2">
                                * Sexo
                            </label>
                            <div className="mt-4">
                                <input
                                    className="mr-2 scale-150" 
                                    type="radio"
                                    name="sexo"
                                    value="Feminino"
                                    onChange={handleChange}/>
                                <label className="mr-4">Feminino</label>
                                <input
                                    className="mr-2 scale-150" 
                                    type="radio"
                                    name="sexo"
                                    value="Masculino"
                                    onChange={handleChange}/>
                                <label>Masculino</label>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="text-sm text-stone-500 absolute -translate-y-1/2">
                                * Data de Nascimento
                            </label>
                            <div className="mt-4 grid grid-cols-3 gap-4">
                                <SelectInput 
                                    options={optionsDia} 
                                    value={formData.data_de_nascimento.dia}
                                    name="data_de_nascimento@dia"
                                    handleChange={handleChange}/>
                                <SelectInput 
                                    options={optionsMes} 
                                    value={formData.data_de_nascimento.mes}
                                    name="data_de_nascimento@mes"
                                    handleChange={handleChange}/>
                                <SelectInput 
                                    options={optionsAno} 
                                    value={formData.data_de_nascimento.ano}
                                    name="data_de_nascimento@ano"
                                    handleChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 pl-16 flex flex-col gap-4">
                    <h2 className="text-lg font-medium mb-2">Sobre sua conta</h2>
                    <DefaultInput 
                        required={true}
                        type="text"
                        labelText="* Telefone"
                        name="telefone"
                        handleChange={handleChange}
                        value={formData.telefone}/>
                    <DefaultInput 
                        required={true}
                        type="email"
                        labelText="* Email"
                        name="email"
                        handleChange={handleChange}
                        value={formData.email}/>
                    <DefaultInput 
                        required={true}
                        type="password"
                        labelText="* Senha"
                        name="password"
                        handleChange={handleChange}
                        value={formData.password}/>
                </div>
            </div>
            <p className="text-sm mt-4">* Campos Obrigatórios</p>
            <button className="bg-orange-300 px-8 py-2 hover:bg-orange-400 font-medium rounded-lg ml-auto block">Submit</button>
        </form>
    )
}

export default SignupForm