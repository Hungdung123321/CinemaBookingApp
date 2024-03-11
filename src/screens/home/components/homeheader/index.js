import React from 'react'
import { StyledView } from '../../../../components/ui/StyledComponents'
import { APP_BUTTON_MODE } from '../../../../constants/commons'
import { IC_language, IC_location } from '../../../../assets'
import { AppButton } from '../../../../components'
import AppLogo from '../../../../assets/AppLogo'

const HomeHeader = (props) => {

    const {
        onPressLogin,
        isLogin = false,
        onPressLanguage,
        onPressCity,
        location = null
    } = props

    return (
        <StyledView className={'w-full h-5.375rem flex-row items-center justify-between bg-Yankees-Blue'}>
            <AppLogo />
            <StyledView className={'w-full h-full flex-row items-center'}>
                <AppButton
                    Mode={APP_BUTTON_MODE.TRANSPARENT}
                    LeftIcon={<IC_location />}
                    Text={location || "Nur-Sultan"}
                    onPress={onPressCity}
                />
                <AppButton
                    Mode={APP_BUTTON_MODE.TRANSPARENT}
                    LeftIcon={<IC_language />}
                    Text={'Nur-Sultan'}
                    onPress={onPressLanguage}
                />
                <AppButton
                    Mode={APP_BUTTON_MODE.LIGHT}
                    Text={isLogin ? "Profile" : "Login"}
                    onPress={onPressLogin}
                />
            </StyledView>
        </StyledView>
    )
}

export default HomeHeader