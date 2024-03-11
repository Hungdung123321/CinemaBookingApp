import React, { useEffect, useState } from 'react'
import { StyledScrollView, StyledView } from '../../components/ui/StyledComponents'
import { IMG_Screen, IMG_Screen_Large } from '../../assets'
import { APP_BUTTON_MODE, SEATS_COLLUM, SEAT_STATUS } from '../../constants/commons'
import { ActivityIndicator, FlatList } from 'react-native'
import { Seats_Small } from '../../utils/dummyData'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useStore } from '../../services/zustand'
import { SCREEN_NAMES } from '../../constants/screens'
import { AppButton } from '../../components'
import { OverReviewHeader, SeatButton, SymbolSeats } from './Components'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import SeatTypeModal from './Components/SeatTypeModal'
import { getBookingsByCinemaIdAndMovieID } from '../../services/firebase/Accounts'

const OverReview = () => {

    const dataRoute = useRoute()
    const {
        Movie,
        SelectedDate,
        Cinema
    } = dataRoute.params
    const navigation = useNavigation()
    const [isZoom, setIsZoom] = useState(false)
    const [CurrentDate, setCurrentDate] = useState(new Date(SelectedDate))
    const [Currenttime, setCurrentTime] = useState(new Date())
    const [CurrentSeat, setCurrentSeat] = useState(null)
    const [openCalender, setOpenCalender] = useState(false)
    const [openSeatType, setopenSeatType] = useState(false)
    const [openTime, setOpenTime] = useState(false)
    const { Seats, updateSeat, CheckSelectedSeats, removeSeat, InitSeats, ClearSeats, currentSeatCount } = useStore()
    const SelectedSeats = Seats.filter(item => item.isSelected === true)
    const TotalPrice = SelectedSeats.reduce((acc, e) => {
        if (!e.isOccupied) {
            return acc + e.type.price
        } else {
            return acc + 0
        }
    }, 0)

    useEffect(() => {
        InitSeats(50, SEATS_COLLUM)
        async function test() {
            const listSelectedSeats = await getBookingsByCinemaIdAndMovieID(Cinema.id, Movie.MovieId)
            if (listSelectedSeats.length !== 0) {
                CheckSelectedSeats(listSelectedSeats)
            }
        }
        test()
        return () => {
            ClearSeats()
        }
    }, []);

    const LeftIconOnpress = () => {
        navigation.goBack()
    }

    const SelectTicketOnPress = () => {

        navigation.navigate(SCREEN_NAMES.PAY, {
            ...dataRoute.params,
            TotalPrice,
            SelectedSeats,
            SelectedDate: CurrentDate.toISOString(),
            SelectedTime: Currenttime.toISOString(),
        })
    }

    const renderSeatSmall = () => {
        return <StyledView className={'w-1rem h-1rem m-0.125rem bg-Space-Cadet rounded-full'} />
    }

    const renderSeatNomal = ({ item }) => {
        return <SeatButton
            ClassSeatName={'m-0.125rem'}
            text={item.Label}
            Status={!item.isOccupied ? SEAT_STATUS.ALVAILBLE : SEAT_STATUS.OCCUPIED}
            isActive={item.isSelected}
            onPressSeat={() => {
                setCurrentSeat(item)
                setopenSeatType(pre => !pre)
            }}
        />
    }

    const onPressSeatType = (type) => {
        updateSeat(CurrentSeat, type)
        setopenSeatType(pre => !pre)
    }

    const onPressDeselectSeat = () => {
        removeSeat(CurrentSeat);
        setopenSeatType(pre => !pre)
    }

    const RightIconOnpress = () => {
        setIsZoom(pre => !pre)
    }

    const onPressDateButton = () => {
        setOpenCalender(pre => !pre)
    }

    const onPressTimeButton = () => {
        setOpenTime(pre => !pre)
    }

    const onDatePickerConfirm = (date) => {
        setOpenCalender(false)
        setCurrentDate(date)
    }

    const onDatePickerCancel = () => {
        setOpenCalender(false)
    }

    const onTimePickerConfirm = (date) => {
        setOpenTime(false)
        setCurrentTime(date)
    }

    const onTimePickerCancel = () => {
        setOpenTime(false)
    }

    const onBackdropPressSeatTypeModal = () => {
        setopenSeatType(pre => !pre)
    }

    return (
        <StyledView className={'relative flex-1 bg-Dark-Gunmetal'}>
            <SeatTypeModal
                isOpen={openSeatType}
                CurrentSeat={CurrentSeat}
                onPressSeatType={onPressSeatType}
                onPressDeselectSeat={onPressDeselectSeat}
                onBackdropPress={onBackdropPressSeatTypeModal}
            />
            <DatePicker
                modal
                mode={'date'}
                date={CurrentDate}
                open={openCalender}
                onConfirm={onDatePickerConfirm}
                onCancel={onDatePickerCancel}
            />
            <DatePicker
                modal
                mode={'time'}
                date={Currenttime}
                open={openTime}
                onConfirm={onTimePickerConfirm}
                onCancel={onTimePickerCancel}
            />
            <OverReviewHeader MovieName={Movie?.MovieName}
                date={moment(CurrentDate).format("MMM, DD")}
                time={moment(Currenttime).format("HH:mm")}
                CinemaName={Cinema?.NameCinema}
                RightIconOnpress={RightIconOnpress}
                LeftIconOnpress={LeftIconOnpress}
                onPressDateButton={onPressDateButton}
                onPressTimeButton={onPressTimeButton}
            />
            <SymbolSeats />
            <StyledView className={`mx-auto ${isZoom ? 'mt-5rem' : 'my-auto'} items-center px-2rem`}>
                {
                    isZoom ?
                        <StyledScrollView horizontal={true} className={'mt-0.5rem'}>
                            <StyledView className={'items-center'}>
                                <IMG_Screen_Large />
                                <FlatList
                                    data={Seats}
                                    renderItem={renderSeatNomal}
                                    keyExtractor={item => item.id}
                                    numColumns={SEATS_COLLUM}
                                    scrollEnabled={false}
                                    ListEmptyComponent={() => <ActivityIndicator size="large" color="#00ff00" />}
                                />
                            </StyledView>
                        </StyledScrollView>
                        :
                        <>
                            <IMG_Screen />
                            <FlatList
                                data={Seats_Small}
                                renderItem={renderSeatSmall}
                                keyExtractor={item => item.id}
                                numColumns={15}
                            />
                        </>
                }
            </StyledView>
            <StyledView className={`absolute left-0 right-0 bottom-2rem px-2rem ${currentSeatCount === 0 ? 'opacity-0' : 'opacity-100'}`}>
                <AppButton
                    Mode={APP_BUTTON_MODE.LIGHT}
                    Text={`Buy ${currentSeatCount} tickets ${TotalPrice}`}
                    StyleButton={`w-full`}
                    onPress={SelectTicketOnPress}
                />
            </StyledView>
        </StyledView>
    )
}

export default OverReview