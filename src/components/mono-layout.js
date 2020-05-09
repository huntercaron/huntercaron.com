import React from "react"
import styled from "styled-components"

const Container = styled.div`
    font-family: "Mod-Mono", sans-serif;
    padding: 20px 40px;
    white-space: pre-wrap;
    max-width: 1400px;
    font-size: 15px;
    line-height: 2;
`

export default function MonoLayout({ children }) {
    return <Container>{children}</Container>
}
