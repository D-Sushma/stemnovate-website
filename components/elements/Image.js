// components/Image.js
import React from "react";
import NextImage from "next/image";

export default function Image(props) {
    return <NextImage {...props} unoptimized={true} />;
}
