import About from "@/components/About";
import Contact from "@/components/Contact";
import Dots from "@/components/Dots";
import Education from "@/components/Education";
import Email from "@/components/Email";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Technical from "@/components/Technical";
import styles from "./Home.module.css";

const App = () => {

    return (
        <>
            <Socials/>
            <Email/>
            <div className={styles.grid}>
                <Dots>
                    <Hero/>
                </Dots>
                <About/>
                <Experiences/>
                <Projects/>
                <Technical/>
                <Education/>
                <Contact/>
            </div>
        </>
    );
};

export default App;
