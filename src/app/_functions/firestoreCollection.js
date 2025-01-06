import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const useFirestoreCollection = (collectionName) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setData(docs);
            setLoading(false);
        });


        return () => unsubscribe();
    }, [collectionName]);

    return { data, loading };
};

export default useFirestoreCollection;