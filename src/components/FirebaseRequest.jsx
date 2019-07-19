import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

export async function firebaseRequest(hash) {
  const request = firebase.database().ref(hash);

  const snapshot = await request.once("value");
  return snapshot.val();
}
/*
export async function firestoreRequest() {
  const request = firebase
    .firestore()
    .collection("xur-location")
    .get();

  const snapshot = await request.once("value");
  return snapshot.val();
}*/
