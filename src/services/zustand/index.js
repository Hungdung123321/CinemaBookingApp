import { create } from 'zustand'
import { produce } from 'immer'

export const useStore = create((set) => ({
    Seats: [],
    currentSeatCount: 0,
    InitSeats: (countSeat, col) => set(produce((state) => {
        for (var i = 0; i < countSeat; i++) {
            state.Seats.push({
                id: "id=" + i,
                Label: i + 1,
                index: i,
                isSelected: false,
                row: Math.floor(i / col) + 1,
                type: null,
                isOccupied: false
            });
        }
    })),
    CheckSelectedSeats: (listSelectedSeats) => set(produce((state) => {
        listSelectedSeats.forEach((SelectedSeat) => {
            state.Seats[SelectedSeat.index].isSelected = true
            state.Seats[SelectedSeat.index].isOccupied = true
            state.Seats[SelectedSeat.index].type = SelectedSeat.type
        })
    })),
    updateSeat: (newSeat, seatType) => set(produce((state) => {
        state.Seats[newSeat.index].isSelected = true
        state.Seats[newSeat.index].type = seatType
        state.currentSeatCount++
    })),
    removeSeat: (newSeat) => set(produce((state) => {
        state.Seats[newSeat.index].isSelected = false
        state.Seats[newSeat.index].type = null
        state.currentSeatCount--
    })),
    ClearSeats: () => set(() => ({ Seats: [], currentSeatCount: 0 }))
}))

