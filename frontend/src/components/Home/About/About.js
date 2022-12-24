import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'
import about1 from '../../../asset/images/about1.png'
import about_border from '../../../asset/images/about_border.png'
import vision from '../../../asset/images/vision.png'
import vector from '../../../asset/images/Vector.png'
import vector2 from '../../../asset/images/Vector2.png'

function About() {
    return (
        <div className={styles.generalContainer}>
            <div className={styles.container}>
                <h2 className={styles.aboutTittle}>About Us</h2>
                <Image src={about_border} alt="aboutus" width={73} height={3} />
                <p className={styles.aboutText}>
                    Titanium Africa is a Proptech company looking to solve the housing problem in Nigeria and Africa at large. <br />
                    With Nigeria’s housing deficit standing at about 20 million units, Titanium Africa aims to provide quality, <br />
                    affordable housing for everybody.
                </p>
                <Image src={about1} alt="aboutus" width={1140} height={455} style={{ borderRadius: 10 }} className={styles.aboutImageContainer} />
            </div>

            {/* our vision */}
            <div className={styles.visionAbsoluteContainer}>
                <div className={styles.visionContainer}>
                    <div className={styles.visionLeft}></div>
                    <div className={styles.visionRight}>
                        <h2 className={styles.visionTitle}>Our Vision</h2>
                        <Image src={about_border} alt="vision" width={73} height={3} />
                        <p className={styles.visionText}>
                            Established in 2021, with the vision to create Africa’s largest housing chain for low and middle income earners.
                        </p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={vision} alt="ourvision" width={547} height={417} />
                </div>
            </div>

            {/* our values */}
            <div className={styles.valuesContainer}>
                <div className={styles.valueTop}>
                    <h2 className={styles.valueTitle}>Our Values</h2>
                    <Image src={about_border} alt="value" width={73} height={3} className={styles.valueBorder} />
                    <p className={styles.visionText}>We exist to keep our clients and collaborators happy and fulfilled. In fulfilling our client mandate, we imbibe the following value. </p>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.vectorContainer}>
                            <Image src={vector} alt="ourvision" width={34.76} height={33.09} />
                        </div>
                        <p className={styles.cardTitle}>Integrity</p>
                        <p className={styles.cardText}>We walk the talk, trustworthy and ethical in all our actions.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.vectorContainer}>
                            <Image src={vector} alt="ourvision" width={34.76} height={33.09} />
                        </div>
                        <p className={styles.cardTitle}>Competence</p>
                        <p className={styles.cardText}>We are research-driven, using reliable data that help our clients make the right decisions. </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.vectorContainer}>
                            <Image src={vector2} alt="ourvision" width={34.76} height={33.09} />
                        </div>
                        <p className={styles.cardTitle}>Customer Service</p>
                        <p className={styles.cardText}>Our existence is key to providing satisfaction for all our clients. We afford them opportunities that establish competitive advantages and deliver results. </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About