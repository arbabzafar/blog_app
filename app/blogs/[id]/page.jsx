import React from 'react'
import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
const BlogPage = async ({ params }) => {
    const id = params.id
    const blogData = blog_data.find(blog => Number(id) === blog.id)

    // Common header component
    const Header = () => (
        <div className='flex justify-between items-center'>
            <Link href="/">
            <Image src={assets.logo} width={180} className='w-auto sm:w-[130px] ' alt="logo"/>
            </Link>
            <button className='flex items-center font-medium gap-2 py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                Get Started
                <Image src={assets.arrow} alt="arrow" className='w-4 h-4' />
            </button>
        </div>
    )

    // If blog data is not found, show a proper "not found" message with header
    if (!blogData) {
        return (
            <div className='bg-gray-200 min-h-screen py-5 px-5 md:px-12 lg:px-28'>
                <Header />
                <div className='flex items-center justify-center' style={{ minHeight: 'calc(100vh - 100px)' }}>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold mb-4'>Blog Not Found</h1>
                        <p className='text-gray-600'>The blog post you're looking for doesn't exist.</p>
                    </div>
                </div>
            </div>
        )
    }

    // If blog data is found, show the blog content
    return (
        <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <Header />
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mb-4'>{blogData.title}</h1>
                <Image src={blogData.author_img} width={60} height={60} alt="author" className='rounded-full mx-auto  mt-6  border border-white'/>
                <p className='mt-2 pb-2 text-lg max-w-[740px] mx-auto'>{blogData.author}</p>
            </div>
        </div>
        {/* blog */}
        
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image className='border-4 border-white' src={blogData.image} width={1280} height={720} alt='' />
                <h1 className='my-8 text-[26px] font-semibold '>Introduction</h1>
                <p>{blogData.description}</p>
                <h3 className='my-6 text-xl font-semibold'>Step 1: Getting Started</h3>
                <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <h3 className='my-6 text-xl font-semibold'>Step 2: The Process</h3>
                <p className='mb-8'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h3 className='my-6 text-xl font-semibold'>Step 3: Final Thoughts</h3>
                <p className='mb-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <h3 className='my-6 text-xl font-semibold'>Conclusion</h3>
                <p className='mb-8'>In conclusion, we've explored the key aspects and important takeaways of this topic. The principles and methods discussed above provide a solid foundation for understanding and implementing these concepts in real-world scenarios. Remember that continuous learning and practical application are essential for mastering any new skill or knowledge area.</p>
                <div className='my-24'>
                    <p className='text-black font-semibold my-4'>Share this article on social media</p>
                    <div className='flex gap-4'>
                        <Image src={assets.facebook_icon} alt="facebook" width={50}  />
                        <Image src={assets.twitter_icon} alt="twitter" width={50}  />
                        <Image src={assets.googleplus_icon} alt="linkedin" width={50}  />
                    </div>
                </div>
            </div>
            <Footer />
       
        
        </>
    )
}

export default BlogPage