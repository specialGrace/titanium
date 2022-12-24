import React from 'react'
import styles from './Services.module.css'
import Image from 'next/image'
import about_border from '../../asset/images/about_border.png'
import services from '../../asset/images/services.png'

function Services() {
    return (
        <div className={styles.servicesAbsoluteContainer}>
            <div className={styles.serviceContainer}>
                <div className={styles.serviceLeft}>
                    <div className={styles.inner}>
                        <h2 className={styles.serviceTitle}>Our Services</h2>
                        <Image src={about_border} alt="service" width={73} height={3} />
                        <p className={styles.serviceText}>
                            We offer excellent services in building smart enabled, eco-friendly and
                            functional homes. We make relative luxurious accommodation affordable.

                        </p>
                    </div>

                </div>
                <div className={styles.serviceRight}></div>
                <div className={styles.imageContainer}>
                    <Image src={services} alt="ourservice" width={547} height={417} />
                </div>
            </div>
        </div>
    )
}

export default Services