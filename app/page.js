import Footer from "@/app/components/Footer";
import Home from "@/app/components/Home";
import Contact from "@/app/components/Contact";
import About from "@/app/components/About";
import Skill from "@/app/components/Skill";
import Project from "@/app/components/Project";
import Header from "@/app/components/Header";
import {dbAndAIList, frameworkList, skillList} from "@/data/skills";

export default function Page() {
    return (
        <div
            className="bg-white dark:bg-gray-900 text-black dark:text-white   min-h-screen transition-colors duration-300">
            <Header/>
            <main className="container max-w-4xl mx-auto px-6 py-12">
                <Home/>
                <About/>
                <Skill skillList={skillList} title={'Skill'}/>
                <Skill skillList={frameworkList} title={'Framework'}/>
                <Skill skillList={dbAndAIList} title={'DataBase & AI'}/>
                <Project/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}
