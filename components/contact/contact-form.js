"use client"
import axios from 'axios';
import classes from './contact-form.module.css'
import { useEffect, useState } from 'react';
import Notification from '../notification/notification';


function ContactForm() {
    const [formData, setFormData] = useState({ email: "", name: "", message: "" });
    const [requestStatus, setRequestStatus] = useState();

    useEffect(() => {
        if (requestStatus == 'success' || requestStatus == 'error') {

            const timer = setTimeout(() => {
                setRequestStatus(null)

            }, 3000)

            return () => clearTimeout(timer)


        }
    }, [requestStatus])

    const handleSubmit = async (e) => {

        e.preventDefault();

        setRequestStatus("pending")
        const { data, status } = await axios.post("http://localhost:8000/api/feedback", formData);


        if (status === 201) {

            setRequestStatus("success")
            setFormData({ email: "", name: "", message: "" });
        } else {
            setRequestStatus("error")

        }
    };


    let notification;

    if (requestStatus === "pending") {
        notification = {
            status: "pending",
            title: "Sending message..",
            message: "Your message is on its way!"
        }
    }
    if (requestStatus === "success") {
        notification = {
            status: "success",
            title: "Success!",
            message: "Your message send Successfully!"
        }
    }
    if (requestStatus === "error") {
        notification = {
            status: "error",
            title: "Something Went Wrong!",
            message: "PLease Try Again"
        }
    }

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));


    }


    return (
        <section className={classes.contact}>
            <h1>How Can I Help Uh?</h1>
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            onChange={handleChange}
                            value={formData.email}
                        />

                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            onChange={handleChange}
                            value={formData.name}
                        />

                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        rows="5"
                        name="message"
                        id="message"
                        onChange={handleChange}
                        value={formData.message}
                    />

                </div>
                <div className={classes.actions}>
                    <button type="submit">Send Message</button>
                </div>


            </form>
            {
                notification && <Notification status={notification.status} title={notification.title} message={notification.message} />
            }
        </section>
    );

}





export default ContactForm;