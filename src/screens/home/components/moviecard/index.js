import React from 'react'
import {
    AppText_Bold,
    AppText_Medium,
    AppText_light,
    StyledButton,
    StyledImage,
    StyledView
} from '../../../../components/ui/StyledComponents'

const MovieCard = (props) => {

    const { data, ContanerStyle, ...restButton } = props

    const { MovieName, Imdb, Genre, Url } = data

    return (
        <StyledButton className={ContanerStyle} {...restButton}>
            <StyledView className={'w-10rem relative'}>
                <StyledImage
                    source={{ uri: Url }}
                    className={'w-full h-14rem object-cover mb-0.5rem rounded-lg'}
                />
                <AppText_Medium className={'font-medium text-white text-base'}>{MovieName || "non"}</AppText_Medium>
                <AppText_light className={'font-light text-Dark-Blue-Gray text-sm'}>{Genre}</AppText_light>
                <StyledView className={'absolute top-0.5rem right-0.5rem w-2rem h-2rem bg-Orange rounded-lg'}>
                    <AppText_Bold className={'text-xs font-bold text-white m-auto'}>{Imdb}</AppText_Bold>
                </StyledView>
            </StyledView>
        </StyledButton>
    )
}

export default MovieCard