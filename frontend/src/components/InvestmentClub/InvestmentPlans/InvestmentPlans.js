import React from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

import styles from "./InvestmentPlans.module.css";

const InvestmentPlans = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.card}>
        <div className={`${styles.cardHeader} ${styles.cardHeaderSilver} `}>
          <h4>Silver</h4>
          <h5 className={styles.pricing}>$250</h5>
          <p className={styles.cardHeadertext}>Earn 20% Interest </p>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardBodytext}>
            Save $250 Dollars monthly for a period of 2 years and cash-out with
            20% interest on investment at the end of the teneur or reinvest your
            returns on investment.
          </p>
          <ul className={styles.features}>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
          </ul>
        </div>
        <Link href="/investment_club/register">
          <a>
            <div className={styles.cardFooter_cta}>
              <button>Get Started</button>
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.card}>
        <div className={`${styles.cardHeader} ${styles.cardHeaderGold} `}>
          <h4>Gold</h4>
          <h5 className={styles.pricing}>$500</h5>
          <p className={styles.cardHeadertext}>Earn 20% Interest </p>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardBodytext}>
            Save $500 Dollars monthly for a period of 2 years and have the
            option to either, cash-out with 20% interest on investment.
          </p>
          <ul className={styles.features}>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
          </ul>
        </div>
        <Link href="/investment_club/register">
          <a>
            <div className={styles.cardFooter_cta}>
              <button>Get Started</button>
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.card}>
        <div className={`${styles.cardHeader} ${styles.cardHeaderDiamond} `}>
          <h4>Diamond</h4>
          <h5 className={styles.pricing}>$1000</h5>
          <p className={styles.cardHeadertext}>Earn 20% Interest </p>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardBodytext}>
            Save $1,000 Dollars monthly for a period of 2 years and have the
            option to either, cash-out with 20% interest on investment.
          </p>
          <ul className={styles.features}>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <FaCheck className={styles.icons} />
              </div>
              <span>Benefits</span>
            </li>
          </ul>
        </div>
        <Link href="/investment_club/register">
          <a>
            <div className={styles.cardFooter_cta}>
              <button>Get Started</button>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default InvestmentPlans;
