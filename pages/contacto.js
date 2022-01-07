import Link from "next/dist/client/link";
import { useState } from 'react'
import { Acordeon } from "../components/arcodion.component";
import Layout from "../components/layout.component";
import { Title } from "../components/title.component";
/* https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645 */

const SimpleContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          name,
          email,
          message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setEmail('')
              setBody('')
            }
        })
    }
    return  <form action='' className='form'>
                <p className='field required'>
                    <label className='label required' for='name'>Full name</label>
                    <input className='text-input' id='name' name='name' required type='text'/>
                </p>
                <p className='field required half'>
                    <label className='label' for='email'>E-mail</label>
                    <input className='text-input' id='email' name='email' required type='email'/>
                </p>
                <p className='field half'>
                    <label className='label' for='phone'>Phone</label>
                    <input className='text-input' id='phone' name='phone' type='phone'/>
                </p>
                <p className='field half required error'>
                    <label className='label' for='login'>Login</label>
                    <input className='text-input' id='login' name='login' required type='text'/>
                </p>
                <p className='field half required'>
                    <label className='label' for='password'>Password</label>
                    <input className='text-input' id='password' name='password' required type='password'/>
                </p>
                <div className='field'>
                    <label className='label'>Sport?</label>
                    <ul className='checkboxes'>
                        <li className='checkbox'>
                        <input className='checkbox-input' id='choice-0' name='choice' type='checkbox' value='0'/>
                        <label className='checkbox-label' for='choice-0'>Football</label>
                        </li>
                        <li className='checkbox'>
                        <input className='checkbox-input' id='choice-1' name='choice' type='checkbox' value='1'/>
                        <label className='checkbox-label' for='choice-1'>Basketball</label>
                        </li>
                        <li className='checkbox'>
                        <input className='checkbox-input' id='choice-2' name='choice' type='checkbox' value='2'/>
                        <label className='checkbox-label' for='choice-2'>Volleyball</label>
                        </li>
                        <li className='checkbox'>
                        <input className='checkbox-input' id='choice-3' name='choice' type='checkbox' value='3'/>
                        <label className='checkbox-label' for='choice-3'>Golf</label>
                        </li>
                        <li className='checkbox'>
                        <input className='checkbox-input' id='choice-4' name='choice' type='checkbox' value='4'/>
                        <label className='checkbox-label' for='choice-4'>Swimming</label>
                        </li>
                    </ul>
                </div>
                <div className='field'>
                    <label className='label'>Favourite JS framework</label>
                    <ul className='options'>
                        <li className='option'>
                        <input className='option-input' id='option-0' name='option' type='radio' value='0'/>
                        <label className='option-label' for='option-0'>React</label>
                        </li>
                        <li className='option'>
                        <input className='option-input' id='option-1' name='option' type='radio' value='1'/>
                        <label className='option-label' for='option-1'>Vue</label>
                        </li>
                        <li className='option'>
                        <input className='option-input' id='option-2' name='option' type='radio' value='2'/>
                        <label className='option-label' for='option-2'>Angular</label>
                        </li>
                        <li className='option'>
                        <input className='option-input' id='option-3' name='option' type='radio' value='3'/>
                        <label className='option-label' for='option-3'>Riot</label>
                        </li>
                        <li className='option'>
                        <input className='option-input' id='option-4' name='option' type='radio' value='4'/>
                        <label className='option-label' for='option-4'>Polymer</label>
                        </li>
                        <li className='option'>
                        <input className='option-input' id='option-5' name='option' type='radio' value='5'/>
                        <label className='option-label' for='option-5'>Ember</label>
                        </li>
                        <li className='option'>
                        <input className='option-input' id='option-6' name='option' type='radio' value='6'/>
                        <label className='option-label' for='option-6'>Meteor</label>
                        </li>
                    </ul>
                </div>
                <p className='field'>
                    <label className='label' for='about'>About</label>
                    <textarea className='textarea' cols='50' id='about' name='about' rows='4'></textarea>
                </p>
                <p className='field half'>
                    <label className='label' for='select'>Position</label>
                    <select className='select' id='select'>
                        <option selected value=''></option>
                        <option value='ceo'>CEO</option>
                        <option value='front-end'>Front-end developer</option>
                        <option value='back-end'>Back-end developer</option>
                    </select>
                </p>
                <p className='field half'>
                    <input className='button' type='submit' value='Send'/>
                </p>
            </form>
}


export default function ContactFormTest() {
    return <Layout actual="contacto">
           <div className="contactFormsContainer">
            <Title center="Contacta con nosotros" sub={"Te guiamos para que pidas cita"}></Title>
            <Acordeon childs={[
                {title:"Contacto Test",child:<SimpleContactForm/>}
            ]}></Acordeon>
           </div>
          </Layout>
            
  }