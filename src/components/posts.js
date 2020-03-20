import React from 'react'
import { Link } from 'gatsby'

const Posts = (props) => {
  return (
    <section style={{ clear: 'both', lineHeight: '1.5' }}>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0 0 2rem 0' }}>
        {props.edges.map((node, index) => {
          const post = node.node
          const {
            fields: {
              slug
            },
            frontmatter: {
              title,
              description
            },
            excerpt
          } = post

          return (
            <li key={index} style={{ marginBottom: '2rem' }}>
              <article className='post'>
                <header className='post__header'>
                  <Link to={slug}>
                    {title}
                  </Link>
                </header>
                <p className='post__excerpt'>
                  {description || excerpt}
                </p>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Posts
