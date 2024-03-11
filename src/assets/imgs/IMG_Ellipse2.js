import Svg, { Path } from "react-native-svg"
const IMG_Ellipse2 = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={40}
        fill="none"
        {...props}
    >
        <Path
            fill="#1A2232"
            d="M0 20C0 8.954 8.954 0 20 0v40C8.954 40 0 31.046 0 20Z"
        />
    </Svg>
)
export default IMG_Ellipse2
