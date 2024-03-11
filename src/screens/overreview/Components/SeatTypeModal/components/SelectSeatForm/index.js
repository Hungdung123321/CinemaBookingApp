import React from 'react'
import { AppText_Bold, AppText_Medium } from '../../../../../../components/ui/StyledComponents'
import { LIST_SEAT_TYPE } from '../../../../../../constants/commons'
import { SeatTypeCard } from '..'

const SelectSeatForm = (props) => {

    const { row, seat, onPressSeatType } = props

    return (
        <>
            <AppText_Bold className={'text-2xl text-white mx-auto'}>Select ticket type</AppText_Bold>
            <AppText_Medium className={'text-base text-Dark-Blue-Gray mx-auto'}>{`${row}th row, ${seat}th seat`}</AppText_Medium>
            {
                LIST_SEAT_TYPE.map((type) => <SeatTypeCard
                    onPress={() => onPressSeatType(type)}
                    key={type.name}
                    TypeName={type.name}
                    Price={type.price}
                />)
            }
        </>
    )
}

export default SelectSeatForm