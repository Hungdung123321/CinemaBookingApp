import React, { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view'
import { COLORS } from '../../constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SCREEN_NAMES } from '../../constants/screens';
import { About, Header, Sessions } from './components';
import { getCinema } from '../../services/firebase/Cinemas';
import { MovieKeys, MovieRoutes } from '../../constants/commons';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { styles } from './style';

const Movie = () => {

    const dataRoute = useRoute()
    const { Movie } = dataRoute.params
    const navigation = useNavigation()
    const [index, setIndex] = useState(0);
    const [date, setDate] = useState(new Date())
    const [openCalender, setOpenCalender] = useState(false)
    const [ListCinema, setListCinema] = useState([]);
    const [SelectCinema, setSelectCinema] = useState(null);
    const [routes] = useState(MovieRoutes);
    const layout = useWindowDimensions();

    useEffect(() => {
        async function createListCinema() {
            const arr = Movie.Cinemas
            const result = await Promise.all(
                arr.map(async (id) => {
                    const data = await getCinema(id)

                    return { ...data, id }
                }))
            setListCinema(result)
        }
        createListCinema()
    }, [])

    const goScreen = (jumpTo) => {
        if (SelectCinema) {
            navigation.navigate(SCREEN_NAMES.OVERREVIEW, {
                ...dataRoute.params,
                SelectedDate: date.toString(),
                Cinema: SelectCinema
            })

        } else {
            jumpTo?.(MovieKeys.SESSIONS)
        }
    }

    const goBack = () => navigation.goBack()

    const handleSelectCinema = (cinema, jumpTo) => {
        setSelectCinema(cinema)
        jumpTo?.(MovieKeys.ABOUT)
    }

    const onPressCalender = () => {
        setOpenCalender(pre => !pre)
    }

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case MovieKeys.ABOUT:
                return <About
                    data={Movie}
                    SelectSessionOnpress={goScreen}
                    jumpTo={jumpTo}
                    AboutButtonText={SelectCinema ? "Go to Seats" : "Select Session"}
                />
            case MovieKeys.SESSIONS:
                return <Sessions
                    ListCinema={ListCinema}
                    onPressSessionCard={handleSelectCinema}
                    jumpTo={jumpTo}
                    date={moment(date).format("MMM, DD")}
                    onPressCalender={onPressCalender}
                />
            default:
                return null
        }
    };

    const renderTabBar = props => (
        <TabBar
            activeColor={COLORS.Orange}
            inactiveColor={COLORS.Dark_Blue_Gray}
            indicatorStyle={styles.indicatorStyle}
            style={styles.TabbarStyle}
            {...props}
        />
    );

    return (
        <>
            <DatePicker
                modal
                mode={'date'}
                date={date}
                open={openCalender}
                onConfirm={(date) => {
                    setOpenCalender(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpenCalender(false)
                }}
            />
            <Header
                title={Movie?.MovieName}
                LeftIconOnPress={goBack}
                Subtitle={SelectCinema?.NameCinema || null}
            />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </>
    )
}

export default Movie