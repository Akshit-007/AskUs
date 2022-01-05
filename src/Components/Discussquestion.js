import React, { useState, useEffect } from "react";
import '../Styles/discussquestion.css';
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts.js";



const Discussquestion = () => {

    const [user, setUser] = useState('');
    const [question, setQuestion] = React.useState({
        title: '',
        content: '',
        email: '',
        creator: '',
    });

    useEffect(() => {
        let us = JSON.parse(localStorage.getItem('profile'));

        if (us !== null) {
            let cr = us.result.firstName;
            let ml = us.result.email;

            setQuestion({ ...question, ['email']: ml, ['creator']: cr });

            setUser(ml);
        }
        else {
            setUser('');
        }

    }, [user])

    const dispatch = useDispatch();

    const handleQuestionChange = (prop) => (event) => {
        setQuestion({ ...question, [prop]: event.target.value });

    };

    const handleQuestionSubmit = (event) => {
        event.preventDefault();


        dispatch(createPost(question));

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }


    return (
        <>

            <div>
                <div className="discuss_question_header">
                    Ask a Doubt?
                </div>
                {user === '' ? <div className="sign_to_see_question">Please signin to ask your doubts</div> : <div >
                    <form className="question_form">

                        <br />
                        <input type="text" placeholder="Title" className="question_title" value={question.title}
                            onChange={handleQuestionChange('title')} />
                        <br />
                        <br />

                        <textarea placeholder="Ask your question here.." className="question_textarea" value={question.content}
                            onChange={handleQuestionChange('content')} ></textarea>
                        <br />
                        <br />
                        <br />

                        <button className="question_post" onClick={handleQuestionSubmit}>Post</button>
                    </form>
                </div>}


            </div>
        </>
    );
};


export default Discussquestion;