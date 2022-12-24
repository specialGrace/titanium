import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../asset/images/icon.png'
import bg from '../../../asset/images/findbg.png'
import {FaFacebook,FaLinkedin,FaInstagram,FaEnvelope} from 'react-icons/fa'
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import {ImLocation2} from 'react-icons/im'

import styles from './Footer.module.css'
 
const Footer = () => {

  const company = new Date().getFullYear() > 2021 && `${new Date('2021/01/01').getFullYear()} - ${new Date().getFullYear()}`;
  return (
    <div className={styles.container}>
        <div className={`${styles.footerContent} wrapper-80`}  style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            height: '100%', 
          }}>

            <div className={styles.footerMenu}>
              <div className={styles.footerMenu__left}>
                <Link href='/'>
                    <a>
                      <Image src={logo} alt="titanium" width={50} height={47}/>
                    </a>
                </Link>
                
                <p className={styles.footerMenu__leftText}>
                  Titanium Africa is a Proptech company looking to solve the housing problem in Nigeria and Africa at large. With Nigeria’s housing deficit standing at about 20 million units, Titanium Africa aims to provide quality, affordable housing for everybody.
                </p>
                <div className={styles.footerMenu_leftSocial}>
                <ul className={styles.footerMenuSocial}>
                    <li><Link href='/'><a><FaFacebook className={`${styles.topIcons} ${styles.faFaceBook}`}/></a></Link></li>
                    <li><Link href='/'><a><FaLinkedin className={`${styles.topIcons} ${styles.faLinkedin}`}/></a></Link></li>
                    <li><Link href='/'><a><AiFillTwitterCircle className={`${styles.topIcons} ${styles.aiFillTwitter}`}/></a></Link></li>
                    <li><Link href='/'><a><AiFillInstagram className={`${styles.topIcons} ${styles.aiFillInstagram}`}/></a></Link></li>
                </ul>
                </div>
              </div>
              <div className={styles.footerMenu__right}>
                <div className={styles.footerMenu__rightItems}>
                  <h4 className={styles.footerMenu__rightTitle}>Titanium</h4>
                  <ul className={styles.footerMenu__rightLinks} style={{color:'rgba(255, 255, 255, 0.8)'}}>
                      <li><Link href='/'><a>About us</a></Link></li>
                      <li><Link href='/'><a>Investment club</a></Link></li>
                      <li><Link href='/'><a>Services</a></Link></li> 
                      <li><Link href='/'><a>Properties</a></Link></li>
                      <li><Link href='/'><a>Privacy policy</a></Link></li>
                  </ul>
                </div>
                <div className={styles.footerMenu__rightItems}>
                  <h4 className={styles.footerMenu__rightTitle}>Properties</h4>
                  <ul className={styles.footerMenu__rightLinks} style={{color:'rgba(255, 255, 255, 0.8)'}}>
                      <li><Link href='/'><a>Ejima</a></Link></li>
                      <li><Link href='/'><a>RoseWood</a></Link></li>
                      <li><Link href='/'><a>Asokoro heights Guzape</a></Link></li> 
                      <li><Link href='/'><a>Lofty heights One</a></Link></li>
                  </ul>
                </div> 
                <div className={styles.footerMenu__rightItems}>
                  <h4 className={styles.footerMenu__rightTitle}>Contact us</h4>
                   <ul className={styles.footerMenu__rightContactDetail}>
                      <li>
                        <div className={styles.iconContainer}>
                          <FiPhoneCall style={{fontSize:'16px'}}/>
                        </div>
                          <div className="">
                              <p className={styles.contactTitle}>Tel</p>
                              <p className="contactText">+234 702 590 2307</p>
                          </div>
                      </li>
                      <li>
                      <div className={styles.iconContainer}>
                          <FaEnvelope style={{fontSize:'16px'}}/>
                      </div>
                          <div className="">
                              <p className={styles.contactTitle}>Mail</p>
                              <p className="contactText">info@titanium.africa</p>
                          </div>
                      </li>
                      <li>
                        <div className={styles.iconContainer}>
                          <ImLocation2 style={{fontSize:'16px'}}/>
                        </div>
                           
                          <div className="">
                              <p className={styles.contactTitle}>Address</p>
                              <p className="contactText">50, Tapa Street, Ebute-Metta, Yaba, Lagos</p>
                          </div>
                      </li> 
                   </ul>
                </div>
              </div>
            </div>

            <div className={styles.footerBottom}>
               <p>&copy;{company}, All Rights Reserved</p>
            </div>
        </div> 
    </div>
  )
}

export default Footer 