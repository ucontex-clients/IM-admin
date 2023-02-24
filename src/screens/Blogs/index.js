import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { SeeBlogs } from './SeeBlogs'
// import { useRouter } from "next/router"
// import { Pagination } from "../Pagination"
import { BASEURL } from '../../BasicUrl/Url'
import { getCookie } from 'cookies-next'
import Layout from '../../components/layout'
const axios = require('axios')

export function MyBlogs() {
  const [blogCount, setBlogCount] = useState(0)
  const [touchedBlog, setTouchedBlog] = useState(false)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [allBlogs, setAllBlogs] = useState([])

  // useEffect(() => {
  //  const getBlogs = async () => {
  //     const allBlogsResponse = await axios.get(`${BASEURL.URL}/blogs?limit=2&page=${page}`, { headers: {
  //         Authorization: `Bearer ${getCookie('token')}`
  //     }})
  //     setAllBlogs(allBlogsResponse.data.data.blog)
  //     setBlogCount(allBlogsResponse.data.data.count)
  //     setPageCount(allBlogsResponse.data.data.pages)
  //  }
  //  getBlogs()

  //  console.log(allBlogs)

  // }, [page, touchedBlog])

  // const router = useRouter()

  const [currentPage, setCurrentPage] = useState('all')

  const myStyle = {
    borderBottom: '2.5px solid #0984D6',
    color: '#0984D6',
  }

  const myBlogs = allBlogs.map((blog) => {
    return (
      <SeeBlogs
        key={blog._id}
        title={blog.title}
        body={blog.body}
        addedBy={blog.addedBy.username}
        date={blog.createdAt}
        blogID={blog._id}
        setTouchedBlog={setTouchedBlog}
        touchedBlog={touchedBlog}
      />
    )
  })

  return (
    <Layout>
      <div style={{ marginTop: '48px' }} className={styles.myProperty}>
        <p>Blog</p>
        <input type="text" placeholder="Search by name"></input>
      </div>

      <div className={styles.allPosts}>
        <p
          style={currentPage == 'all' ? myStyle : {}}
          onClick={() => {
            setCurrentPage('all')
            // router.push('/')
          }}
        >
          All Post ({blogCount})
        </p>
        <p
          style={currentPage == 'write' ? myStyle : {}}
          onClick={() => {
            setCurrentPage('write')
            // router.push('write-blog')
          }}
        >
          Write Post{' '}
        </p>
      </div>

      <div className={styles.availablePosts}>{myBlogs}</div>
      {/* <Pagination page={page} setPage={setPage} pageCount={pageCount} limit={{limit: 2}} /> */}
    </Layout>
  )
}
