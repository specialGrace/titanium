import styles from "../../styles/SingleProperty.module.css";
import Image from "next/image";
import imgFour from "../../asset/images/img4.png";
import imgThree from "../../asset/images/img3.png";
import imgSix from "../../asset/images/img6.png";
import imgTwo from "../../asset/images/img2.png";
import imgOne from "../../asset/images/img1.png";



import { FaStickyNote } from "react-icons/fa";
import {
  MdOutlineChair,
  MdDining,
  MdKitchen,
  MdPark,
  MdOutlineBedroomChild,
  MdSecurity,
  MdHouseSiding,
  MdOutlineManageSearch,
} from "react-icons/md";
import { BiCloset, BiBed } from "react-icons/bi";
import { SiCinema4D } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import Link from "next/link";

export default function SingleProperty() {
  return (
    <div className={styles.generalContainer}>
      <div className={`${styles.banner}  mx-14`}>
        <p
          className={`${styles.bannerInfo} text-xs not-italic left-16px top-14px font-extrabold absolute text-white sm:text-4xl`}
        >
          Rosewood Town Houses
        </p>

        {/* <hr className={styles.timeline} /> */}
      </div>

      <div className={styles.container}>
        <div className={`${styles.carddiv} mx-14 `}>
          <h5 className={`${styles.card1Title} py-5`}>
            Rosewood Town houses (four Bedroom)
          </h5>
          <p className={`${styles.townHousesDetails} py-3`}>
            Eight numbers of beautiful townhouses, created to get you the most
            out of each space. With state of the art minimalist architecture,
            and well planned and carefully designed spaces, we provide for you a
            luxurious minimalist piece of architecture,to create an idyllic
            environment to create beautiful memories with you and yours.
          </p>

          <div
            role="list"
            className="grid grid-cols-2 py-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
          >
            <div className="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <Image
                src={imgTwo}
                alt=""
                className={`${styles.img1} object-cover pointer-events-none group-hover:opacity-75`}
              />
            </div>
            <div className="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <Image
                src={imgThree}
                alt=""
                className={`${styles.img2} object-cover pointer-events-none group-hover:opacity-75`}
              />
            </div>
            <div className="group block w-full aspect-w-10 aspect-h-7  bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <Image
                src={imgOne}
                alt=""
                className={`${styles.img3} object-cover pointer-events-none group-hover:opacity-75`}
              />
            </div>
            {/* <div className={styles.eclipseContainer}> */}
            <FaGreaterThan className={styles.eclipse} />
            {/* </div> */}
          </div>
        </div>

        <div className="mx-14 my-10 ">
          <h6 className="text-center text-xs not-italic font-extrabold text-gray-900 sm:text-4xl">
            House Facilities
          </h6>
          <hr
            className={`${styles.hr} text-center text-xs not-italic font-extrabold text-gray-900 sm:text-4xl`}
          />
          <div
            className={`${styles.crdContainer} py-7 grid grid-cols-1 gap-4 sm:grid-cols-4`}
          >
            {/* {people.map((person) => ( */}

            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 mdshadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <BiBed className={`${styles.icon} h-10 w-10 rounded-full`} />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">
                      Private family launch
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      with dry kitchen
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 md:shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <BiBed className={`${styles.icon} h-10 w-10 rounded-full`} />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">
                      Living room and Dining
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 md:shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <MdKitchen
                  className={`${styles.icon} h-10 w-10 rounded-full`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">
                      Large Kitchen
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 md:shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <MdDining className={`${styles.icon} h-10 w-10 rounded-full`} />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">Dining</p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.crd} relative rounded-lg border-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <BiCloset className={`${styles.icon} h-10 w-10 rounded-full`} />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">
                      4 nos walk in closets
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 md:shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <SiCinema4D
                  className={`${styles.icon} h-10 w-10 rounded-full`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">Cinema</p>
                  </div>
                </Link>
              </div>
            </div>

            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 md:shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <MdPark className={`${styles.icon} h-10 w-10 rounded-full`} />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">
                      2 Nos Parking per villa
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 md:shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <MdOutlineBedroomChild
                  className={`${styles.icon} h-10 w-10 rounded-full`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">Maids room</p>
                  </div>
                </Link>
              </div>
            </div>

            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 md:shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <BiBed className={`${styles.icon} h-10 w-10 rounded-full`} />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">
                      Pent floor with masters bedroom
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.crd} relative rounded-lg shadow-xl border-gray-300 px-6 py-5 md:backdrop:shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
            >
              <div className={`${styles.icondiv} flex-shrink-0`}>
                <FaStickyNote
                  className={`${styles.icon} h-10 w-10 rounded-full`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="/" className="focus:outline-none">
                  <div>
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm text-gray-500 truncate">
                      Pent floor with masters
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      lounge and Masters
                    </p>
                    <p className="text-sm text-gray-500 truncate">bedroom</p>
                  </div>
                </Link>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>

        <div className={`${styles.listContainer} mx-14 my-10 `}>
          <h6 className="text-center text-xs not-italic font-extrabold text-gray-900 sm:text-4xl">
            House Amenities
          </h6>
          <hr
            className={`${styles.hr} text-center text-xs not-italic font-extrabold text-gray-900 sm:text-4xl`}
          />

          <ul
            role="list"
            className={`${styles.crdUl} grid grid-cols-1 place-content-stretch gap-6 mx-15 my-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 `}
          >
            {/* {people.map((person) => ( */}
            <li
              className={`${styles.crdAmenities} col-span-1 flex flex-col pl-5 bg-white rounded-lg shadow divide-y divide-gray-200`}
            >
              <div className="flex-1 flex flex-col p-8">
                <div className={`${styles.icondiv} flex-shrink-0`}>
                  <BsCamera
                    className={`${styles.icon} h-10 w-10 rounded-full`}
                  />
                </div>
                <h3 className="mt-6 text-gray-900 text-xl font-bold">
                  CCTV Security Camera
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dd className="text-gray-500 text-sm">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.sit aliqua dolor
                  </dd>
                </dl>
              </div>
            </li>

            <li
              className={`${styles.crdAmenities} col-span-1 flex flex-col pl-5 bg-white rounded-lg shadow divide-y divide-gray-200`}
            >
              <div className="flex-1 flex flex-col p-8">
                <div className={`${styles.icondiv} flex-shrink-0`}>
                  <MdHouseSiding
                    className={`${styles.icon} h-10 w-10 rounded-full`}
                  />
                </div>
                <h3 className="mt-6 text-gray-900 text-xl font-bold">
                  Generator House
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dd className="text-gray-500 text-sm">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.sit aliqua dolor
                  </dd>
                </dl>
              </div>
            </li>

            <li
              className={`${styles.crdAmenities} col-span-1 flex flex-col pl-5  bg-white rounded-lg shadow divide-y divide-gray-200`}
            >
              <div className="flex-1 flex flex-col p-8">
                <div className={`${styles.icondiv} flex-shrink-0`}>
                  <MdSecurity
                    className={`${styles.icon} h-10 w-10 rounded-full`}
                  />
                </div>
                <h3 className="mt-6 text-gray-900 text-xl font-bold">
                  State Of The Art Security
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dd className="text-gray-500 text-sm">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.sit aliqua dolor
                  </dd>
                </dl>
              </div>
            </li>
            <li
              className={`${styles.crdAmenities} col-span-1 flex flex-col pl-5  bg-white rounded-lg shadow divide-y divide-gray-200`}
            >
              <div className="flex-1 flex flex-col p-8">
                <div className={`${styles.icondiv} flex-shrink-0`}>
                  <MdOutlineManageSearch
                    className={`${styles.icon} h-10 w-10 rounded-full`}
                  />
                </div>
                <h3 className="mt-6 text-gray-900 text-xl font-bold">
                  Facility Management
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dd className="text-gray-500 text-sm">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.sit aliqua dolor
                  </dd>
                </dl>
              </div>
            </li>
            {/* ))} */}
          </ul>
        </div>

        <div className="mx-14 my-3 ">
          <h6 className="text-center text-xs p-8 not-italic font-extrabold text-gray-900 sm:text-4xl">
            Rosewood Town Houses Floor Plan & Pricing
          </h6>
          {/* <div className="grid grid-cols-2 gap-x-4  sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"> */}
          <div className={styles.pricingContainer}>
            <div className={styles.pricing}>
              <div
                className={`${styles.btndiv} grid grid-cols-3 gap-x-1 relative z-0 inline-flex shadow-sm rounded-md sm:grid-cols-3 gap-y-4`}
              >
                <button
                  type="button"
                  className={`${styles.btnBorder} relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                >
                  <p className={styles.pricingIm}>First Floor Plan</p>
                </button>

                <button
                  type="button"
                  className={`${styles.btn} -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                >
                  <p className={styles.pricingI}>Second Floor Plan</p>
                </button>
                <button
                  type="button"
                  className={`${styles.btn} -ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                >
                  <p className={styles.pricingI}>Ground Floor Plan</p>
                </button>
              </div>
              <hr className={styles.btnLine} />
              {/* <hr className={styles.lineBtn} /> */}
              {/* <div className="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"> */}
              <div className={`${styles.plan} object-contain h-46 w-96`}>
                <Image src={imgSix} alt="" />
              </div>
            </div>

            <div className={`${styles.pricingImg} object-contain`}>
              <Image src={imgFour} alt="" />
            </div>
          </div>
          {/* <div> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
