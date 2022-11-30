import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-border-b tw-border-primary tw-px-[30px]'>
      <div>
        <img src={logo} width='200' height='200' />
      </div>
      <div className='tw-flex tw-gap-[2%] tw-items-center tw-pr-[5%] tw-flex-1 tw-justify-end'>
        <span>HOME</span>
        <span>ABOUT</span>
        <span>CONTACT US</span>
        <Button variant='outline-primary'>SIGN UP</Button>
        <Button className='tw-bg-primary tw-text-white'>Sign In</Button>
      </div>
    </div>
  );
}
