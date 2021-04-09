import { get } from 'core-js/core/dict';
import firebase from 'firebase';
import { ref, onUnmounted } from 'vue';

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection('users');

// Helper Functions
export const createUser = (user) => {
    return usersCollection.add(user);
}

export const getUser = async (id) => {
    const user = await userCollection.doc(id).get();
    return user.exists ? user.data() : null;
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user);
}

export const deleteUser = (id) => {
    return usersCollection.doc(id).delete();
}

export const useLoadUsers = () => {
    const users = ref([]);
    usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return users
}