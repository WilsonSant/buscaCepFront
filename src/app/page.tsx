"use client";
import MainPage from "./components/Login/MainPage";
import { PrimeReactProvider } from "primereact/api";

export default function Home() {
  return (
    <PrimeReactProvider>
      <MainPage />
    </PrimeReactProvider>
  );
}
