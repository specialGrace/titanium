import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import bg from "../../../asset/images/home_bg.png";
import DatePicker from "react-datepicker";
import CustomModal from "../../Modals/CustomModal/CustomModal";
import Success from "../../Success/Success";

import styles from "./Register.module.css";
import "react-datepicker/dist/react-datepicker.css";

const Register = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  const registrationHandler = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const style = {
    backgroundImage: `url(${bg.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  };
  const title = "Congratulations Investors";
  const text =
    "You have successfully applied to join the Investment Club, with Silver plan, your application is being reviewed. You will get a mail soon";
  return (
    <>
      {/* success modal */}

      {modalOpen && (
        <CustomModal>
          <Success title={title} text={text} setModalOpen={setModalOpen} />
        </CustomModal>
      )}

      {/* registration form */}
      <div className={`${styles.container}`}>
        <div className={styles.containerInner} style={style}>
          <div className={styles.textContainer}>
            <h2>Club Registration form</h2>
            <p>Choose a plan and become a club member</p>
          </div>
          <div className={styles.overlay}></div>
        </div>

        <div className="container md:w-4/5 mx-auto bg-white p-5 drop-shadow-md relative -top-[120px] z-[10] rounded-3xl">
          <div className="p-8 bg-white">
            <div className="w-24 flex items-center justify-center text-titaniumOrange cursor-pointer">
              <BiChevronLeft className=" text-2xl" />
              <span className="text-base">back</span>
            </div>
            <h4 className="text-blueShade500 text-[20px] mx-3">
              Complete the form below to be part of the community
            </h4>
          </div>
          <hr className="text-titaniumGray20" />
          <form
            className="flex flex-col justify-between bg-white p-8 mt-3"
            onSubmit={(e) => registrationHandler(e)}
          >
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <div className="w-full p-2 md:w-1/2">
                <div className="flex flex-col mb-3">
                  <label htmlFor="firstName" className="mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="flex-1 py-3 rounded px-3 focus:outline-0 bg-titaniumGray40 border border-text-titaniumGray30"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="lastName" className="mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="flex-1 py-3 rounded px-3 focus:outline-0 bg-titaniumGray40 border border-text-titaniumGray30"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="email" className="mb-1">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email address"
                    className="flex-1 py-3 rounded px-3 focus:outline-0 bg-titaniumGray40 border border-text-titaniumGray30"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="phone" className="mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone address"
                    className="flex-1 py-3 rounded px-3 focus:outline-0 bg-titaniumGray40 border border-text-titaniumGray30"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="maritalStatus" className="mb-1">
                    Marital Status
                  </label>
                  <select
                    type="select"
                    id="maritalStatus"
                    className="flex-1 py-3 rounded px-3 focus:outline-0 bg-titaniumGray40 border border-text-titaniumGray30"
                  >
                    <option value=""> Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label htmlFor="employmentStatus" className="mb-1">
                    Employment Status
                  </label>
                  <select
                    type="select"
                    id="employmentStatus"
                    className="flex-1 py-3 rounded px-3 focus:outline-0 bg-titaniumGray40 border border-text-titaniumGray30"
                  >
                    <option value="">Select Status</option>
                    <option value="employed">Employed</option>
                    <option value="student">Student</option>
                    <option value="unemployed">Unemployed</option>
                  </select>
                </div>
              </div>
              <div className="w-full p-2 md:w-1/2">
                <div className="flex flex-col mb-3">
                  <label htmlFor="jobTitle" className="mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    placeholder="Enter your job title"
                    className="flex-1 py-3 rounded px-3 px-6 focus:outline-0 bg-titaniumGray40 border border-text-titaniumGray30"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label htmlFor="clubMembership" className="mb-1">
                    Club Membership
                  </label>
                  <select
                    type="select"
                    id="clubMembership"
                    className="flex-1 py-3 px-6 rounded px-3 focus:outline-0 bg-titaniumGray40 border border-text-titaniumGray30"
                  >
                    <option value="">Select your club membership</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="diamond">Diamond</option>
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label htmlFor="date" className="mb-1">
                    Join Date
                  </label>
                  <div className="flex py-3 px-6 rounded px-3 bg-titaniumGray40 border border-text-titaniumGray30">
                    <DatePicker
                      showTimeSelect
                      selected={startDate}
                      // timeClassName={handleColor}
                      className="px-6 w-full  focus:outline-0 bg-inherit border border-0"
                    />
                    <FaRegCalendarAlt className="text-[20px]" />
                  </div>
                </div>

                <div className="flex flex-col mb-3">
                  <label htmlFor="aboutUs" className="mb-1">
                    How did you hear about us
                  </label>
                  <select
                    type="select"
                    id="aboutUs"
                    className="flex-1 py-3 rounded px-3 focus:outline-0 px-6 bg-titaniumGray40 border border-text-titaniumGray30"
                  >
                    <option value="">Select</option>
                    <option value="social media">Social Media</option>
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label htmlFor="referral" className="mb-1">
                    Refer a friend
                  </label>
                  <textarea
                    name="referral"
                    id="referral"
                    cols="30"
                    rows="5"
                    placeholder="Enter friend's name phone number and email Address"
                    className="flex-1 py-3 rounded px-3 focus:outline-0 px-6 bg-titaniumGray40 border border-text-titaniumGray30"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-[408px] mx-auto py-3 px-6 text-white font-semibold bg-titaniumOrange rounded-full"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
