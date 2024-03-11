import React, { useEffect, useRef } from 'react'
import { StyledTextInput, StyledView } from '../../../../../../components/ui/StyledComponents'
import { IC_Close, IC_Search } from '../../../../../../assets'
import { AppButton } from '../../../../../../components'
import { Styles } from '../../../../../../utils/style'
import { COLORS } from '../../../../../../constants/colors'
import { APP_BUTTON_MODE } from '../../../../../../constants/commons'

const SearchHeader = (props) => {

    const { onPressCloseModal, onChangeText, isOpen } = props
    const inputRef = useRef(null)

    useEffect(() => {
        isOpen ? setTimeout(() => {
            inputRef.current?.focus()
        }, 300) : null
    }, [])

    return (
        <StyledView className={'flex-row items-end justify-between px-1rem mb-2rem'}>
            <IC_Search />
            <StyledTextInput
                ref={inputRef}
                className={'w-4/5 h-3rem border-b pb-0.0625rem'}
                placeholder={"Search Movie"}
                onChangeText={onChangeText}
                style={Styles.LinearBorder}
                selectionColor={COLORS.Dark_Blue_Gray}
                placeholderTextColor={COLORS.Dark_Blue_Gray}
            />
            <AppButton
                LeftIcon={<IC_Close />}
                Mode={APP_BUTTON_MODE.IC_ONLY}
                onPress={onPressCloseModal}
            />
        </StyledView>
    )
}

export default SearchHeader