import About from "@/components/About";
import Contact from "@/components/Contact";
import Dots from "@/components/Dots";
import Education from "@/components/Education";
import Email from "@/components/Email";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Splash from "@/components/Splash";
import Technical from "@/components/Technical";
import styles from "./Home.module.css";

const App = ({ initialTheme }: { initialTheme: string }) => {

    return (
        <>
            <Socials/>
            <Email/>
            <div className={styles.grid}>
                <Header initialTheme={initialTheme}/>
                <Dots>
                    <Hero/>
                </Dots>
                <About/>
                <Experiences/>
                <Projects/>
                <Technical/>
                <Education/>
                <Contact/>
                <Footer/>
            </div>
            <Splash/>
        </>
    );
};

export default App;
