import firestore from "@react-native-firebase/firestore";

export async function getMovieList() {
    const data = await firestore()
        .collection('Moives')
        .get()
        .then(querySnapshot => {
            return querySnapshot.docs.map((doc) => {
                return { data: doc.data(), id: doc.id }
            })
        })
    return data
}

export async function getMovieListByName(name) {

    const data = await firestore()
        .collection('Moives')
        .orderBy('MovieName')
        .startAt(name)
        .endAt(name + '\uf8ff')
        .get()
        .then(querySnapshot => {
            return querySnapshot.docs.map((doc) => {
                return doc.data()
            })
        })
    return data
}

