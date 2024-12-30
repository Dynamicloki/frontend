"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  GlobeAmericasIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  TableCellsIcon,
  BoltIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { header } from "@/data";
import Image from "next/image";
 
const navListMenuItems = [
  {
    link : "/web-development",
    title: "Web Development",
    icon: GlobeAltIcon,
  },
  {
    link : "/web-design",
    title: "Web Design",
    icon: PaintBrushIcon,
  },
  {
    link : "/seo",
    title: "SEO",
    icon: GlobeAmericasIcon,
  },
  {
    link : "/data-analysis",
    title: "Data Analysis",
    icon: TableCellsIcon,
  },
  {
    link : "/ai-automation",
    title: "AI Automations",
    icon: BoltIcon,
  },
  {
    link : "/cyber-security",
    title: "Cyber Security",
    icon: LockClosedIcon,
  },
];
import { Nunito_Sans,Montserrat } from "next/font/google";

const nunito = Nunito_Sans({
  weight:'500',
  size:'large',
  subsets:['latin']
})
const monteserrat = Montserrat({
  weight:'600',
  size:'large',
  subsets:['latin']
})
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <a href={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-gray-400">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="h5" className="font-medium">
            <ListItem
              className={`${monteserrat.className} flex items-center gap-2 py-2 pr-4 font-medium text-black hover:text-white hover:bg-accent`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              href='/services'
            >
              <Link href='/services'>Services</Link>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 ml-4 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 ml-4 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-x-10">
      <Typography
        as="a"
        href="/about"
        variant="h5"
        className="font-medium"
      >
      <ListItem className={`${monteserrat.className} text-black flex items-center gap-2 py-2 pr-4 hover:text-white hover:bg-accent`}>About Us</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/contact"
        variant="h5"
        className="font-medium"
      >
        <ListItem className={`${monteserrat.className} text-black flex items-center gap-2 py-2 pr-4 hover:text-white hover:bg-accent`}>
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}
 
export function NavbarMT() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const { logo,btnText } = header;

  // scroll event
  React.useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

 
  return (
    <div className={`${isActive ? 'lg:top-0 bg-transparent' : 'lg:top-[1rem]'} py-6 lg:py-4 fixed w-full transition-all z-10`}>
      <Navbar className="mx-auto w-full px-8 py-4" data-aos='fade-down' data-aos-delay='1000'>
        <div className="flex items-center justify-between text-blue-gray-900 border-none">
        <Link href='/' data-aos='fade-down' data-aos-delay='1300'>
          <Image src={logo} width='60' height='60'></Image>
        </Link>
          <div className="hidden lg:block" data-aos='fade-down' data-aos-delay='1400'>
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Link href='https://wa.me/message/WGWDL3DUG4T7K1' data-aos='fade-down' data-aos-delay='1500'>
              <Button variant="text" size="lg" className='bg-accent text-white link text-lg border-none'>
                {btnText}
              </Button>
            </Link>
            {/* <Button variant="gradient" size="sm">
              Sign In
            </Button> */}
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link href='https://wa.me/message/WGWDL3DUG4T7K1' className='w-full'>
              <Button variant="outlined" size="md" fullWidth className='bg-accent text-white border-none'>
                {btnText}
              </Button>
            </Link>
            {/* <Button variant="gradient" size="sm" fullWidth>
              Sign In
            </Button> */}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}