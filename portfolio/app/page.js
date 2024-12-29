
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import About from "./components/about";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <Dashboard />
      <About />
    </div>
  </main>
  );
}
