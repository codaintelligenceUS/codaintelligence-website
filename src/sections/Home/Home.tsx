import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { API } from "./components/API/API";
import { BookDemo } from "./components/BookDemo/BookDemo";
import { SOC } from "./components/SOC/SOC";
import { USP } from "./components/USP/USP";

export function Home() {
  return (
    <>
      <Header type="homepage" />
      <USP />
      <SOC />
      <API />
      <BookDemo />
      <Footer />
    </>
  );
}
