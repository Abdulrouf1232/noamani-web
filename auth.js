import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.noamaniAuth = {
  ready: true,

  async register(username, email, password) {
    const result = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );

    if (username.trim()) {
      await updateProfile(result.user, {
        displayName: username.trim()
      });
    }

    return result.user;
  },

  async login(email, password) {
    const result = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );

    return result.user;
  },

  async logout() {
    await signOut(auth);
  },

  getUser() {
    return auth.currentUser;
  }
};

onAuthStateChanged(auth, user => {
  window.noamaniCurrentUser = user;
  window.dispatchEvent(
    new CustomEvent("noamani-auth-change", {
      detail: {
        loggedIn: !!user,
        email: user ? user.email : null
      }
    })
  );
});

console.log("NOAMANI WEB Firebase Authentication ready");
