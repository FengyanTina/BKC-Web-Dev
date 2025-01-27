import SendIcon from "@mui/icons-material/Send"; // MUI Send icon
import "./form.css";
import emailjs from "emailjs-com";
import "./form.css";
import { FormEvent } from "react";

const formInputs = [
  { id: "name", type: "text", label: "Your name", placeholder: "John Doe" },
  {
    id: "tel",
    type: "tel",
    label: "Phone number",
    placeholder: "+01 234 567 8900",
  },
  {
    id: "email",
    type: "email",
    label: "Email address",
    placeholder: "you@example.com",
  },
  {
    id: "message",
    type: "textarea",
    label: "Your message",
    placeholder: "How can we help you?",
  },
];

const Form: React.FC = () => {
  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const userId = import.meta.env.VITE_EMAILJS_USER_ID || "";

    if (!serviceId || !templateId || !userId) {
      console.error("EmailJS environment variables are missing!");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target as HTMLFormElement, userId)
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

  return (
    <form className="form" onSubmit={sendEmail}>
      <h2 className="form-h2">Send us a message</h2>

      {formInputs.map((input) => (
        <label key={input.label} id={input.id} className="form-label">
          {input.label}

          {input.type === "textarea" ? (
            <textarea
              className="form-textarea"
              name={input.id}
              placeholder={input.placeholder}
              required={input.id !== "tel"}
            />
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
    </form>
  );
};

export default Form;
