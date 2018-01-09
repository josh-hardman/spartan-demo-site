import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";

import { rhythm } from "../utils/typography";

const linkStyle = css({ float: `right` });

export default ({ children, data }) => (
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <script>
        if (window.netlifyIdentity){" "}
        {window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        })}
      </script>
    </Helmet>
    <Link to={`/`}>
      <g.H3 marginBottom={rhythm(2)} display={`inline-block`}>
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
  </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
