import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import imageHeader from '../public/headerImage.jpeg';


const Header: React.FC = () => {
    return (
        <header className='page-header'>
            <div
                className="mask"
            >
                <div className="text-white" >

                    <div className="text-white">
                        <h1 className="mb-3">Chat De Recetas DM</h1>
                        <h4 className="mb-5">DM Chat</h4>
                        <a className="principalButton" href="#!" role="button"
                        >Call to action</a
                        >
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;