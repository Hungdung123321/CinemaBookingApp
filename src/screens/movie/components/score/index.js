import React from 'react'
import { AppText_Bold, AppText_light, StyledView } from '../../../../components/ui/StyledComponents'

const Score = (props) => {

    const { score, label } = props

    return (
        <StyledView className={'flex-1 items-center justify-center'}>
            <AppText_Bold className={'text-xl text-white font-bold'}>{score}</AppText_Bold>
            <AppText_light className={'text-sm text-Dark-Blue-Gray'}>{label}</AppText_light>
        </StyledView>
    )
}

export default Score