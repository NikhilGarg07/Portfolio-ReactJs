import { useState, useEffect, useRef } from "react";
import Loader from "react-loaders"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refform = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7hnmfql', 'template_7g43fln', refform.current, 'YeMKrIliV5bfLQBqA')
            .then(() => {
                alert('Message sent sucessfully');
                window.location.reload()
            },
                () => {
                    alert('Failed to send message');
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        Feel free to reach out to me
                    </p>
                    <div className="contact-form">
                        <form ref={refform} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea type="text" name="message" placeholder="Message" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Backside Rama Ice Factory,
                    <br />
                    Barnala, 148101 <br />
                    Punjab, India <br />
                    <br />
                    <span>nikhilgarg7129@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[30.37964,75.546121]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[30.37964,75.546121]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;