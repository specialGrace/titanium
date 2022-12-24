import React from 'react'
import styles from './Properties.module.css'
import Image from 'next/image'
import about_border from '../../asset/images/about_border.png'
import properties1 from '../../asset/images/properties1.png'
import properties2 from '../../asset/images/properties2.png'
import properties3 from '../../asset/images/properties3.png'
import cardborder from '../../asset/images/cardborder.png'

function Properties() {
    return (
        <div className={styles.container}>
            <div className={styles.titlecontainer}>
                <h2 className={styles.title}>Our Properties</h2>
                <Image src={about_border} alt="service" width={73} height={3} className={styles.border} />
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <Image src={properties1} alt="properties1" width={370} height={294} className={styles.cardImage} />
                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>Ejima</h2>
                        <h2 className={styles.amount}>$380.000.000</h2>
                        <p className={styles.cardText}>Luxirious 5 Bedroom duplex in Abuja</p>
                        <Image src={cardborder} alt="vision" width={295} height={1} />
                        <div className={styles.extrainfo}>
                            <span className={styles.houseinfo}>68m.</span>
                            <span className={styles.houseinfo}>5 Beds.</span>
                            <span className={styles.houseinfo}>5 baths.</span>
                            <span className={styles.houseinfo}>1 parking space.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={properties2} alt="properties2" width={370} height={294} className={styles.cardImage} />
                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>Rose Wood</h2>
                        <h2 className={styles.amount}>$380.000.000</h2>
                        <p className={styles.cardText}> Eco-friendly homes customized to Efficient, Built With Green Materials</p>
                        <Image src={cardborder} alt="vision" width={295} height={1} />
                        <div className={styles.extrainfo}>
                            <span className={styles.houseinfo}>68m.</span>
                            <span className={styles.houseinfo}>5 Beds.</span>
                            <span className={styles.houseinfo}>5 baths.</span>
                            <span className={styles.houseinfo}>1 parking space.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={properties3} alt="properties3" width={370} height={294} className={styles.cardImage} />
                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>Asokoro heights Guzape</h2>
                        <h2 className={styles.amount}>$380.000.000</h2>
                        <p className={styles.cardText}>Eco-friendly homes customized to Efficient, Built With Green Materials</p>
                        <Image src={cardborder} alt="vision" width={295} height={1} />
                        <div className={styles.extrainfo}>
                            <span className={styles.houseinfo}>68m.</span>
                            <span className={styles.houseinfo}>5 Beds.</span>
                            <span className={styles.houseinfo}>5 baths.</span>
                            <span className={styles.houseinfo}>1 parking space.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Properties