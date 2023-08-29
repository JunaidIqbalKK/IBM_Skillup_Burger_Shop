import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import { MdDashboard } from "react-icons/md";

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <Link to="/">
          <IoFastFoodOutline style={{ width: "50px", height: "50px" }} />
        </Link>
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to="/me">
          <MdDashboard />
        </Link>
        <Link to="/me">
          <FaUser />
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Header;
