import React from 'react'
import './Footer.css'
export default function FooterApp() {
    return (
        <div>
             <footer class="footer">
    <div class="row">
      <div class="col-md-3" style={{textDecoration: "none"}}>
        <span class="navbar-brand ty-logo1">
          TES<span class="ty-span1">TY</span>ANTRA
        </span>
      </div>
      <div class="col-md-3">
        <div class="ty-social">
          <a href="">
            <i class="fab fa-facebook-f"></i></a>
          <a href=""><i class="fab fa-linkedin-in"></i></a>
          <a href=""><i class="fab fa-instagram"></i></a>
         </div>
      </div>
      <div class="col-md-3 ty-text">
        <div>© 2019 Test Yantra Software Solutions</div>
      </div>
    </div>
  </footer> 
        </div>
    )
}
