import "./index.scss";
import message from "../../assets/svg/message.svg"
import scrollDown from "../../assets/svg/scroll-down.svg"
import github from "../../assets/svg/github.svg"
import linkedin from "../../assets/svg/linkedin.svg"

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="container">
                <div className="info">
                    <h1>Hi, I'm Lucas</h1>
                    <h2>Full Stack Developer</h2>
                    <p>
                        High level experience in web development 
                        <br /> 
                        knowledge, producing quality work.
                    </p>

                    <a href="#contact" className="contact-button">Contact Me<img src={message} alt="" /></a>

                
                </div>
                <div className="container-scroll-down">
                    <a href="#about" className="scroll-down">
                            <img src={scrollDown} alt="" />
                            <span>Scroll Down</span>
                        </a>
                    </div>
                <div className="img"></div>
            </div>

            <aside>
                <a target="_blank" href="https://github.com/LucasCamposGit">
                    <img src={github} alt="" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/lucas-campos-378994201/">
                    <img src={linkedin} alt="" />
                </a>
            </aside>
        </div>
    );
}