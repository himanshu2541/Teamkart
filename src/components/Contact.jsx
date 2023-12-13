import React, {useRef, useState} from 'react'
import '../assets/styles/contact.css'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BackgroundReveal, Reveal} from "./animations/index.js";
const YoutubeEmbedLazy = React.lazy(() => import('./YoutubeEmbed.jsx'))
const Contact = () => {
    const form = useRef()

    const [message, setMessage] = useState(false)

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_yasy00n', 'template_et9rxoc', form.current, 'B8rGYsll2Y3hRMboM')
            .then((result) => {
                console.log(result.text);
                setMessage(true)
            }, (error) => {
                console.log(error.text);
                setMessage(false)
            });
        e.target.reset();
    }

    const notify = () =>{
        console.log(message)
        if(message){
            toast.success("Message Sent", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else{
            toast.error("Message Not Sent", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <>
            <div id={'contact'}>
                <Reveal className={'contact-container'} width={"100%"} widthInner={"100%"}>
                    <div className={'contact-container-inner'}>
                        <h1 className={'contact-title'}>
                            Stay Connected with Us
                        </h1>
                        <div className={'contact-form-container'}>
                            <div className={'contact-form-inner-container'}>
                                <form ref={form} className={'contact-form'}  onSubmit={sendEmail}>
                                    <input type={'text'} placeholder={'Name'} name={'user_name'} required />
                                    <input type={'email'} placeholder={'Email'} name={'user_email'} required />
                                    <input type={'text'} placeholder={'Subject'} name={'subject'} required />
                                    <textarea name={'message'} cols="30" rows="6" placeholder={'Write Something!'} ></textarea>
                                    <div>
                                        <button type={'submit'} onClick={notify}>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>


                                <div className={'youtube-video'}>
                                    <React.Suspense fallback={'Loading...'}>
                                        <YoutubeEmbedLazy />
                                    </React.Suspense>
                                </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}
export default Contact
