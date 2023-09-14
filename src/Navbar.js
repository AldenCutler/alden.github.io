import { Logo } from "./NavItem";
import { NavItem } from "./NavItem";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5}},
  hidden: { opacity: 0, scale: 1, y: -100},
}


export function Navbar() {

  const control = useAnimation();
  const [ref, inView] = useInView({threshold: 0});

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.nav ref={ref} variants={variants} initial="hidden" animate={control} className="navbar">
      <Logo />
      <NavItem text="About Me" id="#about" />
      <NavItem text="Languages" id="#languages" />
      <NavItem text="Projects" id="#projects" />
      <NavItem text="Contact" id="#contact" />
    </motion.nav>
  );
}


