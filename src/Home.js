const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="profile">
          <img src={require("./Anne.JPG")} alt="Zinkeng" />
          <h1>Ajongafac Zinkeng Mbetem</h1>
          <p>Graphic designer & Software Developer</p>
        </div>
      </div>
      <div className="aboutpage">
        <div className="container">
        <div  className="image">
            <img src={require("./Anne3.JPG")} alt="Zinkeng" />
          </div>

          <div className="text">
          <h3 id="discover">Discover</h3>
          <h4 style={{fontSize:"28px"}}>About Me</h4>
          <hr style={{width: "60px"}}/>
            <p id="msg">
              My name is Ajongafac Zinkeng Mbetem. I am a <br /> Software engineer
              aspirant and graphic designer,<br /> based in Buea, Cameroon. I’m very
              passionate and<br /> dedicated to my work. With my three years
              experience<br /> in engineering school, I have acquired the skills<br />
              necessary to build great and premuim websites,<br />applications and
              softwares. I am particularly interested<br />in open source community
              projects and projects that<br /> brings about innovation in the Cameroon
              tech space<br /> and beyond.
            </p>
          

          <div id="bio">
            <ul>
              <li>Name: Ajongafac Zinkeng Mbetem</li>
              <li>Age: 20 years</li>
              <li>Address: Buea, Cameroon</li>
              <li>Phone: (+237) 682743056</li>
              <li>E-mail: ajongafaczinkeng@gmail.com</li>
              <li>Github link: https://github.com/Zinkeng</li>
            </ul>
          </div>
          <button>Download CV</button>
          </div>
        </div>
      </div>

      <div className="services">
      <h3 id="discover" style={{marginLeft:"100px", marginTop:"100px"}}>What I do</h3>
          <h4 style={{fontSize:"28px", marginLeft:"100px"}}>My Services</h4>
          <hr style={{width: "60px", marginLeft:"100px"}}/>
        <div className="services-boxes">
        <div className="box">
          <div className="box-text">
          <h3>Graphic Design</h3>
          <p>Design flyers, posters, logos and branding</p>
          </div>
        </div>
        <div className="box">
          <div className="box-text">
        <h3>User Interfaces</h3>
          <p>Design user interfaces for both web and mobile applications</p>
          </div>
        </div>
        <div className="box">
        <div className="box-text">
        <h3>Front-end web development</h3>
          <p>Implement  front-end  web applications</p>
          </div>
        </div>
        <div className="box">
        <div className="box-text">
        <h3>Mobile app development</h3>
          <p>Create native mobile applications for both ios and android.</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
