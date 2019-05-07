import React from 'react';
import PropTypes from 'prop-types';

import afiPicture from '../images/afiPicture.png';
import Tanner from '../images/tanner.png';
import ReactLogo from '../images/reactIcon.png';
import CSSLogo from '../images/cssIcon.png';
import HTMLLogo from '../images/htmlLogo.png';
import ExpressLogo from '../images/expressLogo.png';
import JSLogo from '../images/javascriptIcon.png';
import NodeLogo from '../images/nodeLogo.png';
import PostgresLogo from '../images/postgresIcon.png';
import ReduxLogo from '../images/reduxLogo.png';
import AmazonLogo from '../images/amazonS3Logo.png';
import SassLogo from '../images/sassLogo.png';
import MaterialLogo from '../images/material-icon.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <div className="icons skills">
            <span><img src={ReactLogo} alt="React" /><h4>React</h4></span>
            <span><img src={CSSLogo} alt="CSS" /><h4>CSS3</h4></span>
            <span><img src={HTMLLogo} alt="HTML" /><h4>HTML5</h4></span>
            <span><img src={ExpressLogo} alt="Express" /><h4>Express</h4></span>
            <span><img src={JSLogo} alt="Javascript" /><h4>JavaScript</h4></span>
            <span><img src={NodeLogo} alt="Node" /><h4>Node</h4></span>
            <span><img src={PostgresLogo} alt="PostgreSQL" /><h4>PostgreSQL</h4></span>
            <span><img src={ReduxLogo} alt="Redux" /><h4>Redux</h4></span>
            <span><img src={AmazonLogo} alt="AmazonS3" /><h4>Amazon S3</h4></span>
            <span><img src={SassLogo} alt="Sass" /><h4>Sass</h4></span>
            <span><img src={MaterialLogo} alt="MaterialUI" /><h4>Material UI</h4></span>
          </div>
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <div>
          <a href="https://tannerpaintsupply.com/#/" rel="noopener noreferrer" target="_blank"><h3>AFI PAINT & SUPPLY</h3></a>
            <span className="image main"><a href="https://tannerpaintsupply.com/#/" rel="noopener noreferrer" target="_blank"><img src={afiPicture} alt="website screenshot" /></a></span>
            <h5>REACT | JS | HTML | MATERIAL UI | NODEJS | EXPRESS | POSTGRESQL |</h5>
            <p>eCommerce site for a Paint Supply store. The app was built using React for a library, and utilized Material UI and SCSS for styling. I used Bcrypt for password encryption. I used Amazon S3 to upload photos and display photos on the website. ChartJS was used to display product and user data. Stripe was used for checkout for the  security and peace of mind for customers. </p>
            <p>Admins have special access to a dashboard. The dashboard shows all orders, with a search bar to search by company name or by the order id. They can customize charts to get the data they would like, as well as what chart type. They also have the ability to add new products to the database, hide products from the store, and update the inventory. </p>
          </div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={Tanner} alt="" /></span>
          <p>I am a full stack web developer from Salt Lake City, UT. I have a passion for web development. I have a background in Esports, and in my freetime I enjoy traveling, the outdoors, or spending time with Friends. I am a huge Atlanta Falcons fan and enjoy a good dad joke. </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"  />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" name="bot-field" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/RestAOV" rel="noopener noreferrer" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/tanner.scadden" rel="noopener noreferrer" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/tanner-scadden/" rel="noopener noreferrer" target="_blank" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
            <li><a href="https://github.com/Restttt" rel="noopener noreferrer" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main