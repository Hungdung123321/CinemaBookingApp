import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AppLogo = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={65}
        height={68}
        fill="none"
        opacity={'1'}
        {...props}
    >
        <G filter="url(#a)">
            <G filter="url(#b)">
                <Path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M47.114 23.272A1.998 1.998 0 0 0 49 21.29v-4.665C49 14.075 46.885 12 44.284 12h-9.452a2 2 0 0 0-2 2v.643c0 1.097-.903 1.982-2.02 1.982-1.12 0-2.022-.885-2.022-1.982V14a2 2 0 0 0-2-2h-6.074C18.116 12 16 14.075 16 16.625v27.75C16 46.925 18.115 49 20.716 49h6.074a2 2 0 0 0 2-2v-.643c0-1.097.903-1.982 2.021-1.982 1.118 0 2.021.885 2.021 1.982V47a2 2 0 0 0 2 2h9.452c2.6 0 4.716-2.075 4.716-4.625V39.71a1.998 1.998 0 0 0-1.886-1.982c-3.854-.238-6.872-3.422-6.872-7.228 0-3.806 3.018-6.99 6.872-7.228ZM30.81 40.41c1.118 0 2.021-.886 2.021-1.982v-3.965c0-1.096-.903-1.982-2.02-1.982-1.12 0-2.022.886-2.022 1.982v3.965c0 1.096.903 1.982 2.021 1.982Zm0-11.893c1.118 0 2.021-.886 2.021-1.982V22.57c0-1.096-.903-1.982-2.02-1.982-1.12 0-2.022.886-2.022 1.982v3.965c0 1.096.903 1.982 2.021 1.982Z"
                    clipRule="evenodd"
                />
            </G>
            <G filter="url(#c)">
                <Path
                    fill="#FF8036"
                    fillRule="evenodd"
                    d="M28.838 45.926A21.921 21.921 0 0 1 23 31c0-5.918 2.337-11.29 6.137-15.244.363.525.977.869 1.674.869 1.118 0 2.021-.885 2.021-1.982V14a2 2 0 0 1 2-2h9.452c2.6 0 4.716 2.075 4.716 4.625v4.665a1.998 1.998 0 0 1-1.886 1.982c-3.854.238-6.872 3.422-6.872 7.228 0 3.806 3.018 6.99 6.872 7.228A1.998 1.998 0 0 1 49 39.71v4.665C49 46.925 46.885 49 44.284 49h-9.452a2 2 0 0 1-2-2v-.643c0-1.097-.903-1.982-2.02-1.982a2.01 2.01 0 0 0-1.974 1.551Zm3.994-7.497c0 1.096-.903 1.982-2.02 1.982-1.12 0-2.022-.886-2.022-1.982v-3.965c0-1.096.903-1.982 2.021-1.982 1.118 0 2.021.886 2.021 1.982v3.965Zm0-11.893c0 1.096-.903 1.982-2.02 1.982-1.12 0-2.022-.886-2.022-1.982V22.57c0-1.096.903-1.982 2.021-1.982 1.118 0 2.021.886 2.021 1.982v3.965Z"
                    clipRule="evenodd"
                />
            </G>
        </G>
        <Defs></Defs>
    </Svg>
)
export default AppLogo
