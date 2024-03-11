import { APP_BUTTON_MODE } from "../../constants/commons";
import { AppText_Regular, StyledButton } from "../ui/StyledComponents";


const AppButton = (props) => {

    const {
        LeftIcon = null,
        Mode,
        Text,
        StyleButton,
        ...restButton
    } = props;

    switch (Mode) {
        case APP_BUTTON_MODE.LIGHT:
            return <StyledButton {...restButton} className={`w-5rem h-3rem flex-row px-3 items-center ${LeftIcon ? 'w-8rem justify-center' : 'justify-center'} bg-Orange rounded-lg ${StyleButton}`} hitSlop={2}>
                {LeftIcon}
                <AppText_Regular className={"text-sm text-white"}>{Text}</AppText_Regular>
            </StyledButton>
        case APP_BUTTON_MODE.DARK:
            return <StyledButton {...restButton} className={`w-5rem h-3rem px-3 flex-row items-center ${LeftIcon ? 'w-8rem justify-between' : 'justify-center'} bg-transparent rounded-lg border border-Cornflower-Blue ${StyleButton}`} hitSlop={2}>
                {LeftIcon}
                <AppText_Regular className={"text-sm text-white"}>{Text}</AppText_Regular>
            </StyledButton>
        case APP_BUTTON_MODE.TRANSPARENT:
            return <StyledButton {...restButton} className={`w-5rem h-3rem px-3 flex-row items-center ${LeftIcon ? 'w-8rem' : 'justify-center'}`} hitSlop={2}>
                {LeftIcon}
                <AppText_Regular className={"text-sm text-white"}>{Text}</AppText_Regular>
            </StyledButton>
        case APP_BUTTON_MODE.IC_ONLY:
            return <StyledButton {...restButton} hitSlop={2}>
                {LeftIcon}
            </StyledButton>
    }

}

export default AppButton