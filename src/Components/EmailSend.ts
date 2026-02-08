import emailjs from 'emailjs-com';

const sendEmail = (from_name: string, message: string, reply_to: string, email: string) => {
    //Set the parapms of the email tenmplate
    const templateParams = {
        from_name: from_name,
        message: message,
        reply_to: reply_to,
        email: email
    };

    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY) //send the email to the given address
        .then((res) => {
            //log the resoult of the process
            console.log("Email send. " + res);
            alert("Chack your email notifications.")
        })
        .catch((err) => {
            //Thorw an error
            console.error("Error: ", err);
            alert("An internal error occurd. Please make contact with us.");
        });
}

export default sendEmail;