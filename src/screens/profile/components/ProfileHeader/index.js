import React from 'react'
import { AppText_Bold, StyledView } from '../../../../components/ui/StyledComponents'
import { AppButton } from '../../../../components'
import { IC_Logout, IC_back } from '../../../../assets'
import { APP_BUTTON_MODE } from '../../../../constants/commons'

const ProfileHeader = (props) => {

    const { onPressBack, PhoneNumber, onPressLogout } = props

    return (
        <StyledView className={'relative w-full h-5rem flex-row items-center bg-Yankees-Blue px-1rem'}>
            <AppButton
                Mode={APP_BUTTON_MODE.IC_ONLY}
                LeftIcon={<IC_back />}
                className={'absolute left-1.5rem'}
                onPress={onPressBack}
            />
            <AppText_Bold className={'text-lg text-white m-auto'}>{PhoneNumber}</AppText_Bold>
            <AppButton
                Mode={APP_BUTTON_MODE.IC_ONLY}
                LeftIcon={<IC_Logout />}
                className={'absolute right-1.5rem'}
                onPress={onPressLogout}
            />
        </StyledView>
    )
}

export default ProfileHeader