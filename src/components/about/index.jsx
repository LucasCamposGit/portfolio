import "./index.scss";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="container">
                <h1>About Us</h1>
                <h2>Introduction</h2>

                <div className="text">  
                    <p>Hello, I'm Lucas. I'm a web developer from Brazil.</p>

                    <p>In 2021, I entered the world of web development, starting with simple projects. </p>
                    <p>I'm currently pursuing a degree in Computer Science and dedicating myself to mastering web development every day. </p>
                    <p>My enthusiasm for programming and development in general continues to grow stronger.</p>
                </div>

                <div className="experiences">
                    <div className="years">
                        <h1>02+</h1>
                        <p>Years</p>
                        <p>experience</p>
                    </div>
                    <div className="completed-project">
                        <h1>10+</h1>
                        <p>Completed</p>
                        <p>project</p>
                    </div>
                </div>

                <div className="cv">
                </div>

            </div>
        </div>
    );
}