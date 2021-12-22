import React from 'react'
import './Navbar.css';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
      <>
        <div className="flex justify-between ml-8 mr-8 mt-2 items-center sticky top">
          <h1 className="fontStyle text-4xl ">Socialice</h1>
                <div className="w-12 h-12">
                    <CgProfile className='w-full h-full'/>
          </div>
        </div>
      </>
    );
}

export default Navbar;
