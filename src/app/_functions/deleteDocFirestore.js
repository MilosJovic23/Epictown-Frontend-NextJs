import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const deleteDocument = async (collectionName, docId) => {
    try {
        await deleteDoc(doc(db, collectionName, docId));
        console.log("Document deleted successfully!");
    } catch (error) {
        console.error("Error deleting document:", error);
    }
};

export default  deleteDocument;