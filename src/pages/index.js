import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes `
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  font-family: 'Mod', sans-serif;
  font-weight: 300 !important;
  margin: calc(1.5rem + 2%);
  margin-top: 0;
  position: relative;
  opacity: 0;

  animation: ${fadeIn} 250ms 50ms ease-out forwards;

  letter-spacing: -0.1px;
  max-width: 480px;
  font-size: 1.6rem;
  line-height: 1.5;

  a {
    text-decoration: none;
    font-weight: bold;
    letter-spacing: -0.2px;

    font-weight: 500;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: 0;
  }



	@media (min-width: 600px) {
    display: flex;
	}


${''/*
  p {
    margin: 3rem 0;
  } */}

`

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  @media (min-width: 600px) {
		margin-top: 3rem;
    flex: 1;
    min-width: 135px;
    flex-basis: 200px;

    flex-direction:column;
    justify-content: flex-start;
	}

`

const Block = styled.div`
  margin-top: 3rem;
`

const Spacer = styled.div`
  margin-top: ${props => props.h}rem;
  width: 100%;
`

const BlockTitle = styled.h3`
  color: #a0a0a0;
  font-weight: normal;
  font-size: 1.6rem;
  margin: 0;
  margin-bottom: 0.2rem;
`

const Title = styled.h1`
  margin-top: -1px;
  margin: 0;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: -3px;

`

const Subtitle = styled.p`
  font-weight: normal;
  margin: 0;
  line-height: 0.8;

  @media (min-width: 600px) {
    line-height: 1.2;
  }
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0;

  li {
    margin-bottom: 0.2rem;
  }

`

const ContactLink = styled.a`
  color: black;
  font-weight: normal !important;

`

const BulletSpan = styled.span`
  margin-right: 0.1rem;
`

const SmallText = styled.a`
  font-weight: 500;
  font-size: 1.1rem;
  ${''/* text-transform:uppercase; */}
  color: #a0a0a0 !important;
  vertical-align: super;
  margin-left: 0.5px;
  letter-spacing: 0;
  opacity: 1;

  &:hover {
    text-decoration:underline;
  }
`

const ProjectLink = styled(Link)`
  &:hover > span {
    opacity: 1;
  }
`


const Bullet = () => (
  <BulletSpan> ¬ </BulletSpan>
);

const Em = () => (
  <span> &mdash; </span>
);

class IndexPage extends React.Component {
  render() {
    return(
      <Container>

        <Header>
          <div>
            <Title>Hunter Caron</Title>
            {/* <Subtitle>Designer</Subtitle> */}
            {/* <SmallText>huntercaron@me.com</SmallText> */}
          </div>
        </Header>

        <section>
          <Block>
            <p>Designer & sometimes a developer.</p>
            <p>I build things for people striving to succeed in what makes them uniquely brilliant.</p>
            
            { /*  My work encourages you to play, grow &amp; explore. Allowing you to dwell in the moment, and enjoy the next one.</p> */ }
          </Block>

          <Spacer h="3"/>

          <Block>
            <BlockTitle>Experience</BlockTitle>
            <List>
              <li>
                <Bullet/> <a href="http://facebook.design/" target="_blank">Messenger</a> <Em/> Current
              </li>
              <li>
                <Bullet/> <a href="http://facebook.design/" target="_blank">Messenger [Intern]</a> <Em/> 2017
              </li>
              <li>
                <Bullet/> <a href="https://format.com/" target="_blank">Format</a> <Em/> 2016 – 2017
              </li>
              <li>
                 <Bullet/> <a href="http://www.konradgroup.com/" target="_blank">Konrad Group</a> <Em/> 2016
              </li>
            </List>
          </Block>

          {(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') &&
            <Block>
              <BlockTitle>Work</BlockTitle>
              <List>
                  {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.id}>
                      <ProjectLink to={node.frontmatter.path}>{node.frontmatter.title} &rarr;</ProjectLink>
                    </li>
                  ))}
              </List>
            </Block>
          }

          <Block>
            <BlockTitle>Contact</BlockTitle>
            <List>
              <li>
                <Bullet/> <a href="mailto:huntercaron.design@icloud.com" target="_blank">Email</a>
              </li>
              <li>
                <Bullet/> <a href="https://twitter.com/huntercaron" target="_blank">Twitter</a>
              </li>
              <li>
                <Bullet/> <a href="https://www.instagram.com/hunterhcaron/" target="_blank">Instagram</a>
              </li>
              <li>
                <Bullet/> <a href="https://github.com/huntercaron" target="_blank">Github</a>
              </li>

            </List>
          </Block>
        </section>

      </Container>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage
