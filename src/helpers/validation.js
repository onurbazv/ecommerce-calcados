export const isValidEmail = (emailAddress) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailAddress.match(validRegex) === null ? false : true
}

export const isValidNumber = (string) => {
    let numbers = '0123456789'
    return string.split("").filter(ch => numbers.includes(ch)).length === string.length
}

export const isValidPhoneInput = (string) => {
    let chars = "0123456789 ()"
	let numbers = '0123456789'
    return string.split("").filter(ch => chars.includes(ch)).length === string.length
}

const isValidPhone = (string) => {
    let chars = "0123456789 ()"
	let numbers = '0123456789'
    return string.split("").filter(ch => chars.includes(ch)).length === string.length && string.split("").filter(ch => numbers.includes(ch)).length >= 10
}

const isValidCPF = (cpf) => {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf === '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length !== 11 || 
		cpf === "00000000000" || 
		cpf === "11111111111" || 
		cpf === "22222222222" || 
		cpf === "33333333333" || 
		cpf === "44444444444" || 
		cpf === "55555555555" || 
		cpf === "66666666666" || 
		cpf === "77777777777" || 
		cpf === "88888888888" || 
		cpf === "99999999999")
			return false;		
	// Valida 1o digito	
	let add = 0;	
	for (let i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		let rev = 11 - (add % 11);	
		if (rev === 10 || rev === 11)		
			rev = 0;	
		if (rev !== parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (let i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev === 10 || rev === 11)	
		rev = 0;	
	if (rev !== parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}


export const validateForm = (data) => {
	const { cep, logradouro, numero, bairro, estado, cidade } = data.endereco
	const { dia, mes, ano } = data.data_de_nascimento
	const invalidFields = []
	if (data.nome.trim() === "") invalidFields.push("Nome")
	if (data.sobrenome.trim() === "") invalidFields.push("Sobrenome")
	if (data.sexo === "") invalidFields.push("Sexo")
	if (!isValidEmail(data.email)) invalidFields.push("Email")
	if (!isValidCPF(data.cpf)) invalidFields.push("CPF")
	if (!isValidPhone(data.telefone)) invalidFields.push("Telefone")
	if (!data.senha.length >= 6) invalidFields.push("Senha")
	if (dia === "" || mes === "" || ano === "") invalidFields.push("Data de Nascimento")
	if (cep.length !== 8) invalidFields.push("CEP")
	if (logradouro.trim() === "") invalidFields.push("Logradouro")
	if (numero.trim() === "") invalidFields.push("Número")
	if (bairro.trim() === "") invalidFields.push("Bairro")
	if (estado === "") invalidFields.push("Estado")
	if (cidade.trim() === "") invalidFields.push("Cidade")
	return invalidFields
}