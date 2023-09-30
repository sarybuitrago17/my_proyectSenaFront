import React from 'react'
import './style/footer.css'

const Footer = () => {
  return (
    <footer className='Footer'>
        <div className='Footer_div'>
           <img className='Footer_img' src="./images/logo-color.png" alt="" />
           <h1 className='Footer_h1'>celes@gmail.com</h1>
           <i className='Twitter bx bxl-twitter'></i>
           <h1 className='Footer_h1'>twitter</h1>
        </div>
        <div className='Footer_div-two'>
        <h1 className='Footer_profesion'>Programmer</h1>
        <i class='Twitter bx bxs-user'></i>

         <h2 className='Footer_programmer'>Sary Buitrago</h2>
         <i class='Twitter bx bxl-gmail'></i>
         
         <h2 className='Footer_programmer'>sarybuitrago38@gmail.com</h2>
         <i class='Twitter bx bxl-whatsapp'></i>
     
         <h2 className='Footer_programmer'>+57 3123313669</h2>


        </div>
        <div className='Footer_div-two fin'>
            <a className='Footer_div-two' href="https://github.com/sarybuitrago17">
                    <i class='Twitter bx bxl-github'></i>
         <h1 className='Footer_programmer'>Git</h1>
            </a>
            <a className='Footer_div-two' href="https://www.linkedin.com/in/sary-buitrago-232a3b282">
                    <i class='Twitter bx bxl-linkedin'></i>
         <h1 className='Footer_programmer'>Linkedin</h1>
            </a>
            <h1 className='Footer_programmer'>Copyright © 2023 Sary Buitrago.</h1>
    
        </div>
    </footer>
  )
}

export default Footer