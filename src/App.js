import { FaPlusCircle, FaSearch } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import ContactCard from "./components/ContactCard";
import Model from "./components/Model";
import useShowHide from "./hooks/useShowHide";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery ,setSearchQuery] = useState("");

  const { show, handleHideModel, handleShowModel, setShow } = useShowHide();

  // without hook vvvvvvv
  // const [show,setShow] = useState(false)
  // const handleShowModel = () => setShow(true)
  // const handleHideModel = () => setShow(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactCollection = collection(db, "contacts");
        // const contactSnapShot = await getDocs(contactCollection)

        onSnapshot(contactCollection, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          console.log(contactList);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);


  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) // Search by name or email
  );
  return (
    <div className={`App `}>
      <Navbar />
      <div className="search_bar mt-3 mx-3">
        <form
          className="d-flex position-relative align-items-center search_form"
          role="search"
        >
          <FaSearch className="search_icon position-absolute ms-2" />

          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            
          />
          <FaPlusCircle className="add_icon mx-2" onClick={handleShowModel} />
        </form>
      </div>

      <div>
        <Model show={show} handleHideModel={handleHideModel} />
      </div>

      <div className="card_container">
          <div className="mt-3 d-flex flex-column gap-3 card_contact">
            {
              filteredContacts.length > 0 ? (
                filteredContacts?.map((contact) => (
                  <ContactCard key={contact.id} contact={contact} />
                ))

              ) : (
                <div className="text-white d-flex justify-content-center fs-5 fw-semibold">
                  <p>Contacts Not Found</p>

                </div>
              )
            }
          </div>

      </div>

      {/* <h1>hare krishna</h1> */}
      <ToastContainer
        position="bottom-center"
       
      />
    </div>
  );
}

export default App;
