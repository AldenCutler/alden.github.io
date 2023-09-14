
import "./App.css";
import { Navbar } from "./Navbar";
import { SectionHeader, SectionText } from "./Section";
import { Footer } from "./Footer";
import { IconGrid } from "./IconGrid";
import { AboutSection } from "./About";
import { ProjectsSection } from "./Projects";
import { IntroSection } from "./Intro";
import { LanguagesSection } from "./Skills";



function App() {
  return (
    <div className="container">
      <div className="App">
        <Navbar />
      
        <IntroSection />

        <AboutSection />

        <LanguagesSection/>

        <ProjectsSection />

        <SectionHeader id="contact" text="Contact" />
        <SectionText text="Coming soon!" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
