import React, { useState, useEffect } from "react";
import '../Styles/discuss.css';
import Navbar from "./Navbar";
// import { useSelector } from 'react-redux';
import Discussquestion from './Discussquestion.js';
import { useDispatch } from "react-redux";
import { sendcomment, deletePost } from '../actions/posts';
import { FaRegTrashAlt } from "react-icons/fa";
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Discuss = () => {

    const [post, setPost] = useState(null);
    const [render, setRender] = useState(true);
    const [comment, setComment] = useState('');
    const [user, setUser] = useState('');
    const dispatch = useDispatch();
    // const po = useSelector((state) => state.posts);

    const notify = () => toast.error("Signin to comment");


    useEffect(() => {
        setTimeout(() => {
            fetch("https://askus-doubt.herokuapp.com/posts")
                .then(res => res.json())
                .then(json => { setPost(json) })
        }, 1500);


    }, [render, dispatch]);
    useEffect(() => {
        let us = JSON.parse(localStorage.getItem('profile'));

        if (us != null) {
            us = us.result.email;
            // console.log(us);
            setUser(us);
        }
        fetch("https://askus-doubt.herokuapp.com/posts")
            .then(res => res.json())
            .then(json => { setPost(json) })



    }, []);




    const handleShowComment = (id) => () => {
        const updatedPost = post.map(posts => {
            if (posts._id === id) {
                posts.showComments = !posts.showComments;
            }
            else {
                posts.showComments = false;
            }

            return posts;
        })
        setPost(updatedPost);
    }

    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const handleCommentSubmit = (id) => (e) => {
        e.preventDefault();

        // console.log(comment);
        const obj = {
            comment: comment,
            id: id
        }

        // console.log(obj);
        dispatch(sendcomment(obj)).then(setRender(!render));

        setComment('');


    }
    const handleDeletePost = (id) => (e) => {
        dispatch(deletePost(id)).then(setRender(!render));
    }




    return (
        <>
            <Navbar />
            <br />
            <div className="discussion" >


                <div className="render_post">

                    {post === null ? <div>No post right now</div> :
                        <div>
                            <ul>
                                {post.length === 0 ? <div>Add Post +</div> :

                                    <div>
                                        {post.map((question) => (
                                            <div key={question._id}>
                                                <li className="question_asked"  >
                                                    <div className="question_asked_title">
                                                        <div className="title">

                                                            {question.title}
                                                        </div>
                                                        <div className="delete_post">
                                                            {/* {console.log(user)} */}

                                                            {user === (question.email) ? <> <span onClick={handleDeletePost(question._id)}><FaRegTrashAlt /> </span></> : <></>}
                                                        </div>


                                                    </div>
                                                    {/* <br /> */}
                                                    <div className="question_asked_content">
                                                        Q. {question.content}
                                                        <br />
                                                        <br />
                                                    </div>
                                                    <div className="question_asked_activity">

                                                        {user === '' ? <div className="handle_show_comment_not_user" onClick={notify} >  comment  <ToastContainer /> </div> : <div className="handle_show_comment" onClick={handleShowComment(question._id)} > comment</div>}


                                                        <div className="handle_show_post_author"  > - {question.creator}</div>
                                                    </div>
                                                    {question.showComments ?
                                                        <div className="comment_section">
                                                            <form>
                                                                <hr />
                                                                <br />
                                                                <textarea placeholder="Write your comment here" className="question_comments" value={comment}
                                                                    onChange={handleComment} />
                                                                <br />
                                                                <button className="post_question_comment" onClick={handleCommentSubmit(question._id)}>Post</button>
                                                                <br />
                                                                <br />
                                                            </form>
                                                            {question.comments === undefined ? <div>No Comments</div> : <div>
                                                                <ul className="cmnt_response"> {question.comments.map((cmnt) => (
                                                                    <div key={uniqid()}>  <li className="comment_list" >{cmnt} </li> <br /></div>
                                                                ))}

                                                                </ul> </div>}
                                                        </div>
                                                        : <></>
                                                    }

                                                </li>
                                                <br />
                                            </div>



                                        ))
                                        }


                                    </div>

                                }


                            </ul>
                        </div>}
                </div>
                <div className="ask_a_question">
                    <Discussquestion />
                    <br />
                </div>

            </div>


        </>
    );
};


export default Discuss;