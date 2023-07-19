import { initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURED_ID
};
let app: any
if (typeof window !== undefined) {
    app = initializeApp(firebaseConfig);
}


export const getFirebaseMessageToken = async () => {
    let is = await isSupported()
    if (is) {
        const messaging = getMessaging(app);
        try {
            let tokenId = await getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VALID_KEY, })
            return { tokenId }
        } catch (error) {
            return { error }
        }
    }
    else {
        return { error: " Notification Not Supported" }
    }
}
