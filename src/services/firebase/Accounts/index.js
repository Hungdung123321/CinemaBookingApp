import firestore, { firebase } from "@react-native-firebase/firestore";

export async function checkAccount(phoneNumber) {

    const Account = await firestore()
        .collection('Accounts')
        .where('PhoneNumber', '==', phoneNumber)
        .get()
        .then(querySnapshot => {
            if (querySnapshot.size === 0) {
                return false
            } else {
                return querySnapshot.docs.map((doc) => {
                    return { Data: doc.data(), id: doc.id }
                })
            }
        })
    return Account[0]
}

export async function addAccount(phoneNumber) {
    return await firestore()
        .collection('Accounts')
        .add({
            PhoneNumber: phoneNumber,
            YourBooking: []
        })
        .then(querySnapshot => {
            return querySnapshot.id
        })
}

export async function addFilmAccount(doc_id, data) {
    return await firestore()
        .collection('Accounts')
        .doc(doc_id)
        .update({
            YourBooking: firebase.firestore.FieldValue.arrayUnion(data)
        })
        .then(() => {
            alert('This Booking has been updated into Profile');
        });
}

export async function removeFilmAccount(doc_id, data) {
    return await firestore()
        .collection('Accounts')
        .doc(doc_id)
        .update({
            YourBooking: firebase.firestore.FieldValue.arrayRemove(data)
        })
        .then(() => {
            alert('This Booking has been remove from Profile');
        });
}

export async function getBookingsByAccount(doc_id) {

    const Account = await firebase.firestore().doc(`Accounts/${doc_id}`).get();
    const fieldPath = new firebase.firestore.FieldPath('YourBooking');

    return Account.get(fieldPath)
}

export async function getBookingsByCinemaIdAndMovieID(cinemaId, movieId) {
    const arr = []
    var arr2 = []
    var BookingsbyId
    await firestore()
        .collection('Accounts')
        .get()
        .then((e) => e.docs)
        .then((docs) => docs.map((doc) => {
            doc.data().YourBooking.map((booking) => {
                arr.push({ ...booking })
            })
        }))
    BookingsbyId = arr.filter((e) => e.Cinema.id === cinemaId && e.Movie.MovieId === movieId)
    BookingsbyId.forEach(e => {
        e.SelectedSeats.forEach(e => {
            arr2.push(e)
        })
    })

    return arr2
}