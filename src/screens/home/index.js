import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { AppText_Bold, StyledView } from '../../components/ui/StyledComponents'
import { APP_BUTTON_MODE } from '../../constants/commons'
import { IC_Search } from '../../assets'
import { FormatData } from '../../helper/converts'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_NAMES } from '../../constants/screens'
import { Homeheader, MovieCard, SearchModal, SearchMovieItem, SelectCityModal } from './components'
import { AppButton, LoginModal } from '../../components'
import { useStorage } from '../../services/MMKVStorage'
import { USER_NUMBER, USER_REGION } from '../../services/MMKVStorage/UserStorage'
import { validatePhoneNumber } from '../../helper/validate'
import { addAccount, checkAccount } from '../../services/firebase/Accounts'
import { getMovieList, getMovieListByName } from '../../services/firebase/Movies'
import { styles } from './style'

const Home = () => {

    const navigation = useNavigation()
    const [MovieList, setMovieList] = useState([]);
    const [SearchList, setSearchList] = useState([]);
    const [openLogin, setOpenLogin] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openSelectCity, setOpenSelectCity] = useState(false);
    const [UserNumber, setUserNumber] = useStorage(USER_NUMBER)
    const [UserRegion, setUserRegion] = useStorage(USER_REGION)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await getMovieList()
        setMovieList(data)
    }

    const goMovieScreen = (movie, id) => {
        if (UserNumber) {
            navigation.navigate(SCREEN_NAMES.MOVIE, { Movie: { ...movie, MovieId: id } })
        } else {
            setOpenLogin(pre => !pre)
        }
    }

    const goProfileScreen = () => {
        validatePhoneNumber(UserNumber?.PhoneNumber) ?
            navigation.navigate(SCREEN_NAMES.PROFILE) :
            setOpenLogin(pre => !pre);
    }

    const onPressLoginSms = async (text) => {
        const result = await checkAccount(text)
        if (!result) {
            const id = await addAccount(text)
            setUserNumber({ PhoneNumber: text, id: id });
        } else {
            setUserNumber({ PhoneNumber: text, id: result.id });
        }
        setOpenLogin(pre => !pre);
    }

    const renderItemMovie = ({ item }) => {
        if (item === null) return <StyledView className={'w-10rem h-14rem mx-1.5rem'} />
        return <MovieCard data={item.data} onPress={() => goMovieScreen(item.data, item.id)} ContanerStyle={'mx-1.5rem'} />
    }

    const renderItemSearchMovie = ({ item }) => {
        return <SearchMovieItem
            Name={item?.MovieName}
            url={item?.Url}
        />
    }

    const ItemSeparatorComponent = () => (<StyledView className={'h-1rem'} />)

    const keyExtractor = (item) => item?.id

    const onChangeText = async (text) => {
        const data = await getMovieListByName(text)
        if (text !== "") {
            setSearchList(data)
        } else {
            setSearchList([])
        }
    }

    const onPressCloseSearchModal = () => {
        setOpenSearch(pre => !pre)
        setSearchList([])
    }

    const onPressCloseLoginModal = () => {
        setOpenLogin(pre => !pre)
    }

    const onBackdropPressSearchModal = () => setOpenSearch(pre => !pre)

    const onBackdropPressLoginModal = () => setOpenLogin(pre => !pre)

    const onBackdropPressCityModal = () => setOpenSelectCity(pre => !pre)

    const onPressCountry = (item) => {
        setUserRegion(item.region)
        setOpenSelectCity(pre => !pre)
    }

    return (
        <StyledView className={'relative flex-1 bg-Dark-Gunmetal'}>
            <Homeheader
                isLogin={validatePhoneNumber(UserNumber?.PhoneNumber)}
                onPressLogin={goProfileScreen}
                onPressCity={onBackdropPressCityModal}
                location={UserRegion}
            />
            <StyledView className={'flex-row items-center justify-between px-1rem my-1rem'}>
                <AppText_Bold className={'font-bold text-white text-xl'}>Now in cinemas</AppText_Bold>
                <AppButton
                    className={'mt-2'}
                    LeftIcon={<IC_Search />}
                    Mode={APP_BUTTON_MODE.IC_ONLY}
                    onPress={() => setOpenSearch(pre => !pre)}
                />
            </StyledView>
            <StyledView className={'px-1rem pb-10rem'}>
                <FlatList
                    data={FormatData(MovieList)}
                    renderItem={renderItemMovie}
                    keyExtractor={keyExtractor}
                    numColumns={2}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    contentContainerStyle={styles.ListMovies}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <ActivityIndicator size="large" color="#00ff00" />}
                />
            </StyledView>
            <LoginModal
                isOpen={openLogin}
                onPressLoginSms={onPressLoginSms}
                onBackdropPress={onBackdropPressLoginModal}
                onPressCloseLoginModal={onPressCloseLoginModal}
            />
            <SearchModal
                data={SearchList}
                isOpen={openSearch}
                onChangeText={onChangeText}
                onBackdropPress={onBackdropPressSearchModal}
                onPressCloseSearchModal={onPressCloseSearchModal}
                renderItemSearchMovie={renderItemSearchMovie}
            />
            <SelectCityModal
                isOpen={openSelectCity}
                onBackdropPress={onBackdropPressCityModal}
                onPressCountry={onPressCountry}
            />
        </StyledView>
    )
}

export default Home