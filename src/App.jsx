import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navber from "./components/Navber";
import HeroSection from "./components/HeroSection";
import TechCatalog from "./components/TechCatalog";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const dataPromise = fetch("/data.json").then((res) => res.json());

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navber />
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <TechCatalog dataPromise={dataPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
