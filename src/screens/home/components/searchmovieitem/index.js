import React from 'react'
import { AppText_Medium, StyledButton, StyledImage } from '../../../../components/ui/StyledComponents'

const SearchMovieItem = (props) => {

    const { Name, url } = props

    return (
        <StyledButton className={'w-full bg-Yankees-Blue rounded-lg flex-row items-center px-1rem py-0.5rem my-0.5rem'}>
            <StyledImage className={'w-3rem h-4rem rounded-lg mr-1rem'} source={{ uri: url }} />
            <AppText_Medium className={'w-6/12 text-base text-white'}>{Name}</AppText_Medium>
        </StyledButton>
    )
}

export default SearchMovieItem