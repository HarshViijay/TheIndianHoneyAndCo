import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-500 rounded-[10px] outline-none ${styles} hover:shadow-2xl`}>
    Read More
  </button>
);

export default Button;
