import React, { FormEvent, useState } from 'react';
import SendIcon from '@mui/icons-material/Send'; // MUI Send icon
import './form.css';
import { db } from '../../../configs/firebaseConfig'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods
import { serverTimestamp } from "firebase/firestore";

const formInputs = [
  { id: "name", type: "text", label: "Your name", placeholder: "John Doe" },
  { id: "tel", type: "tel", label: "Phone number", placeholder: "optional" },
  { id: "email", type: "email", label: "Email address", placeholder: "you@example.com" },
  { id: "message", type: "textarea", label: "Your message", placeholder: "How can we help you?" },
];

const Form: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);

    // Extract data into an object
    const messageData = {
      name: formData.get("name") as string,
      tel: formData.get("tel") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      time: serverTimestamp(), // Add a timestamp
    };

    try {
      // Add the message to Firestore
      await addDoc(collection(db, "messages"), messageData);
      alert("Your message has been sent successfully!");
      (e.target as HTMLFormElement).reset(); // Reset the form
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={sendMessage}>
      <h2 className="form-h2">Send us a message</h2>

      {formInputs.map((input) => (
        <label key={input.label} htmlFor={input.id} className="form-label">
          {input.label}
          {input.type === "textarea" ? (
            <textarea
              className="form-textarea"
              id={input.id}
              name={input.id}
              placeholder={input.placeholder}
              required={input.id !== "tel"}
            />
          ) : (
            <input
              className="form-input"
              id={input.id}
              type={input.type}
              name={input.id}
              placeholder={input.placeholder}
              required={input.id !== "tel"}
            />
          )}
        </label>
      ))}

<div className="form-submit-circle">
  <button type="submit" className="form-submit-icon" disabled={loading}>
    <SendIcon />
  </button>
</div>
      {/* <button type="submit" className="form-submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button> */}
    </form>
  );
};

export default Form;
