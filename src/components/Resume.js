import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import myImage from '../img/me.jpg'

class Resume extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-dark">
                    <div className="content mb-5 mt-5">
                        <div className="d-flex">
                            <div className="mr-auto"><h1>Santhosh Venkatesan</h1></div>
                            <a href="https://www.linkedin.com/in/santhoshvenkatesan" target="_blank" rel="noopener noreferrer">
                                <div className="p-2">
                                    <div className="linkedin">
                                        <i className="fab fa-linkedin fa-2x fa-fw" styles="color:#0077B5"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <hr />
                        <h3>Synopsis</h3>
                        <div className='synopsis'>
                            <span className='title'>
                                I consider myself a virtualist, shifting focus to whatever the development' needs are. Technologist with wide variety of experience and a unique ability always kicks me to focus on the full stack development and wide range of technology that are evolving day by day.
                                    </span>
                        </div>
                        <hr />
                        <h3>Career History</h3>
                        <div className='position'>
                            <span className='title'>Master Thesis in IoT Technology</span>
                            <span className='supplemental'>Bosch Engineering GmbH, Germany</span>
                            <span className='time-period'>March, 2019 - Present</span>
                        </div>
                        <div className='position'>
                            <span className='title'>Service Developer, Intern</span>
                            <span className='supplemental'>Bosch Engineering GmbH, Germany</span>
                            <span className='time-period'>September, 2018 - Fibraury, 2019</span>
                        </div>
                        <div className='position'>
                            <span className='title'>Freelance Software Engineer</span>
                            <span className='supplemental'>Clients: Avico, India</span>
                            <span className='time-period'>May, 2015 - Fibraury, 2017</span>
                        </div>

                        <hr />
                        <h3>Education</h3>
                        <div className='education'>
                            <span className='title'>Masters in Software Engineering and Management</span>
                            <span className='supplemental'>Hochschule Heilbronn, Heilbronn, Germany</span>
                            <span className='time-period'>September, 2017 - Present</span>
                        </div>
                        <div className='education'>
                            <span className='title'>Bachelors in Information Technology</span>
                            <span className='supplemental'>Adhiyamaan College of Engineering - Anna University, India</span>
                            <span className='time-period'>June, 2011 - April, 2014</span>
                        </div>
                        <div className='education'>
                            <span className='title'>Diploma in Information Technology</span>
                            <span className='supplemental'>Muthayammal Polytechnic College, India</span>
                            <span className='time-period'>June, 2009 - April, 2011</span>
                        </div>
                        <hr />
                        <div className="d-flex">
                            <div className="mr-auto"><h3>Project</h3></div>
                            <a href="https://github.com/vesanthosh" target="_blank" rel="noopener noreferrer">
                                <div className="p-2">
                                    <div className="github">
                                        <i className="fab fa-github fa-2x fa-fw"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='project'>
                            <span className='title'>Cloudiolab (Personal Cloud Infrastructure)</span>
                            <span className='supplemental'>Technologies: Node.js, Databases, API Services, Docker, Swarm, Kubernetes</span>
                            <span className='time-period'>July, 2018 - Present</span>
                        </div>
                        <div className='project'>
                            <span className='title'>Twitter Hashtag Search (THS)</span>
                            <span className='supplemental'>Technologies: Java, twitter4j, Apache Storm</span>
                            <span className='time-period'>November, 2017 - January, 2018</span>
                        </div>
                        <div className='project'>
                            <span className='title'>TFEncry (File Encryption Tool)</span>
                            <span className='supplemental'>Technologies: Core Java, JavaFx</span>
                            <span className='time-period'>August, 2014 - October, 2014</span>
                        </div>
                        <div className='project'>
                            <span className='title'>A System to Monitor Electromagnetic Radiation (EMF) - Sponsored by State Council for Science & Technology</span>
                            <span className='supplemental'>Technologies: Embedded C, Microcontroller, Micosoft Visual C#</span>
                            <span className='time-period'>November, 2013 - April, 2014</span>
                        </div>
                        <div className='project'>
                            <span className='title'>Data Hiding in BLOB using LSB Technique</span>
                            <span className='supplemental'>Technologies: Core Java, Java-Applet</span>
                            <span className='time-period'>December, 2010 - March, 2011</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (withRouter(Resume));