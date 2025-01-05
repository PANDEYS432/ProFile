"use client"
import { useEffect } from "react";
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
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(){
        if(!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...arguments) => {
            if(!window.chatbase.q) { window.chatbase.q = [] }
            window.chatbase.q.push(arguments);
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if(prop === "q") { return target.q }
              return (...args) => target(prop, ...args);
            }
          });
        }
        const onLoad = function() {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "SNfm0vzcnvTEoKcvHFWAl";
          script.domain = "www.chatbase.co";
          document.body.appendChild(script);
        };
        if(document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad);
        }
      })();
    `;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#023D54]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
        <Dashboard id="dashboard" />
        <About id="about" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Leadership id="leadership" />
        <Skills id="skills" />
        <GetInTouch id="contact" />
      </div>
      <Footer />
    </main>
  );
}
