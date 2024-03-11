import React from 'react'
import { AppText_Medium, StyledButton } from '../../../../../../components/ui/StyledComponents'
import { Styles } from '../../../../../../utils/style'

const SeatTypeCard = (props) => {

    const { TypeName, Price, ...restBtn } = props

    return (
        <StyledButton {...restBtn} style={Styles.LinearBorder} className={'w-full py-1rem flex-row justify-between border-b'}>
            <AppText_Medium className={'text-base text-white'}>{TypeName}</AppText_Medium>
            <AppText_Medium className={'text-base text-Dark-Blue-Gray'}>{Price}</AppText_Medium>
        </StyledButton>
    )
}

export default SeatTypeCard