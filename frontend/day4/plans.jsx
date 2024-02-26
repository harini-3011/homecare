import Img from "../assets/images/plan.jpeg";
import "../assets/css/user/plan.css";
import { useState } from "react";
function Plans()
{
    const [cards] = useState([
        { id: 1, title: 'Weekly Plan', content: 'Perfect for individual looking for community support' ,amount: '$100',include1:'Access to online Events',include2:'Exclusive Value-Added Services'},
        { id: 2, title: 'Monthly Plan', content: 'Designed for old age people who want services on monthly bases',amount:'$400',include1:'24/7 Emergency Support',include2:'Assistance from Carrying Nest Daughter' },
        { id: 3, title: 'Yearly Plan', content: 'Good for people who want yearly plan',amount:'$3000',include1:'Unlimited Doctor Teleconsultation',include2:'28+ Additional Care Services' }
      ]);
    return(
        <>
        <div className="plan-container">
            <div className="p1"> 
            {cards.map(card => (
               <div key={card.id} className="card">
               <h2>{card.title}</h2>
               <p>{card.content}</p>
               <strong>{card.amount}</strong>
               <p>{card.include1}</p>
               <p>{card.include2}</p>
               <button className="planbtn">Add Plan</button>
               </div>
            ))}
            </div>
        <img className="planimage"src={Img}></img>
        </div>
        </>
    );
}
export default Plans