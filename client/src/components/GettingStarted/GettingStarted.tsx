import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import video from "../../assets/video.mp4";
import CarouselImages from "../CarouselImages/CarouselImages";
import "./style.scss";
import { tabContents } from "./tabs";

const GettingStarted = () => {
  const imgSrcs = [
    "https://wodprep.com/wp-content/uploads/2023/05/Ultimate-Plan-To-A-Competitive-CrossFit-Athletes-Diet-1-scaled.jpg",
    "https://cdn.mos.cms.futurecdn.net/SRHfobqEogfcMYE5V5MF98-1200-80.jpg",
    "https://www.crossfit.com/wp-content/uploads/2023/11/13131232/crossfit-coach-led-fitness-training-adapted-for-you-handstand-hold.jpg",
  ];

  return (
    <>
      <div id="getting-started">
        <div className="container">
          <Tab.Container defaultActiveKey="first">
            <div className="title">
              Discover CrossFit: Your Path to Total Fitness
            </div>
            <Nav>
              <Nav.Link eventKey="first">What is CrossFit?</Nav.Link>
              <Nav.Link eventKey="second">
                What Can CrossFit Do For You?
              </Nav.Link>
            </Nav>
            <Tab.Content>
              {tabContents &&
                tabContents.map((tab, index) => (
                  <Tab.Pane key={index} eventKey={tab.eventKey}>
                    {tab.content}
                  </Tab.Pane>
                ))}
            </Tab.Content>
          </Tab.Container>
        </div>
        <CarouselImages imgSrcs={imgSrcs} />
      </div>
      <div className="video-container">
        <video src={video} autoPlay loop muted></video>
      </div>
    </>
  );
};

export default GettingStarted;
