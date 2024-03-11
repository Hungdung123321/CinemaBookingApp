import React from 'react'
import { StyledView } from '../../../../components/ui/StyledComponents'
import { DeselectSeatForm, SelectSeatForm } from './components';
import Modal from "react-native-modal";

const SeatTypeModal = (props) => {

    const {
        isOpen,
        CurrentSeat,
        onBackdropPress,
        onPressSeatType,
        onPressDeselectSeat
    } = props

    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={onBackdropPress}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            style={{ margin: 0 }}
        >
            <StyledView className={'absolute bottom-0 left-0 right-0 h-18.5rem bg-Dark-Gunmetal rounded-lg pt-1rem px-1rem'}>
                {
                    !CurrentSeat?.isSelected ?
                        <SelectSeatForm
                            row={CurrentSeat?.row}
                            seat={CurrentSeat?.Label}
                            onPressSeatType={onPressSeatType}
                        /> :
                        <DeselectSeatForm
                            row={CurrentSeat?.row}
                            seat={CurrentSeat?.Label}
                            type={CurrentSeat?.type}
                            onPressDeselectSeat={onPressDeselectSeat}
                        />
                }
            </StyledView>
        </Modal>
    )
}

export default SeatTypeModal