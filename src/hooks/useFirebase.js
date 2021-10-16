import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

const useFirebase = () => {
    initializeAuthentication();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const addToDatabase = (id, value) => {
        const exists = getDb();
        let shopping_cart = {};
        if (!exists) {
            shopping_cart[id] = value;
        } else {
            shopping_cart = JSON.parse(exists)
            if (shopping_cart[id]) {
                shopping_cart[id] = value;
            } else {
                shopping_cart[id] = value;
            }
        }
        updateDb(shopping_cart);

    }
    const updateDb = cart => {
        localStorage.setItem('shopping_cart', JSON.stringify(cart))
    }
    const getDb = () => localStorage.getItem('shopping_cart')

    const removeItem = id => {
        const exist = getDb();
        if (!exist) {

        } else {
            const shopping_items = JSON.parse(exist);
            delete shopping_items[id];
            updateDb(shopping_items)
        }

    }
    const getStreetName = name => {
        console.log(name)
    }


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            }).catch(error => {
                setError(error.message)
            })
    }
    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
        }
    })
    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch(error => {
            setError(error.message)
        })
    }

    return {
        user,
        error,
        signInWithGoogle,
        handleLogOut,
        signInWithFacebook,
        addToDatabase,
        getDb,
        removeItem,
        getStreetName,
    }
}
export default useFirebase;