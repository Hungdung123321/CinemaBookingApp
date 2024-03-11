import Svg, { Path } from "react-native-svg"

const IC_Search = ({ height, width, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 24}
        height={height || 24}
        fill="none"
        {...props}
    >
        <Path
            fill="#637394"
            d="M10.25 3C6.258 3 3 6.258 3 10.25s3.258 7.25 7.25 7.25a7.198 7.198 0 0 0 4.36-1.475l4.683 4.682a1 1 0 1 0 1.414-1.414l-4.682-4.683a7.198 7.198 0 0 0 1.475-4.36C17.5 6.258 14.242 3 10.25 3Zm0 2a5.235 5.235 0 0 1 5.25 5.25c0 1.398-.543 2.66-1.426 3.599a1 1 0 0 0-.224.223 5.228 5.228 0 0 1-3.6 1.428A5.235 5.235 0 0 1 5 10.25 5.235 5.235 0 0 1 10.25 5Z"
        />
    </Svg>
)
export default IC_Search
