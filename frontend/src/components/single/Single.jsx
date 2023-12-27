// import React from 'react'
// import './single.css'

// function Single() {
   
//      return (
//         <div>
//              <div className="single">
//                 <div className="singleWrapper">
//                     <img className="singleImg" src="https://tribuneonlineng.com/wp-content/uploads/2020/12/OONI1.jpg" alt="" />
//                     <h1 className="singleTitle">
//                         Ooni of Ife unveils
//                         <div className="singleEdit">
//                             <i className="singleIcon far fa-edit"></i>
//                             <i className="singleIcon far fa-trash-alt"></i>
//                         </div>
//                     </h1>
//                     <div className="singleInfo">
//                         <span className="singleAuthor">Author: <b>Adesoji Aderemi</b></span>
//                         <span className="singleDate">1 hour ago</span>
//                     </div>
//                     <p className="singleDesc">
//                         It was an evening of tradition, pomp and ceremony as the Ooni of Ife, Oba Enitan Ogunwusi, on Tuesday, formally unveiled his new son, Prince Adesoji Aderemi, at his palace in Ile Ife, Osun State.

//                         It would be recalled that the Ooni of Ife on November 18 announced the birth of his son with his wife, Olori Naomi Silekunola Ogunwusi, after two years of marriage, saying both the mother and child were in good condition.
//                     </p>
//                 </div>
//             </div> 

//         </div>
//     )
// }

// export default Single

import React, { useState, useEffect } from 'react';
import './single.css';
import { useParams } from 'react-router-dom';

function Single() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/blog/${postId}`); 
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [ postId]);

    return (
        <div>
            {post ? (
                <div className="single">
                    <div className="singleWrapper">
                        <img className="singleImg" src={post.img} alt="" />
                        <h1 className="singleTitle">
                            {post.title}
                            <div className="singleEdit">
                                <i className="singleIcon far fa-edit"></i>
                                <i className="singleIcon far fa-trash-alt"></i>
                            </div>
                        </h1>
                        <div className="singleInfo">
                            <span className="singleAuthor">Author: <b>{post.author}</b></span>
                            <span className="singleDate">{post.date}</span>
                        </div>
                        <p className="singleDesc">
                            {post.content}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="loading">Loading...</div>
            )}
        </div>
    );
}

export default Single;
