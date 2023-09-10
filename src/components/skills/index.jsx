import "./index.scss";
import Brackets from "../../assets/svg/brackets.svg";
import Down from "../../assets/svg/down-arrow.svg";

function ListOfSkills({ skills }) {

    return(
        <div className="container-skills">
            {skills.map((skill) => {
                return(<li>{skill}</li>);
            })}
        </div>
    )
}

function Skill({ title, listOfSkills }) {

    function handleClick(e) {
        let ul = e.target.nextSibling;
        let img  = e.target.lastChild;

        if (ul.style.height === "0px" || ul.style.height === "") {
            ul.style.height = "15vw"
            img.style.transform = "rotate(180deg)"

        } else {
            ul.style.height = "0px";
            img.style.transform = "rotate(0deg)"

        }

    }

    return (
        <div className="skill">
            <h1 onClick={handleClick}>
                <img src={Brackets} className="brackets" alt="" />
                {title}
                <img src={Down} className="down" alt="" />
            </h1>

            {listOfSkills}
        </div>
    );
}

let frontendSkills = ["HTML", "CSS", "SASS", "JAVASCRIPT", "REACTJS"];
let backendSkills = ["PHP (POO/MVC)"];
let databaseSkills = ["MYSQL"];

export default function Skills() {

  
    return(
        <div className="skills" id="skills">

            <Skill 
                title={"Frontend Developer"}
                listOfSkills={<ListOfSkills skills={frontendSkills}/>}
            />

            <Skill 
                title={"Backend Developer"}
                listOfSkills={<ListOfSkills skills={backendSkills}/>}
            />

            <Skill 
                title={"Database Developer"}
                listOfSkills={<ListOfSkills skills={databaseSkills}/>}
            />

        </div>
    );
}