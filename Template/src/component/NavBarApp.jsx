import React, {Component } from 'react';
import PropTypes from 'prop-types';
import "./NavBar.css"
import { Link } from 'react-router-dom';
class NavBarApp extends Component {
    render() {
        return (
         <div>
  <nav className="navbar navbar-expand-md new-bg navbar-dark">
    <a className="navbar-brand new" href="#">
      <span className="ty-logo">T</span>raining<span className="ty-logo">M</span>aintenance
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link new-link" routerlink="/dashboard">Dashboard</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link new-link" to="/table">Table</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link new-link" to="/">Form</Link>
        </li>
        <div className="dropdown">
          <li className=" nav-item dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a className="nav-link new-link" style={{cursor: "pointer"}}>Dropdown</a>
          </li>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <ul className="nav-area">
              <span className="ty-categories">Categories</span>
              <li><a href="JavaScript:void(0);"> Photo &amp; Video <i className="fa fa-angle-right" aria-hidden="true" id="photo" /></a>
                <div className="sub-nav " id="sub-nav">
                  <div className="sub-menu ">
                    <h3>Photo &amp; Video</h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                          <li><a href>Posing</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Software</span>
                          <li><a href>Adobe LightRoom</a></li>
                          <li><a href>Adobe Photoshop</a></li>
                          <li><a href>Adobe priemiere pro</a></li>
                          <li><a href>Final Cut Pro X</a></li>
                          <li><a href>Post Processing</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Genres</span>
                          <li><a href>Adventure &amp; Sports</a></li>
                          <li><a href>Commercial</a></li>
                          <li><a href>Documentary</a></li>
                          <li><a href>Family &amp; lifestyle</a></li>
                          <li><a href>Fine Art</a></li>
                          <li><a href>Food</a></li>
                          <li><a href>Glamour &amp; Beauty</a></li>
                          <li><a href>Newborn</a></li>
                          <li><a href>Outdoor</a></li>
                          <li><a href>Portrait</a></li>
                          <li><a href>Street photographs</a></li>
                          <li><a href>Wedding</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Tecniques</span>
                          <li><a href>Ariel &amp; Drone</a></li>
                          <li><a href>Film making</a></li>
                          <li><a href>Iphoneography</a></li>
                          <li><a href>Speed lights</a></li>
                          <li><a href>Videography</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Cameras</span>
                          <li><a href>Camera Guides</a></li>
                          <li><a href>Canon Tutorial</a></li>
                          <li><a href>Nikon Tutoral</a></li>
                          <li><a href>Sony Tutorial</a></li>
                          <li><a href>Post Processing</a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="ty-icon">Featured Money &amp; Life Classes <i className="fa fa-angle-right" aria-hidden="true" /></span>
                  </div>
                </div>
              </li>
              <li><a href="JavaScript:void(0);"> Money &amp; Life <i className="fa fa-angle-right" aria-hidden="true" /></a>
                <div className="sub-nav">
                  <div className="sub-menu">
                    <h3>Money &amp; Life</h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <span className="ty-span">Self improvement</span>
                          <li><a href>Lifestyle</a></li>
                          <li><a href>Money &amp; finance</a></li>
                          <li><a href>Self imrovement</a></li>
                          <li><a href>Time management</a></li>
                          <li><a href>wellness</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Self improvement</span>
                          <li><a href>Communication skills</a></li>
                          <li><a href>Leadership &amp; management</a></li>
                          <li><a href>Podcasting</a></li>
                          <li><a href>Writing</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Entrepreneurship</span>
                          <li><a href>Business Basics</a></li>
                          <li><a href>Creative inspiration</a></li>
                          <li><a href>Entrepreneurship</a></li>
                          <li><a href>Freelancing</a></li>
                          <li><a href>Marketing &amp; Sales</a></li>
                          <li><a href>Online Business</a></li>
                          <li><a href>Social Media</a></li>
                          <li><a href>Newborn</a></li>
                          <li><a href>Outdoor</a></li>
                          <li><a href>Portrait</a></li>
                          <li><a href>Street photographs</a></li>
                          <li><a href>Wedding</a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="ty-span ty-icon">Featured Money &amp; Life Classes <i className="fa fa-angle-right" aria-hidden="true" /></span>
                  </div>
                </div>
              </li>
              <li><a href="JavaScript:void(0);"> Art &amp; design <i className="fa fa-angle-right" aria-hidden="true" /></a>
                <div className="sub-nav">
                  <div className="sub-menu">
                    <h3>Art &amp; design</h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                          <li><a href>Posing</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Adventure &amp; Sports</a></li>
                          <li><a href>Commercial</a></li>
                          <li><a href>Documentary</a></li>
                          <li><a href>Family &amp; lifestyle</a></li>
                          <li><a href>Fine Art</a></li>
                          <li><a href>Food</a></li>
                          <li><a href>Glamour &amp; Beauty</a></li>
                          <li><a href>Newborn</a></li>
                          <li><a href>Outdoor</a></li>
                          <li><a href>Portrait</a></li>
                          <li><a href>Street photographs</a></li>
                          <li><a href>Wedding</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                          <li><a href>Posing</a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="ty-span ty-icon">Featured Money &amp; Life Classes <i className="fa fa-angle-right" aria-hidden="true" /></span>
                  </div>
                </div>
              </li>
              <li><a href="JavaScript:void(0);"> Craft &amp; maker <i className="fa fa-angle-right" aria-hidden="true" /></a>
                <div className="sub-nav">
                  <div className="sub-menu">
                    <h3>Craft &amp; Maker</h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="ty-span ty-icon1">Featured Money &amp; Life Classes <i className="fa fa-angle-right" aria-hidden="true" /></span>
                  </div>
                </div>
              </li>
              <li><a href="JavaScript:void(0);"> Music &amp; Audio <i className="fa fa-angle-right" aria-hidden="true" /></a>
                <div className="sub-nav">
                  <div className="sub-menu">
                    <h3>Music &amp; Audio</h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                          <li><a href>Lighting</a></li>
                        </ul>
                        <ul>
                          <span className="ty-span">Essentials</span>
                          <li><a href>Delhi</a></li>
                          <li><a href>Delhi</a></li>
                          <li><a href>Business</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Free photo Courses</a></li>
                          <li><a href>Fundamentals</a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="ty-icon1">Featured Money &amp; Life Classes <i className="fa fa-angle-right" aria-hidden="true" /></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</div>

        );
    }
}

NavBarApp.propTypes = {

};

export default NavBarApp;