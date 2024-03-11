import React from 'react'
import { AppText_Bold, StyledView } from '../../../../components/ui/StyledComponents'
import { AppButton } from '../../../../components'
import { APP_BUTTON_MODE } from '../../../../constants/commons'
import { IC_Close } from '../../../../assets'

const TicketHeader = (props) => {

    const { onLeftIcon } = props

    return (
        <StyledView className={'relative flex-row h-4rem bg-Yankees-Blue items-center px-1rem'}>
            <AppText_Bold className={'text-lg font-bold text-white m-auto'}>Your ticket</AppText_Bold>
            <AppButton
                Mode={APP_BUTTON_MODE.IC_ONLY}
                LeftIcon={<IC_Close />}
                className={'absolute right-1.5rem'}
                onPress={onLeftIcon}
            />
        </StyledView>
    )
}

export default TicketHeader