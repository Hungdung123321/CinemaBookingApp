import React from 'react'
import { AppText_Regular, StyledView } from '../../../../components/ui/StyledComponents'
import { IC_Cake } from '../../../../assets'

const EmtyListMovieCard = () => {
    return (
        <StyledView className={'justify-center items-center mt-10rem'}>
            <IC_Cake />
            <AppText_Regular className={'text-sm text-Dark-Blue-Gray'}>You haven't bought tickets yet</AppText_Regular>
        </StyledView>
    )
}

export default EmtyListMovieCard