import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from '../supabaseClient';
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState(""); 
  const [newPhone, setNewPhone] = useState(""); 
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newContact || !newPhone) {
      setFormError("Both fields are required!");
      return;
    }

    const nameParts = newContact.trim().split(" ");
    if (nameParts.length < 2) {
      setFormError("Please enter both first and last names");
      return;
    }

    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(newPhone)) {
      setFormError("Phone number must be in the format xxx-xxx-xxxx");
      return;
    }

    const { error } = await supabase.from("contacts").insert({
      name: newContact,
      phone_number: newPhone,
    });

    if (error) {
      console.log(error);
      setFormError("Both fields are required!");
    } else {
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <div className="create-page">
      <form onSubmit={handleSubmit}>

        <label htmlFor="newContact">Contact Name:</label>
        <input
          type="text"
          placeholder="Add First and Last name"
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
        />

        <label htmlFor="newPhone">Contact Phone:</label>
        <input
          type="text"
          placeholder="Add a phone number (xxx-xxx-xxxx)"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
        />

        <button type="submit">Add New Contact</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;