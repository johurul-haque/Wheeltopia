/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive &&
          "bg-gradient-to-r from-green-700 from-50% to-lime-500 bg-clip-text text-transparent ") +
        "outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-green-700 hover:from-50% hover:to-lime-500 hover:bg-clip-text hover:text-transparent"
      }
    >
      {children}
    </NavLink>
  );
};
