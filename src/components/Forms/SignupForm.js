import { useState } from 'react'
import { isValidNumber } from '../../helpers/validation'

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

    return (
        <div className="grid grid-cols-2">
            <div className="border-r border-stone-400 pr-8">
                <h2 className="text-lg font-medium">Sobre você</h2>
                <p className="text-sm">* Campos Obrigatórios</p>
            </div>
            <div className="pl-8">
                <h2 className="text-lg font-medium">Sobre sua conta</h2>
            </div>
        </div>
    )
}

export default SignupForm