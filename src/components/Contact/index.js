// eslint-disable-next-line
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import ccontact from '../CodebrewAssets/Images/ContactPage/Connect Us.jpg';
import firebase from '../../firebase';

import emailjs from 'emailjs-com'
import React, { useRef } from 'react';
const Contact = () =>{

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    // eslint-disable-next-line
    const springConfig = { damping: 25, stiffness: 700 };
    // const cursorXSpring = useSpring(cursorX, springConfig);
    // const cursorYSpring = useSpring(cursorY, springConfig);
    
    useEffect(() => {
        // eslint-disable-next-line 
        const moveCursor = (e) => {
        cursorX.set(e.clientX - 16)
        cursorY.set(e.clientY - 16)
        };
        // eslint-disable-next-line
    }, [])
    
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    
    useEffect(() => {
        const moveCursor = (e) => {
            const x = e.clientX - 16
            const y = e.clientY - 16
            setCursorXY({ x, y }) 
        }

        window.addEventListener('mousemove', moveCursor)
        return () => {
        window.removeEventListener('mousemove', moveCursor)
        }
    }, [])


    const form = useRef();

    function contact (){
        const Name = document.getElementById('name').value
        const Email = document.getElementById('email').value
        const Subject = document.getElementById('subject').value
        const Content = document.getElementById('message').value

        if(Name === ''){
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "Please enter your name"
            return;
        }

        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (Email === "" || !Email.match(validRegex))
        {
            document.getElementById('error').innerHTML = "Please enter a valid email"
            return;
        }

        if(Subject === ''){
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "Please enter a subject"
            return;
        }

        if(Content === ''){
            // buttonRef.current.disabled = false;
            document.getElementsByClassName('error').innerHTML = "Please type your message"
            return;
        }

        else{
            firebase.firestore().collection('Users').add({
                Name:Name,
                Email:Email,
                Subject:Subject,
                Message:Content
            })
            // document.getElementById('error').innerHTML.style.color = 'green';
            document.getElementsByClassName("error")[0].style.color = 'green';
            document.getElementById('error').innerHTML = "Success! We will get back to you soon!";
        }
        
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pjwxbja', 'template_ji4tg5i', form.current, '9A5zkFLWhjs2Ycpjp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };




    return(
        <div style={{width: '100vw', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <form ref={form} className='contactdiv' onSubmit={sendEmail}>
                <h1 style={{alignSelf: 'start', fontWeight: '900', color: '#E22962', fontSize: '35px'}}>Contact</h1>
                <p style={{alignSelf: 'start', marginTop: '-12px', color: '#E22962'}}>Let's turn your ideas into reality. </p>
                <input style={{border: '0.5px solid #E22962', margin: '5px', borderRadius: '0', color: '#E22962'}} className="form-control" type="text" name="from_name" id="name" placeholder="Full Name" required/>
                <input style={{border: '0.5px solid #E22962', margin: '5px', borderRadius: '0', color: '#E22962'}} className="form-control" type="email" name="from_email" id="email" placeholder="Email Address" required/>
                <input style={{border: '0.5px solid #E22962', margin: '5px', borderRadius: '0', color: '#E22962'}} className="form-control" type="text" name="subject" id="subject" placeholder="Subject" required/>
                <textarea className="form-control" type="textarea" name="message" id="message" rows='3'placeholder="For us, the answer is Yes. Now, what's your question?" required style={{border: '0.5px solid #E22962', height: '115px', marginBottom: '0px', borderRadius:' 0', color: '#E22962'}}/>
                
                <div>
                    <p id='error' className="error" style={{color:"red", marginBottom: '-17px', fontWeight: '900', fontSize: '11px'}}></p>
                </div>
                
                <button className="bookacall2" type='submit' style={{marginTop: '20px'}} onClick={contact}>Submit</button>
            </form>

            <div class="imagediv">
                <div style={{width: '300px', height: '500px', backgroundSize: 'contain', backgroundImage: `url('${ccontact}')`}}>
                    
                </div>
            </div>

        </div>
    )
}

export default Contact