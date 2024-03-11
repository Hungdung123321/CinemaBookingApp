import React from 'react'
import { AppText_Medium, AppText_Regular, StyledView } from '../../../../components/ui/StyledComponents'


const PaymentCard = (props) => {

    const { Icon } = props

    return (
        <StyledView className={'w-full h-3.5rem flex-row items-center rounded-lg bg-Yankees-Blue px-1rem'}>
            {Icon}
            <AppText_Medium className={'text-sm text-white ml-1rem'}>4716 •••• •••• 5615</AppText_Medium>
            <AppText_Regular className={'text-sm text-Dark-Blue-Gray ml-7rem'}>06/24</AppText_Regular>
        </StyledView>
    )
}

export default PaymentCard