import React, { useState } from 'react'
import { AppText_Regular, StyledTextInput } from '../../../ui/StyledComponents'
import { Styles } from '../../../../utils/style'
import { AppButton } from '../../..'
import { APP_BUTTON_MODE, AuthKeys } from '../../../../constants/commons'
import { validatePhoneNumber } from '../../../../helper/validate'

const LoginForm = (props) => {

    const { jumpTo, route, PhoneNumberInput } = props
    const [isValidate, setisValidate] = useState(null)

    const onPress = () => jumpTo?.(AuthKeys.SMS)

    const onEndEditing = (props) => {
        PhoneNumberInput?.(props.nativeEvent.text)
    }

    const onChangeText = (text) => {
        setisValidate(validatePhoneNumber(text))
    }


    return (
        <>
            <AppText_Regular className={'text-base text-Dark-Blue-Gray mx-auto mb-2rem'}>Access to purchased tickets</AppText_Regular>
            <StyledTextInput
                style={Styles.LinearBorder}
                className={'w-full h-3.5rem border rounded-lg px-1rem mb-1rem'}
                placeholder={'Phone number'}
                onEndEditing={onEndEditing}
                keyboardType='numeric'
                onChangeText={onChangeText}
            />
            {
                isValidate ?
                    <AppButton
                        Mode={APP_BUTTON_MODE.LIGHT}
                        Text={route?.title}
                        StyleButton={`w-full`}
                        onPress={onPress}
                    />
                    :
                    <AppButton
                        Mode={APP_BUTTON_MODE.DARK}
                        Text={route?.title}
                        StyleButton={`w-full`}
                        style={Styles.LinearBorder}
                        disabled={true}
                    />
            }

        </>
    )
}

export default LoginForm