import React from 'react'
import BlogPost from './BlogPost'

const Blog = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </section>
  )
}

export default Blog