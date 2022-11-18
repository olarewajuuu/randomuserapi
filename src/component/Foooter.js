import React from 'react'
import './Footer.css'

const Foooter = () => {
  return (
    <div>
        <div className="footer">
            <div className="group">
                <div className="group1">
                    <h1>Hope Computers</h1>
                    <a href="http"> <i class="fa-brands fa-facebook fa-2x" ></i></a>
                    <a href="http"> <i class="fa-brands fa-twitter fa-2x"></i></a>
                    <a href="http"> <i class="fa-brands fa-square-instagram fa-2x"></i></a>
                    <a href="http"> <i class="fa-brands fa-pinterest fa-2x"></i></a>
                </div>

                <div className="group2">
                    <p> <a href="http">About Us</a></p>
                    <p> <a href="http">Contact</a></p>
                    <p> <a href="http">Blog</a></p>
                </div>

                <div className="group3">
                    <p> <a href="http">Careers</a></p>
                    <p> <a href="http">Support</a></p>
                    <p> <a href="http">Privacy Policy</a></p>
                </div>

                <div className="group4">
                    <button class="btn">Request Invite</button>
                    <p> © Hope Computers. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Foooter