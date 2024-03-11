import React, { useEffect, useState } from 'react'
import { AppText_Medium, StyledView } from '../../components/ui/StyledComponents'
import { APP_BUTTON_MODE } from '../../constants/commons'
import { IC_Visa } from '../../assets'
import { AppButton, EmptyList } from '../../components'
import { MovieCard, PaymentCard, ProfileHeader } from './components'
import { useNavigation } from '@react-navigation/native'
import { useStorage } from '../../services/MMKVStorage'
import { USER_NUMBER } from '../../services/MMKVStorage/UserStorage'
import { SCREEN_NAMES } from '../../constants/screens'
import { FlatList } from 'react-native'
import { getBookingsByAccount } from '../../services/firebase/Accounts'
import moment from 'moment'

const Profile = () => {

    const navigation = useNavigation()
    const [ListBooking, setListBooking] = useState([])
    const [UserNumber, setUserNumber] = useStorage(USER_NUMBER)

    useEffect(() => {
        async function fetchData() {
            setListBooking(await getBookingsByAccount(UserNumber?.id))
        }
        fetchData()
    }, [])

    const goBack = () => navigation.goBack()

    const onPressMovieCard = (item) => {
        navigation.navigate(SCREEN_NAMES.TICKET, { ...item })
    }

    const renderItem = ({ item }) => {
        return <MovieCard
            MovieName={item?.Movie.MovieName}
            MovieDate={`${moment(item.SelectedDate).format("MMM DD")}, ${moment(item.SelectedTime).format("HH:mm")}`}
            MovieCinema={item?.Cinema.NameCinema}
            MovieUrl={item?.Movie.Url}
            onPress={() => onPressMovieCard(item)}
        />
    }

    const onPressLogout = () => {
        setUserNumber(null);
        navigation.navigate(SCREEN_NAMES.HOME)
    }

    return (
        <StyledView className={'flex-1 bg-Dark-Gunmetal'}>
            <ProfileHeader onPressBack={goBack} PhoneNumber={UserNumber?.PhoneNumber} onPressLogout={onPressLogout} />
            <StyledView className={'px-1rem pt-1rem'}>
                <AppText_Medium className={'text-base text-Dark-Blue-Gray mb-1rem'}>Saved cards</AppText_Medium>
                <PaymentCard Icon={<IC_Visa />} />
                <AppButton
                    style={{ borderColor: 'rgba(109, 158, 255, 0.1)' }}
                    Mode={APP_BUTTON_MODE.LIGHT}
                    Text={`Add new card`}
                    StyleButton={`w-full border bg-transparent mt-1rem`}
                />
            </StyledView>
            <StyledView className={'px-1rem mt-2rem'}>
                <AppText_Medium className={'text-base text-Dark-Blue-Gray mb-1rem'}>Payments history</AppText_Medium>
                <FlatList
                    data={ListBooking}
                    renderItem={renderItem}
                    key={item => item?.BookingNameCinema}
                    ListEmptyComponent={() => <EmptyList text={"You haven't bought tickets yet"} />}
                />
            </StyledView>
        </StyledView>
    )
}

export default Profile