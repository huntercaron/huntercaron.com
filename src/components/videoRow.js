import React from "react"
import styled from "styled-components"
import { Video } from "./video"

export const VerticalVideo = styled(Video)`
    width: 30%;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
`

Video.defaultProps = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    width: "100%",
}

export function VideoRow({ videos }) {
    return (
        <Container>
            {videos.map((video) => (
                <VerticalVideo key={video}>
                    <source src={video} type="video/mp4" />
                </VerticalVideo>
            ))}
        </Container>
    )
}
