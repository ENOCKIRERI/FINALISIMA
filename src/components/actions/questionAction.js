import { FETCH_QUESTIONS, NEW_QUESTION } from '.actions/types';

import { db } from "../config"
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function fetchQuestions (dispatch) {
    const querySnapshot = await getDocs(collection(db, "questions"));
    let docs = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        docs.push({id:doc.id, data: doc.data()});
    });
    dispatch({
        type: FETCH_QUESTIONS,
        payload: docs
    })
};

export const createQuestion = question => async dispatch => {
  
    const docRef = await addDoc(collection(db, "questions"), {title: question});
    console.log("Document written with ID: ", docRef.id);
    dispatch({
        type: NEW_QUESTION,
        payload: docRef.id
    })
};