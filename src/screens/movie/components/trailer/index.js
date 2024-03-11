import React from 'react'
import { StyledImage, StyledView } from '../../../../components/ui/StyledComponents'
import { AppButton } from '../../../../components'
import { IC_Play } from '../../../../assets'
import { APP_BUTTON_MODE } from '../../../../constants/commons'

const Trailer = (props) => {
    const { Url } = props
    return (
        <StyledView className={'relative'}>
            <StyledImage
                source={{ uri: Url }}
                className={'w-full h-10rem'}
            />
            <StyledView className={'absolute inset-x-0 inset-y-0 bg-black opacity-70'} >
                <AppButton
                    Mode={APP_BUTTON_MODE.IC_ONLY}
                    className={'m-auto bg-white rounded-full p-1rem opacity-70'}
                    LeftIcon={<IC_Play />}
                />
            </StyledView>
        </StyledView>
    )
}

export default Trailer