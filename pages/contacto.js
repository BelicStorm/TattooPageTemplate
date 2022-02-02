import { Acordeon } from "../components/arcodion.component";
import Layout from "../components/layout.component";
import { Title } from "../components/title.component";
import { ValidationError, useForm } from '@formspree/react';
import Image from 'next/image'

const SimpleContactForm = () => {
    /* crear cuenta en formspree y usar el id */
    const [state, handleSubmit] = useForm('mgerqenw', {
        data: {
          pageTitle: 'Mensaje desde de prueba',
    }});
    if (state.succeeded) {
        return <div>¡Nos pondremos en contacto pronto! Revisa tu correo o estate atento a tu teléfono.</div>;
    }
    return  <form className='form' onSubmit={handleSubmit}>
                <p className='field required'>
                    <label className='label required' htmlFor='name'>Nombre</label>
                    <input className='text-input' id='name' name='name' required type='text'/>
                    <ValidationError field="name" prefix="name" errors={state.errors} />
                </p>
                <p className='field required half'>
                    <label className='label' htmlFor='email'>E-mail</label>
                    <input className='text-input' id='email' name='email' required type='email'/>
                    <ValidationError field="name" prefix="name" errors={state.errors} />
                </p>
                <p className='field half'>
                    <label className='label' htmlFor='phone'>Teléfono</label>
                    <input className='text-input' id='phone' name='phone' type='phone'/>
                    <ValidationError field="phone" prefix="phone" errors={state.errors} />
                </p>


                <p className='field'>
                    <label className='label' htmlFor='about'>Mensaje</label>
                    <textarea className='textarea' cols='50' id='about' name='about' rows='4'></textarea>
                    <ValidationError field="about" prefix="about" errors={state.errors} />
                    
                </p>

                <p className='field'>
                    <input className='button' type='submit' value='Enviar'/>
                </p>
            </form>
}
const TattooContact = () => {
    /* crear cuenta en formspree y usar el id */
    const [state, handleSubmit] = useForm('mgerqenw', {
        data: {
          pageTitle: 'Mensaje desde de prueba para Tattoo',
    }});
    if (state.succeeded) {
        return <div>¡Nos pondremos en contacto pronto! Revisa tu correo o estate atento a tu teléfono.</div>;
    }
    return  <form  onSubmit={handleSubmit} className='form'>
                <p className='field required'>
                    <label className='label required' htmlFor='name'>Full name</label>
                    <input className='text-input' id='name' name='name' required type='text'/>
                    <ValidationError field="name" prefix="name" errors={state.errors} />
                </p>
                <p className='field required half'>
                    <label className='label' htmlFor='email'>E-mail</label>
                    <input className='text-input' id='email' name='email' required type='email'/>
                    <ValidationError field="email" prefix="email" errors={state.errors} />
                </p>
                <p className='field half'>
                    <label className='label' htmlFor='phone'>Phone</label>
                    <input className='text-input' id='phone' name='phone' type='phone' required/>
                    <ValidationError field="phone" prefix="phone" errors={state.errors} />
                </p>
                <p className='field half'>
                    <label className='label' htmlFor='Artist'>Tattoo Artist</label>
                    <select className='select' id='select'>
                        <option defaultValue='Sin preferencia'>Sin preferencia</option>
                        <option value='Gabo'>Gabo</option>
                        <option value='Alba'>Alba Ferrero</option>
                        <option value='etc'>etc</option>
                    </select>
                    <ValidationError field="Artist" prefix="Artist" errors={state.errors} />
                </p>
                <p className='field half'>
                    <label className='label' htmlFor='Tamaño'>Tamaño</label>
                    <select className='select' id='select'>
                        <option defaultValue='Sin preferencia'>Sin preferencia</option>
                        <option value='1-5cm'>1-5cm</option>
                        <option value='6-10cm'>6-10cm</option>
                        <option value='11-20cm'>11-20cm</option>
                        <option value='+20cm'>+20cm</option>
                    </select>
                    <ValidationError field="Tamaño" prefix="Tamaño" errors={state.errors} />
                </p>
                <p className='field half'>
                    <label className='label' htmlFor='edad'>Edad</label>
                    <input className='text-input' id='edad' name='edad' type='number' min="1" max="99" required/>
                    <ValidationError field="edad" prefix="edad" errors={state.errors} />
                </p>
                <p className='field half'>
                    <label className='label' htmlFor='Referencia'>Referencia</label>
                    <input type="file" name="Referencia" accept="image/png, image/jpeg"/>
                    <ValidationError field="Referencia" prefix="Referencia" errors={state.errors} />
                </p>
               
                <div className="formImageContainer">
                        <Image
                            src={"/media/Pain-Chart.jpg"}
                            alt="Grafica de dolor"
                            width={500}
                            height={300}
                        />
                </div>
                
                <p className='field'>
                    <label className='label' htmlFor='Explicacion'>¿Qué quieres y donde?</label>
                    <textarea className='textarea' cols='50' id='Explicacion' name='Explicacion' rows='4' required 
                              placeholder='Explica el tattoo que quieres hacerte, si es a color, o blanco y negro, el estilo y donde lo quieres.'></textarea>
                    <ValidationError field="Explicacion" prefix="Explicacion" errors={state.errors} />
                </p>
                <p className='field'>
                    <label className='label' htmlFor='Disponibilidad'>Disponibilidad</label>
                    <textarea className='textarea' cols='50' id='Disponibilidad' name='Disponibilidad' rows='4' required 
                              placeholder='Explicanos que dias de la semana o a que horas puedes pasarte.'></textarea>
                    <ValidationError field="Disponibilidad" prefix="Disponibilidad" errors={state.errors} />
                </p>
               
                <p className='field'>
                    <input className='button' type='submit' value='Enviar'/>
                </p>
            </form>
}
const PiercingContact = () => {
    /* crear cuenta en formspree y usar el id */
    const [state, handleSubmit] = useForm('mgerqenw', {
        data: {
          pageTitle: 'Mensaje desde de prueba Piercing',
    }});
    if (state.succeeded) {
        return <div>¡Nos pondremos en contacto pronto! Revisa tu correo o estate atento a tu teléfono.</div>;
    }
   return  <form  onSubmit={handleSubmit} className='form'>
                <p className='field required'>
                    <label className='label required' htmlFor='name'>Full name</label>
                    <input className='text-input' id='name' name='name' required type='text'/>
                    <ValidationError field="name" prefix="name" errors={state.errors} />
                </p>
                <p className='field required half'>
                    <label className='label' htmlFor='email'>E-mail</label>
                    <input className='text-input' id='email' name='email' required type='email'/>
                    <ValidationError field="email" prefix="email" errors={state.errors} />
                </p>
                <p className='field half'>
                    <label className='label' htmlFor='phone'>Phone</label>
                    <input className='text-input' id='phone' name='phone' type='phone' required/>
                    <ValidationError field="phone" prefix="phone" errors={state.errors} />
                </p>
                <p className='field half'>
                    <label className='label' htmlFor='Artist'>Parte del cuerpo</label>
                    <select className='select' id='select'>
                        <option defaultValue='Sin preferencia'>Sin preferencia</option>
                        <option value='Oreja'>Oreja</option>
                        <option value='Boca'>Boca</option>
                        <option value='etc'>etc</option>
                    </select>
                    <ValidationError field="Artist" prefix="Artist" errors={state.errors} />
                </p>

                <p className='field half'>
                    <label className='label' htmlFor='edad'>Edad</label>
                    <input className='text-input' id='edad' name='edad' type='number' min="1" max="99" required/>
                    <ValidationError field="edad" prefix="edad" errors={state.errors} />
                </p>

                <p className='field'>
                    <label className='label' htmlFor='Disponibilidad'>Disponibilidad</label>
                    <textarea className='textarea' cols='50' id='Disponibilidad' name='Disponibilidad' rows='4' required 
                              placeholder='Explicanos que dias de la semana o a que horas puedes pasarte.'></textarea>
                    <ValidationError field="Disponibilidad" prefix="Disponibilidad" errors={state.errors} />
                </p>
               
                <p className='field'>
                    <input className='button' type='submit' value='Enviar'/>
                </p>
            </form>
}


export default function ContactFormTest() {
    return <Layout actual="contacto">
           <div className="contactFormsContainer">
            <Title center="Contacta con nosotros" sub={"Te guiamos para que pidas cita"}></Title>
            <Acordeon childs={[
                {title:"Ponte en contacto con nosotros",child:<SimpleContactForm/>},
                {title:"Pide cita para un tattoo",child:<TattooContact/>},
                {title:"Pide cita para un piercing",child:<PiercingContact/>}
            ]}></Acordeon>
           </div>
          </Layout>
            
  }