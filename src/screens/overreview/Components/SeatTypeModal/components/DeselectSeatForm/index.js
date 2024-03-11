import React from 'react'
import { AppText_Bold, StyledView } from '../../../../../../components/ui/StyledComponents'
import { AppButton } from '../../../../../../components'
import { Styles } from '../../../../../../utils/style'
import { SeatTypeCard } from '..'
import { APP_BUTTON_MODE } from '../../../../../../constants/commons'

const DeselectSeatForm = (props) => {

    const { row, seat, type, Price, TypeName, onPressDeselectSeat } = props

    return (
        <StyledView>
            <AppText_Bold className={'text-2xl text-white mx-auto'}>{`${row}th row, ${seat}th seat`}</AppText_Bold>
            <SeatTypeCard TypeName={type.name} Price={type.price} />
            <AppButton
                style={Styles.LinearBorder}
                Mode={APP_BUTTON_MODE.LIGHT}
                Text={`Deselect this seat`}
                StyleButton={`w-full h-3.5rem mt-4rem border bg-transparent`}
                onPress={onPressDeselectSeat}
            />
        </StyledView>
    )
}

export default DeselectSeatForm