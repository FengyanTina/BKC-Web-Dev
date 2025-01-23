
import SendIcon from '@mui/icons-material/Send'; // MUI Send icon
import './form.css';
import emailjs from "emailjs-com";

import './form.css'
import { FormEvent } from 'react';
import { EMAIL_CONFIG } from '../../../configs/emailJSConfig';

const formInputs = [
    { id: "name", type: "text", label: "Your name", placeholder: "John Doe" },
    { id: "tel", type: "tel", label: "Phone number", placeholder: "+01 234 567 8900" },
    { id: "email", type: "email", label: "Email address", placeholder: "you@example.com" },
    { id: "message", type: "textarea", label: "Your message", placeholder: "How can we help you?" }
  ];


const Form : React.FC = () => {
   const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!EMAIL_CONFIG.SERVICE_ID || !EMAIL_CONFIG.TEMPLATE_ID || !EMAIL_CONFIG.USER_ID) {
        console.error("EmailJS environment variables are missing!");
        return;  // Don't proceed if the environment variables are missing
      }
      
    emailjs
    .sendForm(
        EMAIL_CONFIG.SERVICE_ID, // Use the service ID from config
        EMAIL_CONFIG.TEMPLATE_ID, // Use the template ID from config
        e.target as HTMLFormElement, // Explicitly cast to HTMLFormElement
        EMAIL_CONFIG.USER_ID // Use the user ID from config
      )
  
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );

    (e.target as HTMLFormElement).reset(); // Reset the form fields after submission
  };


return(
   <form className="form"  onSubmit={sendEmail}>
     <h2 className="form-h2">Send us a message</h2>
 
     {formInputs.map(input => (
       <label key={input.label} id={input.id} className="form-label">
         {input.label}
 
         {input.type === 'textarea' ? (
           <textarea 
           className="form-textarea" 
           name={input.id}
           placeholder={input.placeholder}  
           required={input.id !== "tel"}/>
         ) : (
           <input
             className="form-input"
             type={input.type}
             name={input.id}
             placeholder={input.placeholder}
             required={input.id !== "tel"}
           />
         )}
       </label>
     ))}
  <div className="form-submit-circle">
  <button type="submit" className="form-submit-icon">
    <SendIcon className="form-submit" />
  </button>
    </div>
    {/* <button type="submit" className="form-submit">
        Send Message
      </button> */}
   
   </form>
  );
};

export default Form



// import React, { useState } from "react";
// import { useFirebase } from "../context/FirebaseContext";
// import { collection, addDoc } from "firebase/firestore";

// const ContactForm: React.FC = () => {
//   const { db } = useFirebase(); // Access Firestore from context
//   const [formData, setFormData] = useState({ name: "", message: "" });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await addDoc(collection(db, "contacts"), formData);
//       alert("Message sent successfully!");
//       setFormData({ name: "", message: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Failed to send message.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//       />
//       <textarea
//         placeholder="Your Message"
//         value={formData.message}
//         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactForm;
