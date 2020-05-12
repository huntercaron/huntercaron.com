import React from "react"
import styled from "styled-components"

const Container = styled.div`
    font-family: "Mod-Mono", sans-serif;
    padding: 8px 16px;
    white-space: pre-wrap;
    max-width: 1400px;
    font-size: 15px;
    line-height: 2;

    @media (min-width: 600px) {
        padding: 20px 40px;
    }
`

export default function MonoLayout({ children }) {
    return <Container>{children}</Container>
}
