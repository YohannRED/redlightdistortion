import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Videos.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";


function Videos(){
  return (<div className="container">
    <Header />
    <div  className="videos-container">
    <TitleComponent titleContent="Videos" />
      <div className="videos-list">
          <iframe 
                  className="video-frame"
                  src="https://www.youtube.com/embed/p0Y52_ej810"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen />
          <iframe 
                  className="video-frame"
                  src="https://www.youtube.com/embed/1dG4USdI4gk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen />
          <iframe 
                  className="video-frame"
                  src="https://www.youtube.com/embed/gTMZEDhnLUI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen />


      </div>
    </div>
    <Footer />
  </div>)
}

export default Videos;
