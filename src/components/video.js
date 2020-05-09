import React from "react"
import styled from "styled-components"

export const Video = styled.video`
    max-width: 100%;
    vertical-align: middle;
    user-select: none;
    object-fit: object-fit;
    object-position: left 50%;
    border-radius: 5px;
    max-height: 80vh;
    max-width: 1500px;
    margin: 40px 0;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    display: block;
`

Video.defaultProps = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    width: "100%",
}
