import React from 'react'
import { AppText_Bold, StyledButton, StyledView } from '../../../../../../components/ui/StyledComponents'

const ControlButton = (props) => {

    const { icon, text, ...restBtn } = props

    return (
        <StyledButton {...restBtn} className={'flex-1'}>
            <StyledView className={'m-auto items-center justify-center'}>
                {icon}
                <AppText_Bold className={'text-sm text-white'}>{text}</AppText_Bold>
            </StyledView>
        </StyledButton>
    )
}

export default ControlButton