import {
  JavascriptOriginal,
  BashPlain,
  BootstrapOriginalWordmark,
  COriginal,
  CplusplusOriginal,
  Css3Original,
  GitOriginal,
  Html5Original,
  JavaOriginal,
  JupyterOriginalWordmark,
  LinuxOriginal,
  NodejsOriginalWordmark,
  NumpyOriginal,
  PandasOriginalWordmark,
  PythonOriginalWordmark,
  ROriginal,
  ReactOriginal,
} from "devicons-react";
import "./App.css";
import { Navbar } from "./Navbar";
import { Card } from "./Card";
import { TableFive } from "./TableFive";
import { SectionHeader, SectionText } from "./Section";
import { Footer } from "./Footer";
import { IconGrid } from "./IconGrid";

const icons = {
  js: <Card icon={<JavascriptOriginal size={75} />} />,
  bash: <Card icon={<BashPlain size={75} color="green" />} />,
  bootstrap: <Card icon={<BootstrapOriginalWordmark size={75} />} />,
  c: <Card icon={<COriginal size={75} />} />,
  cpp: <Card icon={<CplusplusOriginal size={75} />} />,
  css: <Card icon={<Css3Original size={75} />} />,
  git: <Card icon={<GitOriginal size={75} />} />,
  html: <Card icon={<Html5Original size={75} />} />,
  java: <Card icon={<JavaOriginal size={75} />} />,
  jupyter: <Card icon={<JupyterOriginalWordmark size={75} />} />,
  linux: <Card icon={<LinuxOriginal size={75} />} />,
  node: <Card icon={<NodejsOriginalWordmark size={75} />} />,
  numpy: <Card icon={<NumpyOriginal size={75} />} />,
  pandas: <Card icon={<PandasOriginalWordmark size={75} />} />,
  python: <Card icon={<PythonOriginalWordmark size={75} />} />,
  r: <Card icon={<ROriginal size={75} />} />,
  react: <Card icon={<ReactOriginal size={75} />} />,
};

function App() {
  return (
    <div className="App">
      <Navbar />

      <SectionHeader id="#about" text="About Me" />
      <SectionText
        text="Hey there! I'm Alden Cutler, currently a sophomore at Worcester Polytechnic Institute. 
                        I'm majoring in Computer Science with a minor in data science, and I'm looking for internships during the summer of 2024.
                        I'm interested in full-stack web development, embedded programming, data science, and machine learning.                          "
      />
      <SectionText text="Outside of a professional setting, I'm a big soccer fan and I enjoy biking and hiking." />

      <SectionHeader id="languages" text="Languages / Skills" />
      <IconGrid icons={icons} />

      <SectionHeader id="projects" text="Projects" />
      <div className="section-text">
        <p>
          I was watching YouTube the other day and came across{" "}
          <a href="https://www.youtube.com/watch?v=w8yWXqWQYmU">this</a> video
          about creating a neural network from scratch without using libraries
          like Tensorflow or Pytorch which inspired me to create my own neural
          network from scratch.
        </p>
        <p>
          I used the MNIST dataset, which is a dataset of 60,000 images of
          handwritten digits, to train my neural network to recognize
          handwritten digits. My attempt only uses three layers, an input layer,
          one hidden layer, and an output layer.
        </p>
        <p>
          I used the ReLU function as my activation function and the gradient
          descent algorithm to optimize the weights and biases of my neural
          network. I was able to achieve an accuracy of 85.5% on the test set,
          which is pretty good considering my neural network only has one hidden
          layer. I plan on adding more layers to my neural network in the future
          to see if I can improve the accuracy. You can find the code for my
          neural network here:
        </p>
        <button className="download-button">
          <a href="./neural-network.ipynb" download="neural-network.ipynb">Download Neural Network Code (.ipynb)</a>
        </button>
      </div>

      <SectionHeader id="contact" text="Contact" />
      <SectionText text="Coming soon!" />

      <Footer />
    </div>
  );
}

export default App;
