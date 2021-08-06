import React from "react"
import ContentLoader from "react-content-loader"

const LoaderBlock = (props) => (
    <ContentLoader
        speed={1}
        width={280}
        height={480}
        viewBox="0 0 280 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="147" cy="124" r="122" />
        <rect x="56" y="253" rx="0" ry="0" width="196" height="22" />
        <rect x="35" y="285" rx="0" ry="0" width="230" height="62" />
        <rect x="43" y="367" rx="0" ry="0" width="83" height="33" />
        <rect x="135" y="360" rx="21" ry="21" width="133" height="48" />
    </ContentLoader>
)

export default LoaderBlock