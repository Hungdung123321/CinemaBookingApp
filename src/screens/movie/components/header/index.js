import React from 'react'
import { AppText_Bold, AppText_Regular, StyledView } from '../../../../components/ui/StyledComponents'
import { IC_back } from '../../../../assets'
import { AppButton } from '../../../../components'
import { APP_BUTTON_MODE } from '../../../../constants/commons'

const Header = (props) => {

    const { LeftIconOnPress, title, Subtitle } = props

    return (
        <StyledView className={'relative w-full h-5rem flex-row items-center bg-Yankees-Blue'}>
            <AppButton
                Mode={APP_BUTTON_MODE.IC_ONLY}
                LeftIcon={<IC_back />}
                className={'absolute left-1.5rem'}
                onPress={LeftIconOnPress}
            />
            <StyledView className={'mx-auto'}>
                <AppText_Bold className={'w-12rem text-center text-lg font-bold text-white m-auto'}>{title}</AppText_Bold>
                {
                    Subtitle ?
                        <AppText_Regular className={'text-sm text-Dark-Blue-Gray text-center'}>{Subtitle}</AppText_Regular>
                        : <StyledView />
                }
            </StyledView>
        </StyledView>
    )
}

export default Header