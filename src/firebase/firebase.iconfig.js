const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API__KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH__DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT__ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE__BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING__SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP__ID
};

export default firebaseConfig;