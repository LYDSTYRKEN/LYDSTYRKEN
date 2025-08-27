import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyKtFD4BrFjKGtPGy2cKPenkysz4h2lLI",
  authDomain: "lydstyrken-ab288.firebaseapp.com",
  projectId: "lydstyrken-ab288",
  storageBucket: "lydstyrken-ab288.appspot.com",
  messagingSenderId: "140962566931",
  appId: "1:140962566931:web:b7f4ababaf3184bc8cc0e6",
  measurementId: "G-Q74KMFN9YV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// store the page user came from
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    localStorage.setItem('redirectAfterLogin', window.location.pathname + window.location.search + window.location.hash);
    window.location.href = 'login.html';
  });
}

// show account link when authenticated
const accountLink = document.getElementById('accountLink');
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (accountLink) accountLink.style.display = 'inline-block';
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-block';
    if (accountLink) accountLink.style.display = 'none';
  }
});

const logoutLink = document.getElementById('logoutLink');
if (logoutLink) {
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      localStorage.removeItem('lydstyrkenUser');
      window.location.href = 'index.html';
    });
  });
}
