
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const editDocument = async (collectionName, documentId, updatedData) => {
    const docRef = doc(db, collectionName, documentId);

    try {
        await updateDoc(docRef, updatedData);
        console.log('Document successfully updated!');
    } catch (error) {
        console.error('Error updating document: ', error);
    }
};

export default editDocument;