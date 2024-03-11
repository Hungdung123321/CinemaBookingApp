import React from 'react'
import { StyledView } from '../../../../components/ui/StyledComponents'
import { FlatList } from 'react-native';
import Modal from "react-native-modal";
import SearchHeader from './components/SearchHeader'
import { EmptyList } from '../../../../components';

const SearchModal = (props) => {

    const {
        isOpen,
        data,
        onBackdropPress,
        onPressCloseSearchModal,
        onChangeText,
        renderItemSearchMovie
    } = props

    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={onBackdropPress}
            animationIn={'zoomInUp'}
            animationOut={'zoomOut'}
            avoidKeyboard={true}
            propagateSwipe={true}
            style={{ margin: 0 }}
        >
            <StyledView className={'flex-1 bg-Dark-Gunmetal rounded-lg z-0'}>
                <SearchHeader
                    isOpen={isOpen}
                    onChangeText={onChangeText}
                    onPressCloseModal={onPressCloseSearchModal}
                />
                <StyledView className={'px-1rem'}>
                    <FlatList
                        data={data}
                        renderItem={renderItemSearchMovie}
                        keyExtractor={item => item.MovieName}
                        ListEmptyComponent={() => <EmptyList text={"Your Searching is not found"} />}
                    />
                </StyledView>
            </StyledView>
        </Modal>
    )
}

export default SearchModal