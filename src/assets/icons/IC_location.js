import Svg, { Path } from "react-native-svg"

const IC_location = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#637394"
            d="M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 2.018.724 3.976 2.046 5.524.151.171 3.714 4.22 4.904 5.354a2.239 2.239 0 0 0 3.1 0c1.384-1.32 4.762-5.192 4.91-5.363A8.499 8.499 0 0 0 20.5 10.5C20.5 5.813 16.687 2 12 2Zm0 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        />
    </Svg>
)
export default IC_location
