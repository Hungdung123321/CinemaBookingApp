import React from 'react'
import { AppText_Bold, AppText_Medium, AppText_Regular, StyledButton, StyledView } from '../../../../../../components/ui/StyledComponents'
import { Styles } from '../../../../../../utils/style'

const SessionCard = (props) => {

    const { NameCinema, Time, PmAndAm, ...restBtn } = props

    return (
        <StyledButton {...restBtn} style={Styles.LinearBorder} className={'w-full h-5rem py-1rem flex-row border-b border-Dark-Blue-Gray'}>
            <StyledView className={'w-8rem h-full justify-center items-center'}>
                <AppText_Bold className={'text-lg text-white'}>{Time}</AppText_Bold>
                <AppText_Medium className={'text-xs text-Dark-Blue-Gray'}>{PmAndAm}</AppText_Medium>
            </StyledView>
            <StyledView style={Styles.LinearBorder} className={'w-full h-full pl-1rem border-l border-Dark-Blue-Gray'}>
                <AppText_Bold className={'text-sm text-white'}>{NameCinema}</AppText_Bold>
                <StyledView className={'flex-row items-center'}>
                    <AppText_Regular className={'text-sm text-white mr-1rem'}>2200 ₸</AppText_Regular>
                    <AppText_Regular className={'text-sm text-white mr-1rem'}>2200 ₸</AppText_Regular>
                    <AppText_Regular className={'text-sm text-white mr-1rem'}>2200 ₸</AppText_Regular>
                    <AppText_Regular className={'text-sm text-white mr-1rem'}>2200 ₸</AppText_Regular>
                </StyledView>
            </StyledView>
        </StyledButton>
    )
}

export default SessionCard