import Svg, { Path } from "react-native-svg"
const IC_Clock = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#637394"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm3.75 11.5h-4c-.4 0-.75-.35-.75-.75v-6c0-.4.35-.75.75-.75s.75.35.75.75V12h3.25c.4 0 .75.35.75.75s-.35.75-.75.75Z"
        />
    </Svg>
)
export default IC_Clock
