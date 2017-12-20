import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Script from 'react-load-script';

const Container = styled.div`
  font-family: 'Mod', sans-serif;
  font-weight: 300 !important;
  margin: calc(1.5rem + 2%);
  margin-top: 0;
  position: relative;

  letter-spacing: -0.1px;
  max-width: 500px;
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
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    return(
      <Container>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <Header>
          <div>
            <Title>Hunter Caron</Title>
            {/* <Subtitle>Designer</Subtitle> */}
            {/* <SmallText>huntercaron@me.com</SmallText> */}
          </div>
        </Header>

        <section>
          <Block>
            <p>I am a Toronto based designer & developer who is passionate about creating efficient and enjoyable digital experiences for everyone to enjoy.</p>
            <p>Currently available for freelance work.</p>
          </Block>

          <Spacer h="3"/>

          <Block>
            <BlockTitle>Experience</BlockTitle>
            <List>
              <li>
                <Bullet/> <a href="http://facebook.design/" target="_blank">Facebook Messenger</a> <Em/> Aug. 2018
              </li>
              <li>
                <Bullet/> <a href="http://facebook.design/" target="_blank">Facebook Messenger [Intern]</a> <Em/> 2017
              </li>
              <li>
                <Bullet/> <a href="https://format.com/" target="_blank">Format</a> <Em/> 2016
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
