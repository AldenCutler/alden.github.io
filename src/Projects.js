import { SectionHeader } from "./Section.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { React } from "react";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.5, staggerChildren: 0.5 },
  },
  hidden: { opacity: 0, scale: 1, x: -200, transition: { delayChildren: 0.5 } },
};

export function ProjectsSection() {
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
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
      className="projects"
    >
      <motion.div className="code-pic">
        <img src={require("./carbon.jpg")}></img>
      </motion.div>
      <motion.div className="text">
        <SectionHeader id="projects" text="Projects" />
        <motion.div className="section-text">
          <motion.p>
            I was watching YouTube the other day and came across{" "}
            <a href="https://www.youtube.com/watch?v=w8yWXqWQYmU">this</a> video
            about creating a neural network from scratch without using libraries
            like Tensorflow or Pytorch which inspired me to create my own. I
            used the MNIST dataset, which is a dataset of 60,000 images of
            handwritten digits, to train my neural network to recognize
            handwritten digits.
          </motion.p>
          <p>
            My attempt only uses three layers, an input layer, one hidden layer,
            and an output layer.
          </p>
          <p>
            I used the ReLU function as my activation function and the gradient
            descent algorithm to optimize the weights and biases of my neural
            network. The hidden layer uses forward and backwards propogation. I
            was able to achieve an accuracy of 85.5% on the test set, which is
            pretty good considering my neural network only has one hidden layer.
            I plan on adding more layers to my neural network in the future to
            see if I can improve the accuracy. You can find the code for my
            neural network here:
          </p>
          <motion.button 
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          className="download-button">
            <a href={require("./neural-network.ipynb")}>
              Download Neural Network Code (.ipynb)
            </a>
          </motion.button>
          <motion.button 
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          className="download-button">
            <a href="https://www.kaggle.com/competitions/digit-recognizer/data?select=train.csv">
              Link to Dataset Download
            </a>
          </motion.button>
          <motion.p></motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
