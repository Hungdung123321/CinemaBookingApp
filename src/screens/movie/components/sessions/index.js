import React from 'react'
import { AppText_Bold, AppText_Medium, StyledView } from '../../../../components/ui/StyledComponents'
import { IC_Calendar, IC_Sort } from '../../../../assets'
import { ActivityIndicator, FlatList, Switch } from 'react-native'
import ControlButton from './components/ControlButton'
import SessionCard from './components/SessionCard'


const Sessions = (props) => {

    const { ListCinema, onPressSessionCard, jumpTo, onPressCalender, date } = props


    const renderItem = ({ item }) => {
        return <SessionCard onPress={() => onPressSessionCard(item, jumpTo)} NameCinema={item.NameCinema} Time={"15:40"} PmAndAm={"pm"} />
    }

    return (
        <StyledView className={'flex-1 bg-Dark-Gunmetal'}>
            <StyledView className={'w-full h-5rem flex-row items-center bg-Yankees-Blue'}>
                <ControlButton
                    icon={<IC_Calendar />}
                    text={date}
                    onPress={onPressCalender}
                />
                <ControlButton
                    icon={<IC_Sort />}
                    text={'Time'}
                />
                <StyledView className={'flex-1 m-auto items-center justify-center'}>
                    <Switch />
                    <AppText_Bold className={'text-sm text-white'}>By cinema</AppText_Bold>
                </StyledView>
            </StyledView>
            <StyledView className={'w-full h-2rem flex-row items-center bg-Space-Cadet'}>
                <StyledView className={'w-8rem'}>
                    <AppText_Medium className={'text-xs m-auto text-Dark-Blue-Gray'}>Time</AppText_Medium>
                </StyledView>
                <AppText_Medium className={'text-xs text-Dark-Blue-Gray ml-1rem mr-2rem'}>Adult</AppText_Medium>
                <AppText_Medium className={'text-xs text-Dark-Blue-Gray mr-2rem'}>Child</AppText_Medium>
                <AppText_Medium className={'text-xs text-Dark-Blue-Gray mr-2rem'}>Student</AppText_Medium>
                <AppText_Medium className={'text-xs text-Dark-Blue-Gray mr-2rem'}>VIP</AppText_Medium>
            </StyledView>
            <FlatList
                data={ListCinema}
                renderItem={renderItem}
                keyExtractor={item => item.NameCinema}
                ListEmptyComponent={() => <ActivityIndicator size="large" color="#00ff00" />}
            />
        </StyledView>
    )
}

export default Sessions