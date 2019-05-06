import React from 'react'
import PropTypes from 'prop-types'

import afiPicture from '../images/AFI-Image.png'
import Tanner from '../images/tanner.png'
import ReactLogo from '../images/react-icon.png';
import CSSLogo from '../images/css-icon.png';
import HTMLLogo from '../images/html-logo.png';
import ExpressLogo from '../images/express-logo.png';
import JSLogo from '../images/javascript-icon.png';




class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <ul className="icons ">
            <li><span><img src={ReactLogo} alt="react" /><h4>React</h4></span></li>
            <li><span><img src={CSSLogo} alt="react" /><h4>React</h4></span></li>
            <li><span><img src={HTMLLogo} alt="react" /><h4>React</h4></span></li>
            <li><span><img src={ExpressLogo} alt="react" /><h4>React</h4></span></li>
            <li><span><img src={JSLogo} alt="react" /><h4>React</h4></span></li>

          </ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <div>
            <h3>AFI PAINT & SUPPLY</h3>
            <span className="image main"><a href="https://tannerpaintsupply.com/#/" target="_blank"><img src={afiPicture} alt="" /></a></span>
            <h5>REACT | JS | HTML | MATERIAL UI | NODEJS | EXPRESS | POSTGRESQL</h5>
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
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
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
            <li><a href="https://twitter.com/RestAOV" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/tanner.scadden" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/tanner-scadden/" target="_blank" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
            <li><a href="https://github.com/Restttt" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
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