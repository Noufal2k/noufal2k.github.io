import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-img">
                <img src="/noufal-pic.jpg" alt="" />
            </div>
            <div className="about-contents">
                <h1>Noufal Kannan Kulavan</h1>
                <h3>Web devoloper</h3>
                <p>Email : kknoufal@gmail.com</p>
                <p>
                    <a className="fa-icon fa-icon-2x" href="https://www.facebook.com/monuskk" title="Facebook">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a className="fa-icon fa-icon-2x" href="https://github.com/noufal2k" title="Github">
                        <i className="fab fa-github-square"></i>
                    </a>
                </p>
                <div className="about-text">
                    Hardworking and enthusiastic web developer able to deliver high standard, reliable and secure web application on time.
                    <p>Stack: Nodejs, Express, React, Graphql, Mongodb/PostgreSQL</p>
                </div>
            </div>
        </div>
    );
};

export default About;