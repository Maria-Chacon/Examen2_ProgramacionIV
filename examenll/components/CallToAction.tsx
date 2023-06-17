import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../public/dm.jpg';


const CallToAction: React.FC = () => {
    return (
        <div className="py-lg-16 py-10 bg-gray-200">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-9 col-12">
                        <h2 className="display-4 ">Join more than 1 million learners worldwide</h2>
                        <p className="lead  px-lg-12 mb-6">Effective learning starts with assessment. Learning a new skill is
                            hard work—Signal makes it easier.</p>
                        <div className="d-grid d-md-block">
                            <a href="#" className="btn btn-primary mb-2 mb-md-0">Start Learning for Free</a>
                            <a href="#" className="btn btn-info">Geeks for Business</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;






