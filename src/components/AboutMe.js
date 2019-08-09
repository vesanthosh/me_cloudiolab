import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import myImage from '../img/me.jpg'

class AboutMe extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-dark">
                    <div className="content mb-4">
                        <h1 className="name">Santhosh Venkatesan</h1>
                        <hr />
                        <div className="text-left">
                            <p><i>Greetings from India.</i></p>
                            <p>I moved to Germany for master studies.</p>
                            <p>I now live in Heilbronn, Baden-Württemberg in Deutschland.</p>
                            <p>I read tech journals, blogs, small storybooks to learn new languages and I listen radio a lot.</p>
                            <p>I watch a lot of movies, and I used to organize a weekly Cricket match with friends in Heilbronn.
</p>
                            <p>I run my cluster of 3 servers, where I deploy all my service containers to the <a href="https://www.cloudiolab.com" target="_blank" rel="noopener noreferrer">SWARM cluster.</a></p>
                            <p>I obsess on learning new technology by practically implementing the concept and deploying it on my private cloud server when I'm not doing my professional work.</p>
                            <p>I also run <a href="https://docker.cloudiolab.com" target="_blank" rel="noopener noreferrer">private docker registry</a> to maintain production-grade service containers of mine.</p>
                            <p>I have a motivating brother, supporting family and a hyperactive Labrador Retriever.</p>
                            <p>I write <a href="https://github.com/vesanthosh" target="_blank" rel="noopener noreferrer">code</a> and (used to) convert hot coffee into awesome code.</p>
                            <p>I worked with a startup team of 8 people to make design templates, and I lead them during the development phase to implement the client and server-side logic.</p>
                            <p>I am not anymore, but still, they're doing good.</p>
                            <p>I worked on a government-funded project to make a prototype that monitors Electromagnetic Fields coming out from cell towers.</p>
                            <p>I made a good contribution towards protecting the environment by developing a centralized EMF monitoring system for the State Government.</p>
                            <p>I helped my <a href="https://www.hs-heilbronn.de" target="_blank" rel="noopener noreferrer">university</a> to integrate their Confluence server with Cisco Webex.</p>
                            <p>I am now working with Bosch Engineering GmbH to help innovate new IoT technology.</p>
                            <p>I have a more detailed <Link to="/resume">résumé</Link> if you're into that sort of thing.</p>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default (withRouter(AboutMe));
