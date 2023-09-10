import "./index.scss";
import Brackets from "../../assets/svg/brackets.svg";
import Down from "../../assets/svg/down-arrow.svg";

export default function Skills() {

    function handleClick(e) {
        let ul = e.target.nextSibling;
        let img  = e.target.lastChild;
        console.log(img);


        e.stopPropagation(); 
        e.preventDefault();
        if (ul.style.height === "0px" || ul.style.height === "") {
            ul.style.height = "15vw"
            img.style.transform = "rotate(180deg)"

        } else {
            ul.style.height = "0px";
        img.style.transform = "rotate(0deg)"

        }

    }


    return(
        <div className="skills" id="skills">

            <div className="skill" >
                <h1 onClick={handleClick}>
                    <img src={Brackets} className="brackets" alt="" />
                    Frontend Developer
                    <img src={Down} className="down" alt="" />
                </h1>

                <ul className="container-skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACTJS</li>
                </ul>
            </div>

            <div className="skill" >
                <h1 onClick={handleClick}>
                    <img src={Brackets} className="brackets" alt="" />
                    Backend Developer
                    <img src={Down} className="down" alt="" />
                </h1>

                <ul className="container-skills">
                    <li>PHP (POO/MVC) </li>
                    <li>DJANGO</li>
                </ul>
            </div>

            <div className="skill" >
                <h1 onClick={handleClick}>
                    <img src={Brackets} className="brackets" alt="" />
                    Database Developer
                    <img src={Down} className="down" alt="" />
                </h1>

                <ul className="container-skills">
                    <li>MYSQL</li>
                </ul>
            </div>
        </div>
    );
}