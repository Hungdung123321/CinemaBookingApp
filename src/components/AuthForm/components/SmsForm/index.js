import React from 'react'
import { AppText_Regular, StyledTextInput, StyledView } from '../../../ui/StyledComponents'
import { Styles } from '../../../../utils/style'
import { AppButton } from '../../..'
import { APP_BUTTON_MODE, AuthKeys } from '../../../../constants/commons'

const SmsForm = (props) => {

    const { jumpTo, route, onPressLogin } = props

    const onPress = () => {
        onPressLogin?.()
    }

    return (
        <>
            <AppText_Regular className={'text-base text-Dark-Blue-Gray mx-auto mb-2rem'}>Enter the password from the SMS</AppText_Regular>
            <StyledView className={'flex-row items-center justify-between mb-1rem'}>
                <StyledTextInput
                    style={Styles.LinearBorder}
                    className={'w-5rem h-3.5rem border rounded-lg pl-2rem text-xl'}
                />
                <StyledTextInput
                    style={Styles.LinearBorder}
                    className={'w-5rem h-3.5rem border rounded-lg pl-2rem text-xl'}
                />
                <StyledTextInput
                    style={Styles.LinearBorder}
                    className={'w-5rem h-3.5rem border rounded-lg pl-2rem text-xl'}
                />
                <StyledTextInput
                    style={Styles.LinearBorder}
                    className={'w-5rem h-3.5rem border rounded-lg pl-2rem text-xl'}
                />
            </StyledView>
            <AppButton
                Mode={APP_BUTTON_MODE.LIGHT}
                Text={route?.title}
                StyleButton={`w-full`}
                onPress={onPress}
            />
        </>
    )
}

export default SmsForm