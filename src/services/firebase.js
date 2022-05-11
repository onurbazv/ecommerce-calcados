import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'


// Initialization & Configuration
const firebaseConfig = {
    apiKey: "AIzaSyADrZEgp5k-QgSBmoZPQjs1EX06RlAfu9I",
    authDomain: "netshoes-clone.firebaseapp.com",
    projectId: "netshoes-clone",
    storageBucket: "netshoes-clone.appspot.com",
    messagingSenderId: "107651677486",
    appId: "1:107651677486:web:2b17fcaa5918ea6c28cebf"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)


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

