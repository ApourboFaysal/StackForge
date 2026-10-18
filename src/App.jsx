import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navber from "./components/Navber";
import HeroSection from "./components/HeroSection";
import TechCatalog from "./components/TechCatalog";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const dataPromise = fetch("/data.json").then((res) => res.json());

function App() {
  return (
    <>
      <Toaster position="top-center" />

      <Suspense fallback={<Loading />}>
        <Navber />
        <HeroSection />
        <TechCatalog dataPromise={dataPromise} />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
