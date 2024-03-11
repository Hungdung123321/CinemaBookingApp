import moment from "moment"

export function FormatData(data) {
    const Data = data
    if (data.length % 2 !== 0) {
        Data.push(null)
        return Data
    }
    return Data
}

export function TimeStampToDate({ seconds }) {
    return moment(seconds * 1000).format("hh:mm a DD/MM/YYYY").toString()
}