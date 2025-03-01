"use client";
import React, { ReactNode, useState } from "react";



export default  function NavBarAceternity({ className }: { className?: string }) 

{
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("sticky top-10 inset-x-0 max-w-3xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      
        <MenuItem setActive={setActive} active={active} item="Home">
        <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Walling">
        <HoveredLink href="https://staging.splendourinstone.com.au/walling/">Walling</HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Paving">
        <HoveredLink href="https://staging.splendourinstone.com.au/paving/">Paving</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="CobbleStone">
        <HoveredLink href="https://staging.splendourinstone.com.au/cobble-stones/">CobbleStone</HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Service">
        <HoveredLink href="/services">Service</HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Walling"
              href="https://staging.splendourinstone.com.au/walling/"
              src="/images/LinkhoverImages/wallingLink.png"
              description="Create Stunning Features with Our Natural Stone Walling"
            />
            <ProductItem
              title="Paving"
              href="https://staging.splendourinstone.com.au/pavving/"
              src="/images/LinkhoverImages/pavving.png"
              description="Elevate Your Outdoors with Splendour's Natural Stone Paving"
            />
            <ProductItem
              title="CobbleStone"
              href="https://staging.splendourinstone.com.au/cobble-stones/"
              src="/images/LinkhoverImages/cutomwalling.png"
              description="YOUR STONE DESIGN JOURNEY AT SPLENDOUR IN STONE"
            />
            <ProductItem
              title="All Projects"
              href="https://staging.splendourinstone.com.au/projects"
              src="/images/LinkhoverImages/gallery.png"
              description="FIND INSPIRATION FOR YOUR PROJECT"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
        <HoveredLink href="/about">Service</HoveredLink>
        </MenuItem>

    
        <MenuItem setActive={setActive} active={active} item="ContactUs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/portfolio">Projects</HoveredLink>
            <HoveredLink href="/services">Our Service</HoveredLink>
            <HoveredLink href="/portfolio">Portfolio</HoveredLink>
            <HoveredLink href="/gallery">Gallery</HoveredLink>
            
          </div>
        </MenuItem>

      
       
       

        <MenuItem setActive={setActive} active={active} item="Consultation">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/faq">FAQ</HoveredLink>
          <HoveredLink href="/contact">Contact</HoveredLink>
          <HoveredLink href="/">Blog</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

import { motion } from "framer-motion";
import Link,{LinkProps} from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-customColor dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-customColor shadow-input flex justify-center space-x-4 px-8 py-6  "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

interface HoveredLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}
export const HoveredLink = ({ children, ...rest }:  HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
