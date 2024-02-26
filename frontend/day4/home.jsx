import Img from "../assets/images/home.jpeg";
import "../assets/css/user/home.css";
import Img1 from "../assets/images/chemical-analysis.png";
import Img2 from "../assets/images/car.png";
import Img3 from "../assets/images/stay-at-home.png";
import Img4 from "../assets/images/laboratory.png";
import Img5 from "../assets/images/operator.png";
import Img6 from "../assets/images/about.jpeg";
import Img7 from "../assets/images/aboutbelow.jpeg";
import Facebook from "../assets/images/facebook.png";
import Insta from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import { Link } from "react-router-dom";

function Home()
{
    return(
        <>
        <div className="home-container">
                <div className="ho1">
                    <h1 className="first">Helping Seniors Become</h1>
                    <h1 className="second">Independent</h1>
                    <h3 className="third">Superior and Affordable Services</h3>
                 <Link to="/connect"><button className="homebtn">Connect with us</button></Link>   
                </div>
                <img className="homeimage" src={Img} alt="homepageimage" />
                {/* <div className="homeone">
                    <h1 className="text1">Help your parents age magnificently with
                    Indias<br></br> most trusted senior care brand</h1>
                </div> */}
                <div className="topsecond">
                <h1 className="help">How we help</h1>
                <div className="homesecond">
                    <div className="homecard">
                       <img className="homecardimg"src={Img1} alt="Image 1"></img>
                       <p>Medical equipment & devices</p>
                     </div>
                     <div className="homecard">
                       <img className="homecardimg"src={Img2} alt="Image 1"></img>
                       <p>Convenience</p>
                     </div>
                     <div className="homecard">
                       <img className="homecardimg"src={Img3} alt="Image 1"></img>
                       <p>Home health care</p>
                     </div>
                     <div className="homecard">
                       <img className="homecardimg"src={Img4} alt="Image 1"></img>
                       <p>Lab & diagnostics</p>
                     </div>
                     <div className="homecard">
                       <img className="homecardimg"src={Img5} alt="Image 1"></img>
                       <p>Teleconsultation</p>
                     </div>
                </div>
                </div>
                <div className="aboutcontent">
                 <h1>  Welcome to the world of Caring Nest</h1>
                <h1 className="hashone">     #1 elder care brand</h1> 
                        </div>
                <div className="about-container">
                    
                    <img src={Img6} className="aboutimg"></img>
                </div>
                <div className="about-below">
                  <div className="aboutbelowcontent">
                    <h1 className="about1">Who we are</h1>
                    <p className="about2">Our mission is to enrich the lives of seniors by providing exceptional home care services that
                       promote independence, dignity, and a sense of well-being.
                       We are committed to delivering compassionate care with integrity, respect, and professionalism.</p>
                       <p className="about3">Caring Nest is a leading provider of home care services for seniors . With years of experience in the industry, our team is comprised of 
                        skilled and compassionate caregivers who are passionate about making a positive difference in the lives of our clients.</p>
                  </div>
                  <img  className="aboutbelowimg"src={Img7}></img>
                </div>
        <div className="footer">
                <div className="footercontact">
                      <h2 className="fcontact1">Contact Us</h2>
                      <p className="fcontact2">Caring Nest<br />
                        xyz street,abc city-621713 <br />
                        Phone:0000000000<br />
                        Email: <a className="fcontact3"href="mailto:abc@gmail.com">abc@gmail.com</a></p>
                </div>
                <div className="support">
                      <h2 className="support1">Support</h2>
                      <a className="support1"href="/plans">Plans</a><br></br>
                      <a className="support1"href="/media">Media</a><br></br>
                      <a className="support1"href="/services">Services</a><br></br>
                      <a className="support1"href="/contact">Contact</a><br></br>
                </div>
                <div className="mediaicons">
                      <h2 className="fmedia1">Connect with</h2>
                      <a className="fmedia2"href="https://www.facebook.com/"><img className="mediaimg"src={Facebook}></img></a>
                      <a className="fmedia3"href="https://www.instagram.com/"><img className="mediaimg"src={Insta}></img></a>
                      <a className="fmedia4"href="https://twitter.com/?lang=en"><img className="mediaimg"src={Twitter}></img></a>
                </div>
        </div>
        <div className="copy">Copyright@CaringNest2024</div>
                
        </div>
        
        </>
    );
}
export default Home