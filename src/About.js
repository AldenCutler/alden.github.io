import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.5, staggerChildren: 0.5}},
  hidden: { opacity: 0, scale: 1, x: 200, transition: { delayChildren: 0.5 }},
};

const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

export function AboutSection() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div variants={variants} animate={control} initial="hidden" ref={ref} className="about" id="about">
      <div className="text">
        {/* Section Header */}
        <motion.div className="section-header">
          <motion.h2>About Me</motion.h2>
        </motion.div>

        <motion.div className="section-text">
          <motion.p>
            Hey there! I'm Alden, currently a sophomore at Worcester
            Polytechnic Institute. I'm majoring in Computer Science with a minor
            in data science, and I'm looking for internships during the summer
            of 2024. I'm interested in full-stack web development, embedded
            programming, data science, computer vision, and machine learning.
          </motion.p>
          {/* <motion.p>
            Some Completed Coursework:
            <ul>
              <li>Object-Oriented Design</li>
              <li>Systems Programming Concepts</li>
              <li>Machine Organization and Assembly Language</li>
              <li>Algorithms</li>
              <li>Operating Systems</li>
              <li>Discrete Mathematics</li>
              <li>Linear Algebra</li>
              <li>Calculus 1 - 4</li>
              <li>Differential Equations</li>
              <li>Probability and Statistics</li>
              <li>Introduction to Data Science</li>
              <li>Intermediate Data Science</li>
            </ul>
          </motion.p> */}
          <motion.p>
            Outside of a professional setting, I'm a big soccer fan and I enjoy
            biking and hiking. I've lived the majority of my life in the Pacific Northwest, 
            but I'm currently living in Massachusetts for college.
          </motion.p>
        </motion.div>
      </div>
      <motion.div className="prof-pic">
        <img src={require("./boat2.jpg")} className="pic"></img>
      </motion.div>
    </motion.div>
  );
}
