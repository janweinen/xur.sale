import * as firebase from "firebase/app";
import "firebase/database";

export async function firebaseRequest(hash) {
  const request = firebase.database().ref(hash);

  const snapshot = await request.once("value");
  return snapshot.val();
}
