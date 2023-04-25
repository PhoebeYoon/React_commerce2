import React from 'react'
import  Instagram  from '@mui/icons-material/Instagram'
import  Twitter  from '@mui/icons-material/Twitter';
import  Facebook  from '@mui/icons-material/Facebook';
import '../styles/Footer.css'

const Footer =()=>{
  return(
      <div className="footer">
        <div className="socialMedia">
         <Instagram />
         <Twitter />
         <Facebook />
     
        </div>
        <p>&copy; 2023 Domino's.com</p>
      </div>
  )
}
export default Footer;