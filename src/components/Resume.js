import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import img_name from '../img/name_img.png';

class Resume extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-dark">
                    <div className="content mb-5 mt-3">
                        <img className="d-block mx-auto w-75" src={img_name} alt="My name" />
                        <hr />
                        <h3>Synopsis</h3>
                        <div className='synopsis'>
                            <span className='title'>
                                I consider myself a virtualist, shifting focus to whatever the development' needs are. Technologist with extensive knowledge on solution/software stack and always keep learning new things and its infrastructure in a short amount of time & focusing on a range of technology stack that is evolving day by day.
                            </span>
                        </div>
                        <hr />
                        <h3>Career History</h3>
                        <div className='position'>
                            <span className='title'><b>Master Thesis in IoT Technology </b><i>- Bosch Engineering GmbH, Germany</i></span>
                            <span className='supplemental'><b>Technologies:</b> Golang, MQTT, AMQP, JavaScript, Node.js, Databases and Docker</span>
                            <span className='time-period'>April, 2019 - Present</span>
                        </div>
                        <div className='position'>
                            <span className='title'><b>Service Developer, Intern </b><i>- Bosch Engineering GmbH, Germany</i></span>
                            <span className='supplemental'><b>Technologies:</b> JavaScript, Node.js, React.js, Express.js, Databases, Docker, Microservices, REST API and Golang</span>
                            <span className='time-period'>September, 2018 - Fibraury, 2019</span>
                        </div>
                        <div className='position'>
                            <span className='title'><b>Software Engineer </b><i>- Avico Software Solutions, India</i></span>
                            <span className='supplemental'><b>Technologies:</b> HTML, JavaScript, Java, JavaServer Pages, SQL and Hibernate</span>
                            <span className='time-period'>May, 2015 - Fibraury, 2017</span>
                        </div>

                        <hr />
                        <h3>Education</h3>
                        <div className='education'>
                            <span className='title'><b>Masters in Software Engineering and Management</b></span>
                            <span className='supplemental'>Hochschule Heilbronn, Heilbronn, Germany</span>
                            <span className='time-period'>September, 2017 - Present</span>
                        </div>
                        <div className='education'>
                            <span className='title'><b>Bachelors in Information Technology</b></span>
                            <span className='supplemental'>Adhiyamaan College of Engineering - Anna University, India</span>
                            <span className='time-period'>June, 2011 - April, 2014</span>
                        </div>
                        <div className='education'>
                            <span className='title'><b>Diploma in Information Technology</b></span>
                            <span className='supplemental'>Muthayammal Polytechnic College, India</span>
                            <span className='time-period'>June, 2009 - April, 2011</span>
                        </div>
                        <hr />
                        <h3>Project</h3>
                        <div className='project'>
                            <span className='title'><b>Cloudiolab</b> (Personal Cloud Infrastructure)</span>
                            <span className='supplemental'><b>Technologies:</b> Node.js, Databases, API Services, Docker and SWARM</span>
                            <span className='time-period'>July, 2018 - Present</span>
                        </div>
                        <div className='project'>
                            <span className='title'><b>Atlassian Confluence Integration with Cisco Webex</b> (for Hochschule Heilbronn)</span>
                            <span className='supplemental'><b>Technologies:</b> JavaScript, Node.js, Confluence Server, Cisco Webex REST API</span>
                            <span className='time-period'>April, 2018 - July, 2018</span>
                        </div>
                        <div className='project'>
                            <span className='title'><b>Twitter Hashtag Search</b> (THS)</span>
                            <span className='supplemental'><b>Technologies:</b> Java, twitter4j, Apache Storm</span>
                            <span className='time-period'>November, 2017 - January, 2018</span>
                        </div>
                        <div className='project'>
                            <span className='title'><b>File Encryption Tool</b> (TFEncry)</span>
                            <span className='supplemental'><b>Technologies:</b> Core Java, JavaFx</span>
                            <span className='time-period'>August, 2014 - October, 2014</span>
                        </div>
                        <div className='project'>
                            <span className='title'><b>A System to Monitor Electromagnetic Radiation</b> (EMF) <i>- Sponsored by State Council for Science & Technology</i></span>
                            <span className='supplemental'><b>Technologies:</b> Embedded C, Microcontroller, Micosoft Visual C#</span>
                            <span className='time-period'>November, 2013 - April, 2014</span>
                        </div>
                        <div className='project'>
                            <span className='title'><b>Data Hiding in BLOB using LSB Technique</b></span>
                            <span className='supplemental'><b>Technologies:</b> Core Java, Java-Applet</span>
                            <span className='time-period'>December, 2010 - March, 2011</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (withRouter(Resume));