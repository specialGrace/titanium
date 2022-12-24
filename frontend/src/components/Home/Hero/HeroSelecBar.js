import React from 'react'
import styles from './HeroSelectBar.module.css'
import { CiSearch } from 'react-icons/ci'
import Image from 'next/image'
import border_rigth from '../../../asset/images/border_rigth.png'

function HeroSelecBar() {
    return (
        <div className={styles.container}>
            <div className={styles.locationWrapper}>
                <p className={styles.label}>Select Location</p>
                <select>
                    <option></option>
                </select>
            </div>
            <Image src={border_rigth} alt="border" width={2} height={90} />
            <div className={styles.bedroomWrapper}>
                <p className={styles.label}>Select Bedroom Amount</p>
                <select>
                    <option></option>
                </select>
            </div>
            <Image src={border_rigth} alt="border" width={2} height={90} />
            <div className={styles.priceWrapper}>
                <p className={styles.label}>Select Price Range</p>
                <select>
                    <option></option>
                </select>
            </div>
            <Image src={border_rigth} alt="border" width={2} height={90} />
            <div className={styles.propertyWrapper}>
                <p className={styles.label}>Select Property Type</p>
                <select>
                    <option></option>
                </select>
            </div>
            <div className={styles.searchContainer}>
                <CiSearch className={styles.searchIcon} />
                <span className={styles.searchText}>SEARCH</span>
            </div>
        </div>
    )
}

export default HeroSelecBar