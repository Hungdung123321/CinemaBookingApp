import React from 'react'
import Modal from "react-native-modal";
import { AuthForm } from '..';

const LoginModal = (props) => {

    const {
        isOpen,
        onBackdropPress,
        onPressCloseLoginModal,
        onPressLoginSms
    } = props

    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={onBackdropPress}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            avoidKeyboard={true}
            propagateSwipe={true}
            style={{ margin: 0 }}
        >
            <AuthForm
                onClosePress={onPressCloseLoginModal}
                onPressLoginSms={onPressLoginSms}
            />
        </Modal>
    )
}

export default LoginModal