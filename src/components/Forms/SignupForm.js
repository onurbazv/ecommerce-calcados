import { useState } from 'react'
import DefaultInput from './Inputs/DefaultInput'
import SelectInput from './Inputs/SelectInput'
import { isValidPhoneInput, isValidNumber, validateForm } from '../../helpers/validation'
import { dias, meses, anos, estados } from '../../constants/select_options'

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
    },
    error_msg: ""
}

const SignupForm = ({preFill}) => {
    const [formData, setFormData] = useState({...emptyFormData, email: preFill})

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target
        if (name.includes("@")) {
            const [target, sub] = name.split("@")
            if (sub === "cep") {
                if (isValidNumber(value) && value.length < 9) {
                    setFormData(prev => ({
                        ...prev,
                        endereco: {
                            ...prev.endereco,
                            cep: value
                        }
                    }))
                }
            } else {
                setFormData(prev => ({
                    ...prev,
                    [target] : {
                        ...formData[target],
                        [sub]: value,
                    }
                }))
            }
        } else {
            // ifs for edge cases such as CPF, TELEFONE (22) 988146171
            if (name === "telefone") {
                let matches = value.match(/([0-9])\w+/g)
                let matchStr = ""
                if (matches !== null) {
                    matchStr = matches.join("")
                }
                if (isValidPhoneInput(value) && matchStr.length < 12) {
                    let telefoneString = ""
                    if (value.length === 1 && value !== "(") {
                        telefoneString = `(${value}`
                    } else if (value.length === 4 && value.split("")[3] !== ")") {
                        let chars = value.split("")
                        chars.splice(3, 0, ")")
                        chars.splice(4, 0, " ")
                        telefoneString = chars.join("")
                    } else {
                        telefoneString = value
                    }
                    setFormData(prev => ({
                        ...prev,
                        telefone: telefoneString
                    }))
                }
            } else if (name === "cpf") {
                if (isValidNumber(value)) {
                    setFormData(prev => ({
                        ...prev,
                        cpf: value
                    }))
                }
            } else {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }))
            }
        }
    } 

    // Make an effect for when CEP changes, check if length is max_length (9) and fetch results from CEP API
    // then fill other fields with data fetched and lock them
    // clear fields if CEP changes and fields are filled

    const handleSubmit = (event) => {
        event.preventDefault()
        const formErrors = validateForm(formData)
        if (formErrors.length > 0) {
            setFormData(prev => ({
                ...prev,
                error_msg: `Campos Invalidos: ${formErrors.join(", ")}.`
            }))
        } else {
            // submit form to backend
        }
    }

    return (
        <form 
            className="h-full mx-auto max-w-screen-xl my-16 p-16 bg-white rounded-lg"
            onSubmit={handleSubmit}>
            <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl border-b border-stone-300 font-medium pb-2">Cadastro de Usuário</h1>
                <p className="text-sm">* Campos Obrigatórios</p>
            </div>
            <div className="grid grid-cols-5">
                <div className="border-r border-stone-400 col-span-3 pr-16 flex flex-col gap-4">
                    <h2 className="text-lg font-medium mt-4 mb-1">Sobre você</h2>
                    {/* Nome + Sobrenome + Sexo */}
                    <div className="grid grid-cols-3 gap-4">
                        <DefaultInput 
                            required={true}
                            labelText="* Nome"
                            name="nome"
                            handleChange={handleChange}
                            value={formData.nome} />
                        <DefaultInput 
                            required={true}
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
                                    required
                                    className="mr-2 scale-150" 
                                    type="radio"
                                    name="sexo"
                                    value="Feminino"
                                    onChange={handleChange}/>
                                <label className="mr-3">Feminino</label>
                                <input
                                    required
                                    className="mr-2 scale-150" 
                                    type="radio"
                                    name="sexo"
                                    value="Masculino"
                                    onChange={handleChange}/>
                                <label>Masculino</label>
                            </div>
                        </div>
                    </div>
                    {/* Data de Nascimento + CPF */}
                    <div className="grid grid-cols-2 gap-4 items-end">
                        <div className="relative">
                            <label className="text-sm text-stone-500 absolute -translate-y-1/2">
                                * Data de Nascimento
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                <SelectInput
                                    required={true}
                                    options={dias} 
                                    value={formData.data_de_nascimento.dia}
                                    name="data_de_nascimento@dia"
                                    handleChange={handleChange}/>
                                <SelectInput 
                                    required={true}
                                    options={meses} 
                                    value={formData.data_de_nascimento.mes}
                                    name="data_de_nascimento@mes"
                                    handleChange={handleChange}/>
                                <SelectInput 
                                    required={true}
                                    options={anos} 
                                    value={formData.data_de_nascimento.ano}
                                    name="data_de_nascimento@ano"
                                    handleChange={handleChange}/>
                            </div>
                        </div>
                        <DefaultInput
                            required={true}
                            labelText="* CPF"
                            name="cpf"
                            handleChange={handleChange}
                            value={formData.cpf}/>
                    </div>
                    <h2 className="text-lg font-medium mt-4 mb-1">Seu Endereço</h2>
                    {/* CEP + Logradouro */}
                    <div className="grid grid-cols-3 gap-4">
                        <DefaultInput
                            required={true}
                            labelText="* CEP"
                            name="endereco@cep"
                            handleChange={handleChange}
                            value={formData.endereco.cep}/>
                        <div className="col-span-2">
                            <DefaultInput 
                                required={true}
                                labelText="* Logradouro"
                                name="endereco@logradouro"
                                handleChange={handleChange}
                                value={formData.endereco.logradouro}/>
                        </div>
                    </div>
                    {/* Numero + Complemento + Bairro */}
                    <div className="grid grid-cols-4 gap-4">
                        <DefaultInput 
                            required={true}
                            labelText="* Número"
                            name="endereco@numero"
                            handleChange={handleChange}
                            value={formData.endereco.numero}/>
                        <DefaultInput 
                            required={false}
                            labelText="Complemento"
                            name="endereco@complemento"
                            handleChange={handleChange}
                            value={formData.endereco.complemento}/>
                        <DefaultInput
                            required={true}
                            wrapperStyles="col-span-2"
                            labelText="* Bairro"
                            name="endereco@bairro"
                            handleChange={handleChange}
                            value={formData.endereco.bairro}/>
                    </div>
                    {/* Estado + Cidade + Referencia */}
                    <div className="grid grid-cols-3 gap-4 items-end">
                        <div className="relative">
                            <label className="text-sm text-stone-500 absolute -translate-y-1/2">
                                * Estado
                            </label>
                            <SelectInput
                                required={true}
                                options={estados} 
                                value={formData.endereco.estado}
                                name="endereco@estado"
                                handleChange={handleChange}/>
                        </div>
                        <DefaultInput 
                            required={true}
                            labelText="* Cidade"
                            name="endereco@cidade"
                            handleChange={handleChange}
                            value={formData.endereco.cidade}/>
                        <DefaultInput 
                            required={false}
                            labelText="Referência"
                            name="endereco@referencia"
                            handleChange={handleChange}
                            value={formData.endereco.referencia}/>
                    </div>
                </div>
                <div className="col-span-2 pl-16 flex flex-col gap-4">
                    <h2 className="text-lg font-medium mt-4 mb-1">Sobre sua conta</h2>
                    <DefaultInput 
                        required={true}
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
                        name="senha"
                        handleChange={handleChange}
                        value={formData.senha}/>
                </div>
            </div>
            <div className="flex mt-6">
                {formData.error_msg !== "" && (
                    <p className="text-red-600 w-fit font-medium">{formData.error_msg}</p>
                )}
                <button className="bg-stone-200 px-12 py-4 hover:bg-stone-300 font-medium rounded-lg ml-auto block">PROSSEGUIR</button>
            </div>
        </form>
    )
}

// bg-stone-200 shadow-md rounded-lg hover:bg-stone-300 cursor-pointer

export default SignupForm