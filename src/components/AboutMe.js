import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import myImage from '../img/me.jpg'

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-dark">
                    <div className="content mb-4">
                        <table className="table table-borderless text-dark mt-4">
                            <tbody>
                                <tr>
                                    <td className="text-left align-middle" rowspan="2">
                                        <img className="rounded-circle" src={myImage} alt="Profile" />
                                    </td>
                                    <td className="text-right align-bottom"><h1 className="name">Santhosh</h1></td>
                                </tr>
                                <tr>
                                    <td className="text-right align-top"><h1 className="name">Venkatesan</h1></td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <div className="text-right">
                            <p>Greetings from India.</p>
                            <p>I moved to Germany for master studies.</p>
                            <p>I now live in Heilbronn, Baden-Württemberg in Deutschland.</p>
                            <p>I read tech journals, blogs, small story books to learn new languages and listen radio a lot.</p>
                            <p>I watch a lot movies and I used to organize a weekly Cricket match with friends in Heilbronn.</p>
                            <p>I obsess on building my own concept <a href="https://dothings.cloudiolab.com" target="_blank" rel="noopener noreferrer">full stack website</a> when I'm not doing my <a href="https://www.linkedin.com/in/santhoshvenkatesan" target="_blank" rel="noopener noreferrer">professional work</a>.</p>
                            <p>I run my own cluster of 3 servers where I deploy all my service containers to the kubernetes cluster.</p>
                            <p>I also run <a href="https://docker.cloudiolab.com" target="_blank" rel="noopener noreferrer">private docker registry</a> to maintain a production grade service containers of mine.</p>
                            <p>I have a motivating brother, supporting family and a hyperactive Labrador Retriever.</p>
                            <p>I write <a href="https://github.com/vesanthosh" target="_blank" rel="noopener noreferrer">code</a> and (used to) convert hot coffee into awesome code.</p>
                            <p>I was doing freelancing work for clients in need of adjustments to their deployed websites for about a year in Bangalore.</p>
                            <p>I worked with a startup team of 8 people to make design templates and implement client and service side business logic. </p>
                            <p>I am not anymore, but still they're doing good.</p>
                            <p>I worked on the government funded project sponsored by Tamil Nadu State Council for Science & Technology.</p>
                            <p>I did a great contribution towards protecting the environment by developing a centralized EMF monitoring system for the State Government.</p>

                            <p>I am now working with <a href="https://www.bosch-engineering.de/" target="_blank" rel="noopener noreferrer">Bosch Engineering GmbH</a> to help innovate new IoT technology.</p>
                            <p>I have a more detailed <Link to="/resume">résumé</Link> if you're into that sort of thing.</p>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default (withRouter(Content));