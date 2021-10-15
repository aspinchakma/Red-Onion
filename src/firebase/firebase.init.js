import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.iconfig";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;