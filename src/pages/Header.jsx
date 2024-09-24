"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />

    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50 ", className)}>
      <Menu setActive={setActive}>
        <Link to="/">
        <div className="text-black dark:text-white cursor-pointer" >
            Home
        </div>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/google" to={"/google"} className="">Google Ads Calculator</HoveredLink>
            <HoveredLink href="/youtube" to={"/youtube"}>Youtube Ads Calculator</HoveredLink>
            <HoveredLink href="/instagram" to={"/instagram"}>Instagram Ads Calculator</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="PortFolio"
              href="https://adharsh-portfolio.netlify.app/"
              target="_blank"
              src="/public/portfolio.png"
              description="Portfolio Website" />
            <ProductItem
              title="E-Commerce Platform"
              href="https://jumpaquad.vercel.app"
              src="/public/jumpsquad.png"
              description="admin dashboard, JWT authentication, PayPal integration, AWS S3 storage, and secure backend." />
            <ProductItem
              title="Git Status"
              href="https://git-statistics.netlify.app/"
              src="/public/GitStats.png"
              description="GitHub User Statistics" />
            <ProductItem
              title="30+ mini projects"
              href="https://js-portfolio24.netlify.app/"
              src="/public/js.png"
              description="showcase my skills in front-end development, API integration, and user interface design." />
          </div>
        </MenuItem>
      </Menu>
    </div>)
  );
}
