import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import Container from "../../layout/containers/container.component";
import Navbar from "../../navbar";

const links = [
  {
    id: "Home",
    title: "Home",
    path: "",
  },
  {
    id: "About",
    title: "About",
    path: "/about",
  },
  {
    id: "Gallery",
    title: "Gallery",
    path: "/gallery",
  },
  {
    id: "Services",
    title: "Services",
    path: "/services",
  },
  {
    id: "Pricing",
    title: "Pricing",
    path: "/pricing",
  },
  {
    id: "Blog",
    title: "Blog",
    path: "/blog",
  },
  {
    id: "Contact",
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="bg-black py-3">
      <Container>
        <div className="flex items-center justify-between h-full ">
          <Link to="/" className="w-40">
            <Logo />
          </Link>
          <Navbar links={links} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
