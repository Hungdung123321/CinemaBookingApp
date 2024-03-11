import React from 'react'
import { AppText_Bold, StyledButton, StyledView } from '../../../../components/ui/StyledComponents'

const DateButton = (props) => {

    const { icon, text, ...restButton } = props

    return (
        <StyledButton {...restButton}>
            <StyledView style={{ borderColor: 'rgba(109, 158, 255, 0.1)', }} className={'w-10rem h-2.5rem rounded-lg border'}>
                <StyledView className={'flex-row items-center m-auto'}>
                    {icon}
                    <AppText_Bold className={'text-sm text-white'}>{text}</AppText_Bold>
                </StyledView>
            </StyledView>
        </StyledButton>
    )
}

export default DateButton