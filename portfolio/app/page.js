
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/project";
import Experience from "./components/experience";
import Leadership from "./components/leadership";
import Skills from "./components/skills";
import GetInTouch from "./components/getintouch";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#023D54]">
   
    <div className="container mt-24 mx-auto px-12 py-4">
    <Navbar />
      <Dashboard id="dashboard" />
      <About id="about" />
      <Projects id="projects" />
      <Experience id="experience"/>
      <Leadership id="leadership" />
      <Skills id="skills"/>
      <GetInTouch id="contact"/>
    </div>
    <Footer />
  </main>
  );
}
