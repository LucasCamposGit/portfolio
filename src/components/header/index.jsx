import "./index.scss";

export default function Header() {
    return(
        <header>
            <div className="logo"><a href="#">Lucas Campos</a></div>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
} 