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

import { Card } from "./Card";
import { IconGrid } from "./IconGrid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SectionHeader } from "./Section";

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

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0, scale: 1, y: 100},
};

export function LanguagesSection() {
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
    <div className="languages">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}
      >
        <SectionHeader id="languages" text="Languages / Skills" />
      </motion.div>
      <IconGrid icons={icons}/>
    </div>
  );
}
