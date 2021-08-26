import React from 'react'
import Bloglist from './Bloglist'
import useFetch from './useFetch'


function Home() {
    const {data: blogs, isPending, error} = useFetch('http://localhost:5000/api/v1/article')
    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <Bloglist blogs={blogs} title="All Blogs"/> }
        </div>
    )
}

export default Home
