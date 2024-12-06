import React, { createContext, useState } from "react";

// Create the Navbar context
export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [show, setShow] = useState(false); // State for responsive navbar
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  // List of courses
  const courses = [
    "برامج الدبلوم",
    "البرامج التأهيلية",
    "البرامج التطويرية",
    "الإدارة و القيادة",
    "تطوير الذات",
    "التسويق الإلكتروني",
  ];

  // Handle option click and navigate if necessary
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <NavbarContext.Provider
      value={{
        show,
        setShow,
        showDropdown,
        setShowDropdown,
        selectedOption,
        setSelectedOption,
        courses,
        handleOptionClick,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
