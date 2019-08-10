import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-light text-dark p-3 text-center">
                <a href="https://github.com/vesanthosh" target="_blank" rel="noopener noreferrer">
                    <div className="p-2">
                        <div className="github">
                            <i className="fab fa-github fa-2x fa-fw"></i>
                        </div>
                    </div>
                </a>
                <a href="https://twitter.com/vesanthosh" target="_blank" rel="noopener noreferrer">
                    <div className="p-2">
                        <div className="twitter">
                            <i className="fab fa-twitter fa-2x fa-fw"></i>
                        </div>
                    </div>
                </a>
            </footer>
        );
    }
}

export default Footer;