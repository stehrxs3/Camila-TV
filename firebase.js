
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAN9_GKVO_dONh11QlV0kpektMYcIhEZHo",
  authDomain: "camilatv-e6782.firebaseapp.com",
  databaseURL: "https://camilatv-e6782-default-rtdb.firebaseio.com", 
  projectId: "camilatv-e6782",
  storageBucket: "camilatv-e6782.firebasestorage.app",
  messagingSenderId: "909118652874",
  appId: "1:909118652874:web:27b569af78c796b9e58f33",
  measurementId: "G-HW0HS9T0KV"
};
// 1. Importações limpas usando a tua pasta firebase.js
import { auth, db } from './firebase.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { 
  ref, 
  set, 
  get, 
  update 
} from 'firebase/database';

// ==========================================
// FUNÇÃO DE CADASTRO
// ==========================================
async function realizarCadastro(email, senha, nickname) {
  try {
    // 1. Cria a conta no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    // 2. Identifica o navegador/aparelho do utilizador
    const device = navigator.userAgent;
    const dataAtual = new Date().toISOString();

    // 3. Grava no Realtime Database dentro do nó "users/ID_DO_UTILIZADOR"
    await set(ref(db, 'users/' + user.uid), {
      uid: user.uid,
      email: email,
      nickname: nickname,
      device: device,
      lastAccess: dataAtual,
      createdAt: dataAtual,
      history: [
        {
          action: "cadastro",
          timestamp: dataAtual,
          device: device
        }
      ]
    });

    alert("Cadastro realizado com sucesso!");
  } catch (error) {
    console.error("Erro no cadastro:", error);
    alert("Erro ao cadastrar: " + error.message);
  }
}

// ==========================================
// FUNÇÃO DE LOGIN
// ==========================================
async function realizarLogin(email, senha) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;
    const device = navigator.userAgent;
    const dataAtual = new Date().toISOString();

    // Procura o histórico atual do utilizador para adicionar a nova entrada
    const userRef = ref(db, 'users/' + user.uid);
    const snapshot = await get(userRef);
    
    if (snapshot.exists()) {
      const userData = snapshot.val();
      const historicoAtual = userData.history || [];
      
      // Adiciona o novo login ao histórico
      historicoAtual.push({
        action: "login",
        timestamp: dataAtual,
        device: device
      });

      // Atualiza no banco de dados
      await update(userRef, {
        lastAccess: dataAtual,
        device: device,
        history: historicoAtual
      });
    }

    alert("Login efetuado com sucesso!");
  } catch (error) {
    console.error("Erro no login:", error);
    alert("Erro ao logar: " + error.message);
  }
}
