import { API } from "./components/API/API";
import { BookDemo } from "./components/BookDemo/BookDemo";
import { Header } from "./components/Header/Header";
import { SOC } from "./components/SOC/SOC";
import { USP } from "./components/USP/USP";

export function Home() {
  return (
    <>
      <Header />
      <USP />
      <SOC />
      <API />
      <BookDemo />
    </>
  );
}
