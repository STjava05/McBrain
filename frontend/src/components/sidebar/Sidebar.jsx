import React from 'react'
import './sidebar.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarImg' src="https://images.unsplash.com/photo-1613506543439-e31c1e58852b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p className='sidebarText'>I’m an operational director with over 10 years of experience in operations management, project management, and team leadership. I’m passionate about delivering exceptional results and creating efficient, scalable processes that drive success.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon"><FaFacebook/></i>
            <i className="sidebarIcon"><FaTwitter /></i>
            <i className="sidebarIcon">< FaPinterest/></i>
            <i className="sidebarIcon"><FaInstagram /></i>
          </div>
          </div>
    </div>
  )
}

export default Sidebar
