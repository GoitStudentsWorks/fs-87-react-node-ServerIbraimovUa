import React from "react";
import { Navigate, redirect } from "react-router-dom";
const WelcomePage = () => {
  const handleClick = () => {
    console.log("hi");
    return <Navigate to="/signup" />;
  };

  return (
    <section>
      <div>
        <h1>Water consumption tracker</h1>
        <h2>Record daily water intake and track</h2>
        <h3>Tracker Benefits</h3>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M11.25 5V8.75M28.75 5V8.75M5 31.25V12.5C5 11.5054 5.39509 10.5516 6.09835 9.84835C6.80161 9.14509 7.75544 8.75 8.75 8.75H31.25C32.2446 8.75 33.1984 9.14509 33.9016 9.84835C34.6049 10.5516 35 11.5054 35 12.5V31.25M5 31.25C5 32.2446 5.39509 33.1984 6.09835 33.9016C6.80161 34.6049 7.75544 35 8.75 35H31.25C32.2446 35 33.1984 34.6049 33.9016 33.9016C34.6049 33.1984 35 32.2446 35 31.25M5 31.25V18.75C5 17.7554 5.39509 16.8016 6.09835 16.0983C6.80161 15.3951 7.75544 15 8.75 15H31.25C32.2446 15 33.1984 15.3951 33.9016 16.0983C34.6049 16.8016 35 17.7554 35 18.75V31.25M20 21.25H20.0133V21.2633H20V21.25ZM20 25H20.0133V25.0133H20V25ZM20 28.75H20.0133V28.7633H20V28.75ZM16.25 25H16.2633V25.0133H16.25V25ZM16.25 28.75H16.2633V28.7633H16.25V28.75ZM12.5 25H12.5133V25.0133H12.5V25ZM12.5 28.75H12.5133V28.7633H12.5V28.75ZM23.75 21.25H23.7633V21.2633H23.75V21.25ZM23.75 25H23.7633V25.0133H23.75V25ZM23.75 28.75H23.7633V28.7633H23.75V28.75ZM27.5 21.25H27.5133V21.2633H27.5V21.25ZM27.5 25H27.5133V25.0133H27.5V25Z"
                stroke="#407BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Habit drive</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M6.25 5V23.75C6.25 24.7446 6.64509 25.6984 7.34835 26.4016C8.05161 27.1049 9.00544 27.5 10 27.5H13.75M6.25 5H3.75M6.25 5H33.75M13.75 27.5H26.25M13.75 27.5L12.0833 32.5M33.75 5H36.25M33.75 5V23.75C33.75 24.7446 33.3549 25.6984 32.6516 26.4016C31.9484 27.1049 30.9946 27.5 30 27.5H26.25M26.25 27.5L27.9167 32.5M12.0833 32.5H27.9167M12.0833 32.5L11.25 35M27.9167 32.5L28.75 35M15 18.75V21.25M20 15V21.25M25 11.25V21.25"
                stroke="#407BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* <svg>
              <use href="./images/icon.svg#icon-clock-1"></use>
            </svg> */}
            <p>View statistics</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M19.0333 25.2833L28.75 35C29.5833 35.8067 30.7003 36.2535 31.8601 36.2441C33.0199 36.2347 34.1295 35.7698 34.9497 34.9497C35.7698 34.1295 36.2347 33.0199 36.2441 31.8601C36.2535 30.7003 35.8067 29.5833 35 28.75L25.205 18.955M19.0333 25.2833L23.1933 20.2333C23.7217 19.5933 24.4267 19.19 25.2067 18.9567C26.1233 18.6833 27.145 18.6433 28.1117 18.7233C29.4147 18.8352 30.7244 18.6044 31.9107 18.0539C33.097 17.5033 34.1187 16.6521 34.8744 15.5847C35.6301 14.5173 36.0936 13.2708 36.2188 11.969C36.3441 10.6672 36.1267 9.35521 35.5883 8.16333L30.1283 13.625C29.2148 13.4138 28.379 12.9503 27.716 12.2873C27.0531 11.6243 26.5896 10.7885 26.3783 9.875L31.8383 4.415C30.6464 3.87661 29.3345 3.65924 28.0327 3.78447C26.7308 3.90971 25.4844 4.37318 24.417 5.12891C23.3496 5.88465 22.4984 6.90636 21.9478 8.09266C21.3972 9.27896 21.1664 10.5886 21.2783 11.8917C21.43 13.685 21.16 15.665 19.7717 16.8083L19.6017 16.95M19.0333 25.2833L11.275 34.705C10.899 35.1633 10.4312 35.5379 9.90165 35.8045C9.37215 36.0711 8.79268 36.2239 8.20055 36.2531C7.60842 36.2822 7.01674 36.1871 6.46361 35.9737C5.91048 35.7604 5.40814 35.4336 4.98894 35.0144C4.56973 34.5952 4.24294 34.0928 4.0296 33.5397C3.81627 32.9866 3.72111 32.3949 3.75025 31.8028C3.7794 31.2107 3.9322 30.6312 4.19882 30.1017C4.46544 29.5722 4.83998 29.1043 5.29833 28.7283L16.6933 19.345L9.84833 12.5H7.49999L3.75 6.25L6.24999 3.75L12.5 7.5V9.84833L19.6 16.9483L16.6917 19.3433M30.625 30.625L26.25 26.25M8.11166 31.875H8.12499V31.8883H8.11166V31.875Z"
                stroke="#407BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* <svg>
              <use href="./images/icon.svg#icon-clock-1"></use>
            </svg> */}
            <p>Personal rate setting</p>
          </li>
        </ul>
        <button onClick={handleClick} type="button">
          Try tracker
        </button>
      </div>
      <div>
        <h3>WhyDrinkWater</h3>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#407BFF" />
            </svg>
          </li>
          <p>Supply of nutrients to all organs</p>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#407BFF" />
            </svg>
          </li>
          <p>Providing oxygen to the lungs</p>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#407BFF" />
            </svg>
          </li>
          <p>Maintaining the work of the heart</p>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#407BFF" />
            </svg>
          </li>
          <p>Release of processed substances</p>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#407BFF" />
            </svg>
          </li>
          <p>Ensuring the stability of the internal environment</p>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#407BFF" />
            </svg>
          </li>
          <p>Maintaining within the normal temperature</p>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#407BFF" />
            </svg>
          </li>
          <p>Maintaining an immune system capable of resisting disease</p>
        </ul>
      </div>
    </section>
  );
};

export default WelcomePage;
