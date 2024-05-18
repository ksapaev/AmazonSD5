import { Link } from "react-router-dom";
import "./ContactCard.css"; 

const ContactCard = ({ contact, onDelete }) => {
  const handleDelete = async () => {
    try {
      await onDelete(contact.id);
    } catch (error) {
      console.log("Error deleting contact:", error);
    }
  };

  return (
    <div className="contact-card">
      <p>{contact.name}</p>
      <p>{contact.phone_number}</p>
      <div>
        <button className="button-del" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;