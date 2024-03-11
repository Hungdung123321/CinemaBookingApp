import React from 'react'
import Modal from "react-native-modal";
import { AppText_Medium, StyledButton, StyledTextInput, StyledView } from '../../../../components/ui/StyledComponents';
import { Styles } from '../../../../utils/style';
import { IC_Search } from '../../../../assets';
import { COLORS } from '../../../../constants/colors';
import { FlatList } from 'react-native';
import { Countrys } from '../../../../utils/dummyData';

const SelectCityModal = (props) => {

    const { isOpen, onBackdropPress, onPressCountry } = props

    const renderCountry = ({ item }) => {
        return <StyledButton onPress={() => onPressCountry(item)} style={Styles.LinearBorder} className={'w-full h-3rem border-b justify-center'}>
            <AppText_Medium className={'text-sm text-white'}>{item.region}</AppText_Medium>
        </StyledButton>
    }

    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={onBackdropPress}
            animationIn={'slideInDown'}
            animationOut={'slideOutDown'}
            avoidKeyboard={true}
            propagateSwipe={true}
            style={{ marginVertical: 32 }}
        >
            <StyledView className={'flex-1 bg-Dark-Gunmetal rounded-lg p-1rem'}>
                <StyledView style={Styles.LinearBorder} className={'flex-row items-center h-3.5rem px-0.5rem rounded-lg border mb-1rem'}>
                    <IC_Search />
                    <StyledTextInput
                        className={'flex-1'}
                        placeholder={'Search'}
                        placeholderTextColor={COLORS.Dark_Blue_Gray}
                    />
                </StyledView>
                <FlatList
                    data={Countrys}
                    renderItem={renderCountry}
                    keyExtractor={item => item.guid}
                />
            </StyledView>
        </Modal>
    )
}

export default SelectCityModal