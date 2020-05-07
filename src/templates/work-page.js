import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Container = styled.div`
    font-family: "Mod", sans-serif;
    position: relative;
    margin: auto calc(1.5rem + 2%);

    max-width: 500px;
    width: 100%;

    @media (min-width: 600px) {
    }
`

const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.5;

    margin-top: 3rem;
`

const SubTitle = styled.p`
    font-weight: normal;
    margin: 0;
    line-height: 1;

    @media (min-width: 600px) {
        line-height: 1.2;
    }
`

const BackButton = styled.div`
    line-height: 1.5;

    font-weight: 500;

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }

    @media (min-width: 800px) {
        top: 3rem;
        position: absolute;
        left: -75px;
    }
`

const Content = styled.div`
    margin-top: 4rem;
    margin-bottom: 8rem;

    .video-box video,
    .gatsby-resp-image-wrapper {
        box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.08);

        margin-top: 1rem;
    }

    .video-box video {
        width: 100%;
    }

    .gatsby-resp-image-wrapper {
    }

    a {
        color: #66c0fa;

        &:hover {
            text-decoration: none;
        }
    }

    h5 {
        margin-top: -0rem;
        opacity: 0.5;
    }

    h2 {
        margin-bottom: 0.5rem;
        margin-top: 4rem;
        font-size: 2.4rem;
    }
`

export default ({ data }) => {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark

    if (typeof navigator !== `undefined`) {
        var ua = navigator.userAgent.toLowerCase()
        var is_safari = ua.indexOf("safari/") > -1 && ua.indexOf("chrome") < 0
        var videos = document.querySelectorAll("video")

        if (is_safari && videos.length > 0) {
            for (const video of videos) {
                setTimeout(function () {
                    video.play()
                }, 50)
            }
        }
    }

    return (
        <Container>
            <BackButton>
                <Link to="/">&larr; Back</Link>
            </BackButton>

            <div>
                <Title>{frontmatter.title}</Title>
                <SubTitle>{frontmatter.subtitle}</SubTitle>
                <Content dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Container>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                subtitle
            }
        }
    }
`
