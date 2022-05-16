import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, setDoc, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

// Initialization & Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH3eB7vJJIwSYekk4qQwUHo8hCYInP_Go",
    authDomain: "netshoes-clone.firebaseapp.com",
    projectId: "netshoes-clone",
    storageBucket: "netshoes-clone.appspot.com",
    messagingSenderId: "107651677486",
    appId: "1:107651677486:web:2b17fcaa5918ea6c28cebf"
  };

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app);

// Firestore Functions

export const createProduct = async (product) => {
    return await setDoc(doc(db, "produtos", product.id), {
        nome: product.nome,
        tipo: product.tipo,
        marca: product.marca,
        genero: product.genero,
        preco: product.preco,
        tamanhos: JSON.stringify(product.tamanhos),
        indicacao: product.indicacao,
        material: product.material,
        pisada: product.pisada,
        categoria: product.categoria,
        origem: product.origem,
        descricao: product.descricao,
        avaliacao_media: product.avaliacao_media,
        avaliacao_qtd: product.avaliacao_qtd,
        desconto: product.desconto
    })
}

// Auth Functions

export const createNewUser = (user) => {
    createUserWithEmailAndPassword(auth, user.email, user.senha).then((credentials) => {
        console.log(credentials)
        addDoc(collection(db, "usuarios"), {
            auth_id: credentials.user.uid,
            email: user.email,
            telefone: user.telefone,
            nome: user.nome,
            sobrenome: user.sobrenome,
            sexo: user.sexo,
            cpf: user.cpf,
            data_de_nascimento: JSON.stringify(user.data_de_nascimento),
            enderecos: [JSON.stringify(user.endereco)]
        })
    }).catch((err) => {
        console.log(err.message)
    })
}

export const simpleCreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
        })
        .catch((error) => {
            const what = {...error}
            console.log(what)
            console.log(error)
            console.log(error.message)
            // ..
        });
}





// const emptyFormData = {
//     telefone: "",
//     email: "",
//     senha: "",
//     nome: "",
//     sobrenome: "",
//     sexo: "",
//     cpf: "",
//     data_de_nascimento: {
//         dia: "",
//         mes: "",
//         ano: ""
//     }, endereco: {
//         cep: "",
//         logradouro: "",
//         numero: "",
//         complemento: "",
//         bairro: "",
//         estado: "",
//         cidade: "",
//         referencia: ""
//     },
//     error_msg: ""
// }