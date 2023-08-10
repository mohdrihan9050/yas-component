import './Contact.css'
import { useRef } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { grey, red } from '@mui/material/colors';
const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1d3xw51', 'template_wtweok3', form.current, 'TJZioM5_xu0R2HDv6')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div>
             
            <div className="container-fluid " id='contact'>
            <div className="row mt-5 m-2">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-2 ">

                    <div >
                        <h3 className='m-4'>Contact Us!!</h3>
                        <p className='m-4'>It is very important to us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!</p>
                    </div><br />
                    
                    <div className='m-4' >  
                        <h5 className='contact'>Email:</h5>
                        <a className='contact ' style={{color:'var(--gray)',textDecoration:'none'}} href="mailto:project.rihan@gmail.com">project.rihan@gmail.com</a><br/><br/>
                    </div>

                    <div className='m-4'>
                        <h5 className='contact'>Phone:</h5>
                        <a className='contact' style={{color:'var(--gray)',textDecoration:'none'}} href="tel:8958229050">+91 8958229050</a><br></br>
                        <a className='contact' style={{color:'var(--gray)',textDecoration:'none'}} href="tel:8958229050">+91 8958229050</a>
                        <p className='contact' style={{fontSize:14, color:"grey"}}>(9 AM to 10 PM IST throuhout the week)</p><br/>
                    </div>
                    <div className='contact m-4'>
                        <span>
                        <h5>Address:</h5>
                        </span>
                        
                            <p>unit no 2 , A wing<br></br>
                                2nd Floor , Times Squre Building<br></br>
                                Andheri Kurla Road  , Marol<br></br>
                                Andheri East , Mumbai-40059<br></br>
                                Maharashtra</p>
                    </div>
                    <div className='m-4'><br/>
                        <h4>Social:</h4>
                        <div className='icon mt-4'>
                        <a href="#"><FacebookRoundedIcon className='m-icon'/></a>
                        <a href="#"><InstagramIcon  className='m-icon'/></a>
                        <a href="#"><TwitterIcon  className='m-icon'/></a>
                        <a href="#"> <LinkedInIcon  className='m-icon'/>  </a>             
                        </div>
                    </div>
                   
                    
                </div>

                <div className="cont col-lg-6 col-md-6 col-sm-12 col-12">
                    <form  className=' form-wrapper m-4'  ref={form} onSubmit={sendEmail}>
                        <h3>Send us a message</h3>
                        <lable>Type of Query* <br/>
                        <select name="query" id="" className='box-size'><br/>
                        <option value="query1">choose a query</option>
                        <option value="query1">Query1</option>
                        <option value="query1">Query2</option>
                        <option value="query1">Query3</option>
                        <option value="query1">Query4</option>
                        </select>
                        </lable><br/><br/>

                    <lable> Full Name*
                    <input className="box-size form-control pb-2" name="user_name" type="text" placeholder="Full Name" required />
                    </lable>  <br/>
                    
                    <lable> Email*
                    <input className="box-size form-control pb-2" type='email' name="user_email" placeholder="email" required/>
                    </lable><br/>

                    <lable>Mobile No* 
                        <input className="box-size form-control pb-2" type="tel" name='phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </lable><br/>
                    
                    <lable>Message*
                    <textarea className='box-size1 pt-2 form-control' name="message" placeholder=' write your text'/>
                    </lable><br/>

                    <button className='button n-button center box-size' type="submit">Send Message</button>  
                    </form>
                
                </div>
            </div>
        </div>
        </div>
    )
}
export default Contact;