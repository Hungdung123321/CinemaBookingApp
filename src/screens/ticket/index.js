import React from 'react'
import { AppText_Medium, AppText_Regular, StyledImage, StyledView } from '../../components/ui/StyledComponents'
import { IC_Share } from '../../assets'
import { APP_BUTTON_MODE } from '../../constants/commons'
import { AppButton, DescriptionItem, TearLine } from '../../components'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SCREEN_NAMES } from '../../constants/screens'
import { EMPTY_STRING } from '../../constants/strings'
import { removeFilmAccount } from '../../services/firebase/Accounts'
import { MMKV } from '../../services/MMKVStorage'
import { USER_NUMBER } from '../../services/MMKVStorage/UserStorage'
import { TicketHeader } from './components'
import moment from 'moment'
import { Styles } from '../../utils/style'

const Ticket = () => {

    const dataRoute = useRoute()
    const navigation = useNavigation()
    const MMKV_User_id = MMKV.getMap(USER_NUMBER).id
    const {
        Movie,
        SelectedDate,
        Cinema,
        SelectedSeats,
        SelectedTime,
        TotalPrice
    } = dataRoute.params

    const goScreen = () => {
        navigation.navigate(SCREEN_NAMES.HOME)
    }

    const renderSelectedSeats = () => {
        return SelectedSeats.map(e => {
            if (e.isOccupied === false) {
                return <AppText_Medium key={e.id} className={`text-sm text-white`}>{`Row ${e.row} Seat ${e.Label}`}</AppText_Medium>
            }
        })
    }

    const onPressRefund = async () => {
        await removeFilmAccount(MMKV_User_id, dataRoute.params)
        goScreen()
    }

    return (
        <StyledView className={'flex-1 bg-Dark-Gunmetal'}>
            <TicketHeader onLeftIcon={goScreen} />
            <StyledView className={'bg-Yankees-Blue pt-2rem'}>
                <StyledImage
                    className={'w-15rem h-15rem rounded-lg mx-auto'}
                    source={{ uri: 'https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg' }}
                />
                <AppText_Regular className={'text-sm text-Dark-Blue-Gray mx-auto mt-1rem'}>Show this code to the gatekeeper at the cinema</AppText_Regular>
            </StyledView>
            <TearLine />
            <StyledView className={'bg-Yankees-Blue p-1rem'}>
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={'Cinema'}
                    description={Cinema.NameCinema || EMPTY_STRING}
                />
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={''}
                    descriptionStyle={'text-Dark-Blue-Gray'}
                    description={Movie.MovieName || EMPTY_STRING}
                />
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={'Date'}
                    description={`${moment(SelectedDate).format("MMM DD")}, ${moment(SelectedTime).format("HH:mm")}` || EMPTY_STRING}
                />
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={'Seats'}
                >
                    {renderSelectedSeats()}
                </DescriptionItem>
                <DescriptionItem
                    container={'mb-0.5rem'}
                    title={'Cost'}
                    description={TotalPrice + `₸ (paid)` || EMPTY_STRING}
                />
            </StyledView>
            <StyledView className={'flex-row justify-between items-center bg-Yankees-Blue px-1rem pb-1rem rounded-b-3xl'}>
                <AppButton
                    style={Styles.LinearBorder}
                    Mode={APP_BUTTON_MODE.LIGHT}
                    Text={`Refund`}
                    StyleButton={`w-10rem h-3.5rem border bg-transparent`}
                    onPress={onPressRefund}
                />
                <AppButton
                    Mode={APP_BUTTON_MODE.LIGHT}
                    Text={`Send`}
                    StyleButton={`w-10rem h-3.5rem`}
                    LeftIcon={<IC_Share />}
                />
            </StyledView>
        </StyledView>
    )
}

export default Ticket