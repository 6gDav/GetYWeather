import emailjs from 'emailjs-com';

const sendEmail = (from_name: string, message: string, reply_to: string, email: string) => {
    const templateParams = {
        from_name: from_name,
        message: message,
        reply_to: reply_to,
        email: email
    };

    emailjs.send("service_zskt8rb", "template_wsq91jh", templateParams, "I5-in5jpHK-08Tn1L")
        .then((res) => {
            console.log("Email send. " + res);
            alert("Chack your email notifications.")
        })
        .catch((err) => {
            console.error("Error: ", err);
            alert("An internal error occurd. Please make contact with us.");
        });
}

export default sendEmail;