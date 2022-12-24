import React from "react";
import Link from "next/link";
import Image from "next/image";
import DrawerToggleButton from "../../SideDrawer/DrawerToggleButton";
import logo from "../../../asset/images/titanium-logo.png";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = ({ drawerToggleClickHandler, SideDrawerOpen }) => {
  return (
    <div className={`${styles.container}`}>
      <nav className={`${styles.navBarMenu} wrapper-80`}>
        <Link href="/" className={styles.navBarMenu__logo}>
          <a>
            <Image src={logo} alt="titanium" width={74} height={62} />
          </a>
        </Link>
        <ul className={`${styles.navBarMenu__items}`}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/investment_club">
              <a>Investment club</a>
            </Link>
          </li>
          <li>
            <Link href="/properties">
              <a>Properties</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
        <div className={styles.spacer}></div>
        <div className={styles.navBarMenu__cta}>
          <span>get a quote now</span>
        </div>
        <DrawerToggleButton
          click={drawerToggleClickHandler}
          SideDrawerOpen={SideDrawerOpen}
        />
      </nav>
    </div>
  );
};

export default HeaderMenu;
