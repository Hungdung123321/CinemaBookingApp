import React from 'react'
import { AppText_Regular, StyledView } from '../ui/StyledComponents'
import { IC_Cake } from '../../assets'

const EmtyList = (props) => {

    const { text } = props

    return (
        <StyledView className={'justify-center items-center mt-10rem'}>
            <IC_Cake />
            <AppText_Regular className={'text-sm text-Dark-Blue-Gray'}>{text}</AppText_Regular>
        </StyledView>
    )
}

export default EmtyList