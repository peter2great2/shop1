import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import axios from "axios";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [admin, setAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/api/users/profile", {
          withCredentials: true,
        })
        .then((response) => {
          setAdmin(response.data.data.isAdmin);
          setLoggedIn(true);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/profile"} className="flex items-center">
          Profile
        </Link>
      </Typography>
      {admin && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to={"/admin"}>Admin</Link>
        </Typography>
      )}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:cursor-pointer flex items-center"
      >
        <Link to={'/user/cart'}>Cart</Link>
        <BiCart size={20} fill="#c2807a" onClick={() => window.location.href = "/user/cart"} />
      </Typography>
    </ul>
  );

  const handleLogOut = () => {
    axios
      .post(
        "http://localhost:3000/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        window.location.href = "/login";
      });
  };

  return (
    <div className="-m-6 max-h-[568px] w-[calc(100%+48px)] pt-2 px-4 mb-4">
      <Navbar className="fixed top-0 left-0 z-10 h-max max-w-full rounded-none lg:px-8 lg:py-2 bg-[#fff]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            <Link to={'/'} className="text-2xl">
              Shopify<span className="text-[#c2807a]">3</span>
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1 bg-[#c2807a]">
              {loggedIn ? (
                <Link
                  variant="gradient"
                  size="sm"
                  className="hidden w-[10vw] text-white text-center py-1 rounded-xl lg:inline-block px-2"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  variant="gradient"
                  size="sm"
                  className="hidden md:w-[15vw] text-white text-center p-2 rounded lg:inline-block bg-[#c2807a]"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  Login
                </Link>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? <FiX size={24} /> : <FiMenu size={24} />}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {loggedIn ? (
              <Link
                variant="gradient"
                size="sm"
                className="w-full bg-[#c2807a] hover:bg-[#c2807a] text-white text-center p-2 rounded lg:inline-block"
                onClick={handleLogOut}
              >
                Logout
              </Link>
            ) : (
              <Link
                variant="gradient"
                size="sm"
                className="w-full bg-[#c2807a] hover:bg-[#c2807a] text-white text-center p-2 rounded lg:inline-block"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Login
              </Link>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}