import ContactCard from "../pages/ContactCard";
import supabase from '../supabaseClient';
import { useEffect, useState } from "react";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data, error } = await supabase.from("contacts").select();

        if (error) {
          throw new Error("Could not fetch the contacts");
        }

        setContacts(data);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
        setContacts(null);
      }
    };

    fetchContacts();
  }, []);

  const handleContactDelete = async (deletedContactId) => {
    try {
      const { error } = await supabase
        .from("contacts")
        .delete()
        .eq("id", deletedContactId);

      if (error) {
        throw new Error("Failed to delete contact");
      }

      setContacts(contacts.filter((contact) => contact.id !== deletedContactId));
    } catch (error) {
      console.log("Error deleting contact:", error);
    }
  };

  return (
    <div className="home">
      {fetchError && <p>{fetchError}</p>}
      {contacts && (
        <div className="contact-grid">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onDelete={handleContactDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;