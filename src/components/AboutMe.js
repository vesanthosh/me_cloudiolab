import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import img_name from '../img/name_img.png';
import whoisme from '../img/whoisme.png';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';
import img8 from '../img/8.png';
import img9 from '../img/9.png';
import img10 from '../img/10.png';
import img11 from '../img/11.png';
import img12 from '../img/12.png';
import img13 from '../img/13.png';
import img14 from '../img/14.png';

class AboutMe extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-dark">
                    <div className="content mb-5 mt-3">
                        <img className="d-block mx-auto w-75" src={img_name} alt="My name" />
                        <hr />
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-pause="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={img1} alt="Its me" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img2} alt="Barcelona 1" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img3} alt="Barcelona 2" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img4} alt="Swiss alps 1" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img5} alt="Swiss alps 2" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img6} alt="Friends in amsterdam" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img7} alt="Belgium" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img8} alt="Harry the labrador" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img9} alt="Heilbronn Castle" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img10} alt="Program at night" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img11} alt="Market at barcelona" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img12} alt="Swiss Alps 3" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img13} alt="Snow streets" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img14} alt="Amsterdam streets" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <img className="d-block mx-auto w-25" src={whoisme} alt="My name" />
                        <hr className="light" />
                        <div className="text-left">
                            <p><i>Greetings from India.</i></p>
                            <p>I moved to Germany for master studies.</p>
                            <p>I now live in Heilbronn, Baden-Württemberg in Deutschland.</p>
                            <p>I read tech journals, blogs, small storybooks to learn new languages and I listen radio a lot.</p>
                            <p>I watch a lot of movies, and I used to organize a weekly Cricket match with friends in Heilbronn.
</p>
                            <p>I run my cluster of 3 servers, where I deploy all my service containers to the Docker <a href="https://www.cloudiolab.com" target="_blank" rel="noopener noreferrer">SWARM cluster.</a></p>
                            <p>I obsess on learning new technology by practically implementing the concept and deploying it on my private cloud server when I'm not doing my professional work.</p>
                            <p>I also run <a href="https://docker.cloudiolab.com" target="_blank" rel="noopener noreferrer">private docker registry</a> to maintain production-grade service containers of mine.</p>
                            <p>I have a motivating brother, supporting family and a hyperactive Labrador Retriever.</p>
                            <p>I write <a href="https://github.com/vesanthosh" target="_blank" rel="noopener noreferrer">code</a> and (used to) convert hot coffee into awesome code.</p>
                            <p>I worked with a startup team of 8 people to make design templates, and I lead them during the development phase to implement the client and server-side logic.</p>
                            <p>I am not anymore, but still, they're doing good.</p>
                            <p>I worked on a government-funded project to make a prototype that monitors Electromagnetic Fields coming out from cell towers.</p>
                            <p>I made a good contribution towards protecting the environment by developing a centralized EMF monitoring system for the State Government.</p>
                            <p>I helped my <a href="https://www.hs-heilbronn.de" target="_blank" rel="noopener noreferrer">university</a> to integrate their Confluence server with Cisco Webex.</p>
                            <p>I am now working on a master thesis at Bosch Engineering GmbH to help innovate new IoT technology.</p>
                            <p>I have a more detailed <Link to="/resume">résumé</Link> if you're into that sort of thing.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (withRouter(AboutMe));
