import React from 'react'
import { StyledView } from '../../../../components/ui/StyledComponents'
import { SEAT_STATUS } from '../../../../constants/commons'
import SeatStatus from '../SeatStatus'

const SymbolSeats = () => {
    return (
        <StyledView className={'w-full flex-row items-center justify-around mt-1rem'}>
            <SeatStatus Status={SEAT_STATUS.ALVAILBLE} />
            <SeatStatus Status={SEAT_STATUS.OCCUPIED} />
            <SeatStatus Status={SEAT_STATUS.CHOSEN} />
        </StyledView>
    )
}

export default SymbolSeats