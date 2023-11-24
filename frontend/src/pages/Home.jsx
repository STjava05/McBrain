import React, { useState, useEffect } from 'react'
import './home.css'
import Lottie from 'lottie-react';
import animation from '../aminations/animation_ln96khv0.json'
import { Link } from 'react-router-dom'


const Home = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch('http://localhost:5000/post')
            const data = await response.json()
            setPosts(data)
        }
        getPosts()
    }, [])

    return (
        <div className='home' >
            <div className='header ' style={{ width: "200px" }} >
                <Lottie animationData={animation} />
            </div>
            <div className='posts'>
                {posts.map(post => (
                    <div className='post' key={post._id}>
                        <img className='postImg' src={post.img} alt='' />
                        <div className='content'>
                            <Link className='link' to={`/post/${post._id}`}>
                                <h3 className='postTitle'>{post.title}</h3>
                                <p className='desc'>{post.description}</p>
                                
                                <button className='btn btn-outline-warning'>Learn More</button>

                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home