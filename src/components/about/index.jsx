import "./index.scss";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="container">
                <h1>About Us</h1>
                <h2>Introduction</h2>

                <div className="text">
                    <p>
                    We are seasoned Full Stack Web Developers with two years of experience. Committed hard workers, we blend frontend and backend skills to craft efficient, visually pleasing web solutions. Our dedication to staying updated ensures cutting-edge results.
                    </p>
                    <p>
                        Hard work is our hallmark. We invest our dedication and diligence into every project, ensuring efficient, scalable, and visually appealing web solutions. Our continuous learning mindset keeps us at the forefront of industry trends, enabling us to deliver exceptional digital experiences.
                    </p>
                    <p>
                    Let's create remarkable web experiences together.
                    </p>
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