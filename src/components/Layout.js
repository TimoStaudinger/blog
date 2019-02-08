import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <StaticQuery
        query={bioQuery}
        render={data => {
          const {
            twitter,
            github,
            stackoverflow,
          } = data.site.siteMetadata.social

          return (
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >
              {header}
              {children}
              <footer>
                <a href={`https://twitter.com/${twitter}`}>Twitter</a> ·{' '}
                <a href={`https://github.com/${github}`}>GitHub</a> ·{' '}
                <a
                  href={`https://stackoverflow.com/users/${stackoverflow}?tab=profile`}
                >
                  StackOverflow
                </a>
              </footer>
            </div>
          )
        }}
      />
    )
  }
}

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          stackoverflow
        }
      }
    }
  }
`

export default Layout
