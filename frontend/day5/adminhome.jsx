import "../assets/css/user/adminhome.css";
import sidebarImage from "../assets/images/adminhome.png";
import { useState } from "react";
import one from "../assets/images/one.jpeg";
import two from "../assets/images/two.jpeg";
import three from "../assets/images/three.jpeg";
import four from "../assets/images/four.jpeg";
import five from "../assets/images/five.jpeg";
import {Link} from "react-router-dom";
import { useRef } from "react";
function AdminHome()
{
    const sidebarRef = useRef(null);

    const handleItemClick = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    };
    
      const [cards, setCards] = useState([
        { id: 1, title: '24/7 Emergency Coordination', content: 'Get 24*7 emergency support with ambulance coordination',image:one,cost:'$50' },
        { id: 2, title: 'Ambulance Evacuation Expenses', content: 'Get all ambulance expenses within the city limit covered by Caring Nest',image:two,cost:'$70' },
        { id: 3, title: 'Emergency Doctor on Call', content: 'Get immediate medical support with our emergency doctor on call',image:three,cost:'$60' },
        { id: 4, title: 'Helpdesk for Medicines', content: 'With out helpdesk,you can book a doctors appointment',image:four,cost:'$80' },
        { id: 5, title: 'Celebration of Special Days', content: 'Celebrate birthdays and special days in style with our personalized celebrations',image:five,cost:'$70' }
      ]);
      const [editingCard, setEditingCard] = useState(null);

  const handleEditClick = (id) => {
    setEditingCard(id);
  };

  const handleSaveClick = () => {
    setEditingCard(null);
  };

  const handleTitleChange = (e, id) => {
    const newTitle = e.target.value;
    setCards(cards.map(card => (card.id === id ? { ...card, title: newTitle } : card)));
  };

  const handleContentChange = (e, id) => {
    const newContent = e.target.value;
    setCards(cards.map(card => (card.id === id ? { ...card, content: newContent } : card)));
  };
  const handleCostChange = (e, id) => {
    const newCost = e.target.value;
    setCards(cards.map(card => (card.id === id ? { ...card, cost: newCost } : card)));
  };
  const handleImageChange = (e, id) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCards(cards.map(card => (card.id === id ? { ...card, image: reader.result } : card)));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
      const addCard = () => {
        const newCard = {
          id: cards.length + 1,
          title: `Card ${cards.length + 1}`,
          content: `This is the content of Card ${cards.length + 1}.`,
          image:null,
          cost:'$0'
        };
        setCards([...cards, newCard]);
      };
    
      const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
      };
      const [feedback] = useState([
        { name: 'John Doe', email: 'john@example.com', feedbackText: 'Great service!' },
        { name: 'Jane Smith', email: 'jane@example.com', feedbackText: 'Very helpful staff.' },
        { name: 'Alice Johnson', email: 'alice@example.com', feedbackText: 'Excellent experience!' },
        { name: 'Bob Brown', email: 'bob@example.com', feedbackText: 'Impressed with the quality of service.' }
      ]);
      const [persons] = useState([
        { name: 'John Doe', email: 'john@example.com', service: '24/7 Emergency Coordination' },
        { name: 'Jane Smith', email: 'jane@example.com', service: 'Ambulance Evacuation Expenses' },
        { name: 'Alice Johnson', email: 'alice@example.com', service: 'Celebration of Special Days' },
        { name: 'Bob Brown', email: 'bob@example.com', service: 'Emergency Doctor on call' },
        { name: 'Charlie Davis', email: 'charlie@example.com', service: 'HelpDesk for Medicine' }
      ]);
      
     
    return(
        <>
        <div className="sidebar-container">
                <div className="sidebar" ref={sidebarRef}>
                    <ul>
                        <li className="sidebarcontent"onClick={() => handleItemClick("home")}>Home</li>
                        <li className="sidebarcontent"onClick={() => handleItemClick("services")}>Services</li>
                        <li className="sidebarcontent"onClick={() => handleItemClick("feedback")}>Feedback</li>
                        <li className="sidebarcontent"onClick={() => handleItemClick("userProfile")}>UserProfile</li>
                        <Link to="/adminlogin"><li className="sidebarcontent">Logout</li></Link>
                    </ul>
                 </div>
             <div className="sidebar-image" id="home">
             <div className="sidebar-overlay">
                    <h1>Empowering Senior Citizens: A Caretakers Compassionate Commitment</h1>
                    <p> With compassion and commitment, you provide essential support, companionship, and assistance in daily activities, 
                        ensuring their well-being and dignity are upheld with every interaction.</p>
              </div>
                    <img src={sidebarImage} alt="Sidebar" />
             </div>
             <div className="addservice-container"id="services">
             <h1 className="addservice">Add a new Service</h1>
             <button className="add-card-button"onClick={addCard}>Add Service</button>
             </div>
             <div className="admincard-container">
             {cards.map(card => (
                <div key={card.id} className="admincard">
                {editingCard === card.id ? (
            <>
              <label className="adminlabel">Service Name:</label>
              <input className="admininput1" type="text" value={card.title} onChange={(e) => handleTitleChange(e, card.id)} /><br></br><br></br>
              <label className="adminlabel">Service Description:</label>
              <textarea className="admininput2"value={card.content} onChange={(e) => handleContentChange(e, card.id)} /><br></br><br></br>
              <label className="adminlabel">Choose Image:</label>
              <input className="admininput3"type="file" onChange={(e) => handleImageChange(e, card.id)} /><br></br>
              <label className="adminlabel">Cost:</label><br></br>
                <input className="admininput4" type="text" value={card.cost} onChange={(e) => handleCostChange(e, card.id)} />
                <br></br><br></br>
              <button className="save-card-button"onClick={() => handleSaveClick(card.id)}>Save</button>
              <button className="delete-card-button" onClick={() => deleteCard(card.id)}>Delete</button>
            </>
          ) : (
            <>
              <img className="admincardimg"src={card.image} alt="Card" />
              <h3>{card.title}</h3>
              <p>{card.content}</p>
              <p>{card.cost}</p>
              <button className="admineditbtn"onClick={() => handleEditClick(card.id)}>Edit</button>
            </>
          )}
          
        </div>
       
          ))}
           </div>
        </div>
        <div className="feedback-container" id="feedback">
             <h1 className="feedback-heading">Customer Feedback</h1>
             <div className="customer-feedback">
                {feedback.slice(0, 5).map((feedbackItem, index) => (
                <div key={index} className="feedback-item">
                <p><strong>Name:</strong> {feedbackItem.name}</p>
                <p><strong>Email:</strong> {feedbackItem.email}</p>
                <p><strong>Feedback:</strong> {feedbackItem.feedbackText}</p>
      </div>
      
    ))}
  </div>
  <div className="customer-list-container" id="userProfile">
        <h2>Customer List</h2>
        <div className="customer-list"> 
          {persons.map((person, index) => (
             <div key={index} className="customer-item">
             <p className="customer-name">{person.name}</p>
             <p className="customer-email">{person.email}</p>
             <p className="customer-service">{person.service}</p>
           </div>
          ))}
        </div>
      </div>
</div>

        </>
    );
}
export default AdminHome