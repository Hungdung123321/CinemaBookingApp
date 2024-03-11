import React from 'react'
import { AppText_Medium, StyledButton, StyledView } from '../../../../components/ui/StyledComponents'
import { SEAT_STATUS } from '../../../../constants/commons'

const SeatButton = (props) => {

    const { Status, text, ClassSeatName, onPressSeat, isActive } = props

    const onPress = () => {
        onPressSeat?.()
    }

    switch (Status) {
        case SEAT_STATUS.ALVAILBLE:
            return (
                <StyledButton onPress={onPress} className={`w-2.5rem h-2.5rem ${isActive ? 'bg-Orange' : 'bg-Space-Cadet'} rounded-lg items-center justify-center ${ClassSeatName}`}>
                    <AppText_Medium className={'text-xs text-white'}>{text}</AppText_Medium>
                </StyledButton>
            )
        case SEAT_STATUS.OCCUPIED:
            return (
                <StyledView className={`w-2.5rem h-2.5rem bg-Yankees-Blue rounded-lg items-center justify-center ${ClassSeatName}`}>
                    <AppText_Medium className={'text-xs text-white'}>x</AppText_Medium>
                </StyledView>
            )
    }


}

export default SeatButton