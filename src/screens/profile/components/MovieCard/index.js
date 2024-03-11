import React from 'react'
import { AppText_Bold, AppText_Regular, StyledButton, StyledImage, StyledView } from '../../../../components/ui/StyledComponents'

const MovieCard = (props) => {

    const { MovieName, MovieDate, MovieCinema, MovieUrl, ...restBtn } = props

    return (
        <StyledButton {...restBtn} className={'w-full h-6.5rem my-0.5rem bg-Yankees-Blue rounded-lg flex-row items-center px-1rem'}>
            <StyledImage className={'w-3.5rem h-5.375rem rounded-lg'} source={{ uri: MovieUrl }} />
            <StyledView className={'ml-2rem'}>
                <AppText_Bold className={'text-base text-white'}>{MovieName}</AppText_Bold>
                <AppText_Regular className={'text-sm text-white'}>{MovieDate}</AppText_Regular>
                <AppText_Regular className={'text-sm text-Dark-Blue-Gray'}>{MovieCinema}</AppText_Regular>
            </StyledView>
        </StyledButton>
    )
}

export default MovieCard