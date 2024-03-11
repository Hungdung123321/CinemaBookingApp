import React from 'react'
import { AppText_Medium, StyledView } from '../../../../components/ui/StyledComponents'
import { SEAT_STATUS } from '../../../../constants/commons'
import { IC_Close_Small } from '../../../../assets'

const SeatStatus = (props) => {

    const { Status } = props

    switch (Status) {
        case SEAT_STATUS.ALVAILBLE:
            return (
                <StyledView className={'flex-row items-center'}>
                    <StyledView className={'w-1rem h-1rem mr-0.5rem rounded-full bg-Yankees-Blue'} />
                    <AppText_Medium className={'text-xs text-white'}>Available</AppText_Medium>
                </StyledView>
            )
        case SEAT_STATUS.CHOSEN:
            return (
                <StyledView className={'flex-row items-center'}>
                    <StyledView className={'w-1rem h-1rem mr-0.5rem rounded-full bg-Orange'} />
                    <AppText_Medium className={'text-xs text-white'}>Chosen</AppText_Medium>
                </StyledView>
            )
        case SEAT_STATUS.OCCUPIED:
            return (
                <StyledView className={'flex-row items-center'}>
                    <StyledView className={'w-1rem h-1rem mr-0.5rem rounded-full bg-Yankees-Blue items-center justify-center'} >
                        <IC_Close_Small />
                    </StyledView>
                    <AppText_Medium className={'text-xs text-white'}>Occupied</AppText_Medium>
                </StyledView>
            )
        default:
            break;
    }
}

export default SeatStatus