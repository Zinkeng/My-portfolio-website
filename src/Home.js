

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="profile">
                    <img src={require("./Anne.JPG")} alt="Zinkeng"/>
                    <h1>Ajongafac Zinkeng Mbetem</h1>
                    <p>Graphic designer & Software Developer</p>   
                </div>
            </div>
            <div className="aboutpage">
                <div className="aboutme">
                <p>Discover</p>
                
               </div>
                <div className="container">
                <div className="image">
                    <img src={require("./Anne2.JPG")} alt="Zinkeng"/>
                    </div>

                    <div className="text">
              
                    <p>About me{'\n'}
                    My name is Ajongafac Zinkeng Mbetem. I am a Software engineer aspirant and graphic designer, based in Buea, Cameroon. I’m very passionate and dedicated to my work. With my three years experience in engineering school, I have acquired the skills necessary to build great and premuim websites, applications and softwares. I am particularly interested in open souce community projects and projects that brings about innovation in the Cameroon tech space and beyond.</p>
                    </div>

                    <div className="bio">

                    <ul>
                        <li>Name: Ajongafac Zinkeng Mbetem</li>
                        <li>Age: 20 years</li>
                        <li>Address: Buea, Cameroon</li>
                        <li>Phone: (+237) 682743056</li>
                        <li>E-mail: ajongafaczinkeng@gmail.com</li>
                        <li>Github link: https://github.com/Zinkeng</li>
                    </ul>
                    </div>
                </div> 
            </div>   
            
        </div>
        
    );
}
 
export default Home;