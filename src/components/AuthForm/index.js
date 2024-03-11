import React, { useState } from 'react'
import { AppText_Bold, StyledScrollView } from '../ui/StyledComponents'
import { AppButton } from '..'
import { APP_BUTTON_MODE, AuthKeys, AuthRoutes } from '../../constants/commons'
import { IC_Close } from '../../assets'
import { TabView } from 'react-native-tab-view'
import { styles } from './style'
import { LoginForm, SmsForm } from './components'

const AuthForm = (props) => {

    const { onClosePress, onPressLoginSms } = props
    const [index, setIndex] = useState(0);
    const [routes] = useState(AuthRoutes);
    const [UserNumber, setUserNumber] = useState("")

    const PhoneNumberInput = (text) => {
        setUserNumber(text)
    }

    const onPressLogin = () => {
        onPressLoginSms?.(UserNumber)
    }

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case AuthKeys.LOGIN:
                return <LoginForm jumpTo={jumpTo} route={route} PhoneNumberInput={PhoneNumberInput} />
            case AuthKeys.SMS:
                return <SmsForm jumpTo={jumpTo} route={route} onPressLogin={onPressLogin} />
            default:
                return null;
        }
    };

    return (
        <StyledScrollView className={'bg-Yankees-Blue absolute bottom-0 left-0 right-0 px-2rem py-1.5rem rounded-t-3xl'}>
            <AppButton
                className={'self-end'}
                LeftIcon={<IC_Close />}
                Mode={APP_BUTTON_MODE.IC_ONLY}
                onPress={onClosePress}
            />
            <AppText_Bold className={'text-2xl text-white mx-auto'}>Login</AppText_Bold>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={() => null}
                style={styles.TabViewContaner}
                swipeEnabled={false}
            />
        </StyledScrollView>
    )
}

export default AuthForm