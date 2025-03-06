'use client'
import { blog_data } from '@/Assets/assets'
import React, { useState,useEffect } from 'react'

const Page = async ({ params }) => {
    const [data,setData] = useState(null)
    const fetchBlog = async () => {
        for (let i= 0; i < blog_data.length; i++) {
            if(Number(params.id) == blog_data[i].id){
                setData(blog_data[i])
            }
        }

    }
    useEffect(() => {
        fetchBlog()
    },[])
  return (
    <div>
      <h1>Blog {params.id}</h1>
    </div>
  )
}

export default Page