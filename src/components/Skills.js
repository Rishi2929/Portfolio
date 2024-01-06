import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Explore a snapshot of my technical expertise. From crafting responsive user interfaces with React JS to building robust server-side applications using Express JS and Node JS, my skills form a diverse toolkit for creating dynamic web solutions. Dive into the realm of MongoDB for seamless data management. Proficient in the fundamentals of HTML, CSS, and JavaScript, I bring creativity to code and design. Discover the fusion of technology and creativity in my skill set!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Express JS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Javascript</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
