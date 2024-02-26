import "../assets/css/user/media.css";
import Img from "../assets/images/media.jpeg";
import PropTypes from 'prop-types';
function MediaCard({ title, description,  youtubeUrl }) {
    return (
        <div className="media-card">
            
            <div className="media-details">
                <h2 className="firstmedia">{title}</h2>
                <p className="secondmedia">{description}</p>
                <iframe
                    width="560"
                    height="315"
                    src={youtubeUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
MediaCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    youtubeUrl: PropTypes.string.isRequired
};
function Media()
{
    const cards = [
        {
            id: 1,
            title: "Growing Old Is A Blessing from God TedX",
            description: "Maria Alejandro",
    
            youtubeUrl: "https://www.youtube.com/embed/itxI9aNW3UU?si=je63LOrEz5RakLDv"
        },
        {
            id: 2,
            title: "Dare to Question Why We Are So Afraid of Getting Older",
            description: "Scilla Elworthy",
           
            youtubeUrl: "https://www.youtube.com/embed/J6zenOjPC1A?si=MRBz2aDSuOAjF4Ji"
        },
        {
            id: 3,
            title: "Let's change the way we think about old age ",
            description: " ​Zaria Gorvett",
            
            youtubeUrl: "https://www.youtube.com/embed/IV0VlrtETJU?si=6iZHtrjLrYjB07f0" 
        }
    ];
    const news = [
        {
            id: 1,
            title: "BBC",
            description: "Maria Alejandro",
    
            youtubeUrl: "https://www.bbc.com/"
        },
        {
            id: 2,
            title: "THE NEW YOUR TIMES",
            description: "Scilla Elworthy",
           
            youtubeUrl: "https://www.nytimes.com/international/"
        },
        {
            id: 3,
            title: "NATIONAL GEOGRAPHIC",
            description: " ​Zaria Gorvett",
            
            youtubeUrl: "https://www.nationalgeographic.com/" 
        }
    ];
    return(
        <>
        <div className="media-container">
            <div className="media-top">
                <h1 className="media1">Connecting elders through the screen</h1>
                <p className="media2"> Bridging the digital divide for senior citizens through media integration fosters a sense of inclusion and belonging in todays rapidly evolving technological landscape.</p>
            </div>
            <img className="mediaimage"src={Img}></img>
            <div className="tedx">TedX talks on old age</div>
            <div className="media-content">
            {cards.map(card => (
                <MediaCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    
                    youtubeUrl={card.youtubeUrl}
                />
            ))}
            </div>
            <div className="newspaper">Daily News</div>
            <div className="media-content">
            {news.map(news=> (
                <MediaCard
                    key={news.id}
                    title={news.title}
                    description={news.description}
                    
                    youtubeUrl={news.youtubeUrl}
                />
            ))}
            </div>
        </div>
        
        </>
    );
}
export default Media