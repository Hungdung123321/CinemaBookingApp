import React from 'react'
import { AppText_Bold, StyledView } from '../../../../components/ui/StyledComponents'
import { AppButton } from '../../../../components'
import { IC_back } from '../../../../assets'
import { APP_BUTTON_MODE } from '../../../../constants/commons'

const PayHeader = (props) => {

    const { LeftIconOnPress } = props

    return (
        <StyledView className={'relative w-full h-5rem flex-row items-center bg-Yankees-Blue px-1rem'}>
            <AppButton
                Mode={APP_BUTTON_MODE.IC_ONLY}
                LeftIcon={<IC_back />}
                className={'absolute left-1.5rem'}
                onPress={LeftIconOnPress}
            />
            <AppText_Bold className={'text-lg font-bold text-white m-auto'}>Pay for tickets</AppText_Bold>
        </StyledView>
    )
}

export default PayHeader