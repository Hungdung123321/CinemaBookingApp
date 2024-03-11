import React from 'react'
import { AppText_Medium, AppText_light, StyledView } from '../ui/StyledComponents'

const DescriptionItem = (props) => {

    const { title, titleStyle, description, descriptionStyle, container, children, ...restItem } = props

    return (
        <StyledView className={`w-full flex-row items-start ${container}`} {...restItem}>
            <AppText_light className={`w-5rem text-sm text-Dark-Blue-Gray ${titleStyle}`}>{title}</AppText_light>
            {
                !children ?
                    <AppText_Medium className={`text-sm text-white ${descriptionStyle}`}>{description}</AppText_Medium> :
                    <StyledView>{children}</StyledView>
            }

        </StyledView>
    )
}

export default DescriptionItem