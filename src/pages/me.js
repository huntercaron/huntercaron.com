import React from "react"
import styled from "styled-components"
import viewVideo from "../assets/video/bloom_view.mp4"

// make it content editable

const Container = styled.div`
    font-family: "Mod-Mono", sans-serif;
    padding: 0 40px;
    white-space: pre-wrap;
    font-size: 15px;
    line-height: 2;
`

export const Video = styled.video`
    max-width: 100%;
    vertical-align: middle;
    user-select: none;
    object-fit: object-fit;
    object-position: 50% 50%;
    border-radius: 10px;
    max-height: 80vh;
`

Video.defaultProps = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    width: "100%",
}

const firstBlock = `
Hi, I'm Hunter

I'm a Canadian designer living in Amsterdam.
I currently work @ Framer, a web based prototyping tool.

I like to build things for people striving to succeed in what makes them unique.

This extends into a few themes in my work
- Building tools for creative people that helps them create their best work
- Creating tight, polished & intuitive designs
- Teaching & helping others to create compelling things
- Exploring new ideas & technologies

Below you can find a selection of my work in no particular order.
I would normally go over these in person so please feel free to get in touch.

EMAIL: huntercaron@me.com
TWITTER: @huntercaron
`

export default function Me() {
    return (
        <Container>
            {firstBlock}
            <Video controls>
                <source src={viewVideo} type="video/mp4" />
            </Video>
        </Container>
    )
}
