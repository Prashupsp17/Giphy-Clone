import React from 'react'
import {FaYoutube,FaInstagram,FaTwitter} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div className='faded-text pt-2'>
        <span>Follow on:</span>
        <div className='flex gap-4 pt-3'>
        <FaYoutube />
        <FaInstagram />
        <FaTwitter />
        </div>
    </div>
  )
}

export default FollowOn