import React from 'react'
import { AppText_Bold, AppText_Medium, StyledScrollView, StyledTextInput, StyledView } from '../../components/ui/StyledComponents'
import { useNavigation, useRoute } from '@react-navigation/native'
import { APP_BUTTON_MODE, LIST_SEAT_TYPE } from '../../constants/commons'
import { SCREEN_NAMES } from '../../constants/screens'
import { AppButton, DescriptionItem, TearLine } from '../../components'
import { Styles } from '../../utils/style'
import { useStore } from '../../services/zustand'
import { EMPTY_STRING } from '../../constants/strings'
import { MMKV } from '../../services/MMKVStorage'
import { USER_NUMBER } from '../../services/MMKVStorage/UserStorage'
import { addFilmAccount } from '../../services/firebase/Accounts'
import PayHeader from './components/PayHeader'
import moment from 'moment'

const Pay = () => {

    const dataRoute = useRoute()
    const navigation = useNavigation()
    const MMKV_User = MMKV.getMap(USER_NUMBER)
    const { currentSeatCount } = useStore()
    const {
        Movie,
        SelectedDate,
        Cinema,
        SelectedSeats,
        SelectedTime,
        TotalPrice
    } = dataRoute.params

    const goBack = () => navigation.goBack()

    const goScreen = async () => {
        await addFilmAccount(MMKV_User.id, dataRoute.params)
        navigation.navigate(SCREEN_NAMES.TICKET, { ...dataRoute.params })
    }

    const renderSelectedSeats = () => {
        return SelectedSeats.map(e => {
            if (e.isOccupied === false) {
                return <AppText_Medium key={e.id} className={`text-sm text-white`}>{`Row ${e.row} Seat ${e.Label}`}</AppText_Medium>
            }
        })
    }

    const renderSelectedSeatsPrice = () => {

        return LIST_SEAT_TYPE.map((type) => {
            const counttype = SelectedSeats.filter(e => e.type.name === type.name && e.isOccupied === false).length
            if (counttype === 0) {
                return null
            }
            return <DescriptionItem
                key={type.name}
                container={'mb-0.5rem'}
                title={`${counttype} x ${type.name}`}
                description={`${counttype * type.price}`}
            />
        })
    }

    return (
        <StyledScrollView scrollEnabled={false} className={'flex-1 bg-Dark-Gunmetal'}>
            <PayHeader LeftIconOnPress={goBack} />
            <StyledView className={'w-full bg-Yankees-Blue px-1rem'}>
                <AppText_Bold className={'text-lg font-bold text-white mb-1rem'}>{Movie?.MovieName}</AppText_Bold>
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={'Cinema'}
                    description={Cinema?.NameCinema || EMPTY_STRING}
                />
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={''}
                    descriptionStyle={'text-Dark-Blue-Gray w-15rem'}
                    description={Cinema?.adresse || EMPTY_STRING}
                />
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={'Date'}
                    description={`${moment(SelectedDate).format("MMM, DD")}, ${moment(SelectedTime).format("HH:mm")}`}
                />
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={'Seats'}
                >
                    {renderSelectedSeats(SelectedSeats)}
                </DescriptionItem>
                <StyledView style={Styles.LinearBorder} className={'border-t pt-1rem'}>
                    {renderSelectedSeatsPrice(SelectedSeats)}
                    <DescriptionItem
                        container={'my-0.5rem'}
                        title={`${currentSeatCount} total`}
                        description={TotalPrice + `₸ (paid)` || EMPTY_STRING}
                    />
                </StyledView>
            </StyledView>
            <TearLine />
            <StyledView className={'bg-Yankees-Blue px-1rem py-2rem rounded-b-3xl'}>
                <StyledTextInput
                    style={Styles.LinearBorder}
                    className={'w-full h-3.5rem border rounded-lg px-1rem mb-1rem'}
                    placeholder={'Phone number'}
                    value={MMKV_User.PhoneNumber}
                />
                <AppButton
                    Mode={APP_BUTTON_MODE.LIGHT}
                    Text={`Pay`}
                    StyleButton={`w-full`}
                    onPress={goScreen}
                />
            </StyledView>
        </StyledScrollView>
    )
}

export default Pay