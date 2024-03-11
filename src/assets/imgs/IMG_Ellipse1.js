import Svg, { Path } from "react-native-svg"
const IMG_Ellipse1 = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={40}
        fill="none"
        {...props}
    >
        <Path
            fill="#1A2232"
            d="M20 20c0 11.046-8.954 20-20 20V0c11.046 0 20 8.954 20 20Z"
        />
    </Svg>
)
export default IMG_Ellipse1
