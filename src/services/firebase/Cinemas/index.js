import firestore from "@react-native-firebase/firestore";

export async function getCinema(doc_id) {
    return await firestore().collection("Cinemas").doc(doc_id).get()
        .then(snapshot => snapshot.data())
}