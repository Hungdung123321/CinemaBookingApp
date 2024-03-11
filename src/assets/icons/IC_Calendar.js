import Svg, { Path } from "react-native-svg"
const IC_Calendar = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#637394"
            d="M21 7v-.75A3.254 3.254 0 0 0 17.75 3H6.25A3.254 3.254 0 0 0 3 6.25V7h18ZM3 8.5v9.25A3.254 3.254 0 0 0 6.25 21h11.5A3.254 3.254 0 0 0 21 17.75V8.5H3ZM7.75 18a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0-4.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM12 18a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0-4.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm4.25 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
        />
    </Svg>
)
export default IC_Calendar
