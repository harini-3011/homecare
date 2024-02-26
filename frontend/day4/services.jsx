import "../assets/css/user/service.css";
import Img from "../assets/images/service.jpeg";
import PropTypes from 'prop-types';
import one from "../assets/images/one.jpeg";
import two from "../assets/images/two.jpeg";
import three from "../assets/images/three.jpeg";
import four from "../assets/images/four.jpeg";
import five from "../assets/images/five.jpeg";
import six from "../assets/images/six.jpeg";
import seven from "../assets/images/seven.jpeg";
import eight from "../assets/images/eight.jpeg";
const ServiceCard = ({ image,serviceName,description,cost }) => {
    return (
      <div className="service-card">
        <img src={image} alt={serviceName} />
        <h3>{serviceName}</h3>
        <p>{description}</p>
        <p>Cost: ${cost}</p>
        <button>Buy Now</button>
      </div>
    );
  };
  ServiceCard.propTypes = {
    serviceName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired
};
function Service()
{
  
    const services = [
        {
          image: one,
          serviceName: '24/7 Emergency Coordination',
          description: 'Get 24*7 emergency support with ambulance coordination',
          cost: 50
        },
        {
          image: two,
          serviceName: 'Ambulance Evacuation Expenses',
          description: 'Get all ambulance expenses within the city limit covered by Caring Nest',
          cost: 75
        },
        {
            image: three,
            serviceName: 'Emergency Doctor on Call',
            description: 'Get immediate medical support with our emergency doctor on call',
            cost: 75
          },
          {
            image: four,
            serviceName: 'Helpdesk for Medicines',
            description: 'With out helpdesk,you can book a doctors appointment',
            cost: 75
          },
          {
            image: five,
            serviceName: 'Celebration of Special Days',
            description: 'Celebrate birthdays and special days in style with our personalized celebrations',
            cost: 75
          }, {
            image: six,
            serviceName: 'Caring Nest Daughter',
            description: 'Enjoy care suppor from Caring Nest Daughter',
            cost: 75
          }, {
            image: seven,
            serviceName: 'Unlimited Teleconsultation',
            description: 'Get easy access to medical advice with unlimited doctor teleconsultation',
            cost: 75
          }, {
            image: eight,
            serviceName: 'Exclusive Online Clubs',
            description: 'Get access to a range of exclusive online clubs',
            cost: 75
          }
        
      ];
    return(
        <>
            <div className="service-container">
                <div className="service-content">
                    <h1 className="serviceone">Redefining Senior Care Services with Heartfelt Compassion</h1>
                    <p className="servicetwo"> We strive to transform lives by providing compassionate and personalized care,
                         ensuring seniors receive the support they need to thrive in their own homes.</p>
                </div>
                <img className="serviceimg"src={Img}></img>
            </div>
            <div className="service-list">
                {services.map((services, index) => (
                <ServiceCard key={index} 
                             image={services.image}
                             serviceName={services.serviceName}
                             description={services.description}
                             cost={services.cost}/>
                ))}
            </div>
            
        </>
    );
}
export default Service