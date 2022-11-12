// components/Image.js
import React from "react";
import NextImage from "next/image";

const customLoader = ({ src }) => {
    return src;
};

export default function Image(props) {
    return <NextImage {...props} unoptimized={true} loader={customLoader} />;
}
