import { doc } from 'firebase/firestore';
import db, { TODO_LIST_APP_COLLECTION_NAME } from '../firebase';

const getDocRef = (pathSegments = []) =>
  doc(db, TODO_LIST_APP_COLLECTION_NAME, ...pathSegments);

export default getDocRef;
