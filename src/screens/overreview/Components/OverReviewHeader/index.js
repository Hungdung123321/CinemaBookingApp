import React from 'react'
import { AppText_Bold, AppText_Regular, StyledView } from '../../../../components/ui/StyledComponents'
import { IC_Calendar, IC_Clock, IC_Enlarge, IC_back } from '../../../../assets'
import { APP_BUTTON_MODE } from '../../../../constants/commons'
import { AppButton } from '../../../../components'
import DateButton from '../DateButton'


const OverReviewHeader = (props) => {

  const {
    LeftIconOnpress,
    RightIconOnpress,
    MovieName,
    CinemaName,
    onPressDateButton,
    onPressTimeButton,
    date,
    time,
  } = props

  return (
    <>
      <StyledView className={'relative w-full h-5rem flex-row items-center bg-Yankees-Blue px-1rem'}>
        <AppButton
          Mode={APP_BUTTON_MODE.IC_ONLY}
          LeftIcon={<IC_back />}
          className={'absolute left-1.5rem'}
          onPress={LeftIconOnpress}
        />
        <StyledView className={'m-auto'}>
          <AppText_Bold className={'text-lg font-bold text-white text-center'}>{CinemaName}</AppText_Bold>
          <AppText_Regular className={'text-sm text-Dark-Blue-Gray text-center'}>{MovieName}</AppText_Regular>
        </StyledView>
        <AppButton
          Mode={APP_BUTTON_MODE.IC_ONLY}
          LeftIcon={<IC_Enlarge />}
          className={'absolute right-1.5rem'}
          onPress={RightIconOnpress}
        />
      </StyledView>
      <StyledView className={'w-full h-4rem flex-row justify-around items-center bg-Yankees-Blue'}>
        <DateButton
          icon={<IC_Calendar />}
          text={date}
          onPress={onPressDateButton}
        />
        <DateButton
          icon={<IC_Clock />}
          text={time}
          onPress={onPressTimeButton}
        />
      </StyledView>
    </>
  )
}

export default OverReviewHeader