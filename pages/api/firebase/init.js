import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const firestore = admin.firestore();

const db = {
    users: firestore.collection('users'),
    payments: firestore.collection('payments'),
    subscriptions: firestore.collection('subscriptions'),
    sponsors: firestore.collection('sponsors'),
};

export default db;