import ccontact from '../MediaAssets/Homepage/Logo.png';
import React from 'react';
const Contact = () =>{

    return(
        <div style={{width: '100vw', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <form className='contactdiv'>
                <h1 style={{alignSelf: 'start', fontWeight: '900', color: '#E22962', fontSize: '35px'}}>Contact</h1>
                <p style={{alignSelf: 'start', marginTop: '-12px', color: '#E22962'}}>Let's turn your ideas into reality. </p>
                <input style={{border: '0.5px solid #E22962', margin: '5px', borderRadius: '0', color: '#E22962'}} className="form-control" type="text" name="from_name" id="name" placeholder="Full Name" required/>
                <input style={{border: '0.5px solid #E22962', margin: '5px', borderRadius: '0', color: '#E22962'}} className="form-control" type="email" name="from_email" id="email" placeholder="Email Address" required/>
                <input style={{border: '0.5px solid #E22962', margin: '5px', borderRadius: '0', color: '#E22962'}} className="form-control" type="text" name="subject" id="subject" placeholder="Subject" required/>
                <textarea className="form-control" type="textarea" name="message" id="message" rows='3'placeholder="For us, the answer is Yes. Now, what's your question?" required style={{border: '0.5px solid #E22962', height: '115px', marginBottom: '0px', borderRadius:' 0', color: '#E22962'}}/>
                
                <div>
                    <p id='error' className="error" style={{color:"red", marginBottom: '-17px', fontWeight: '900', fontSize: '11px'}}></p>
                </div>
                
                <button className="bookacall2" type='submit' style={{marginTop: '20px'}}>Submit</button>
            </form>

            <div class="imagediv">
                <div style={{width: '300px', height: '500px', backgroundSize: 'contain', backgroundImage: `url('${ccontact}')`}}>
                    
                </div>
            </div>

        </div>
    )
}

export default Contact