import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nam hic corrupti consequuntur commodi, laboriosam id? Blanditiis facere, voluptatibus autem vitae animi aspernatur doloribus eius. Veritatis error cum cupiditate illo!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <ii>+1-213-456-7890</ii>
                    <ii>contact@tomato.com</ii>
                </ul>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Footer
