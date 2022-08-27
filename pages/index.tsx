import type { NextPage } from "next";
import Clock from "./components/Clock";

const Home: NextPage = () => {
  return (
    <main className="w-full h-full flex justify-center items-center background">
      <Clock />
    </main>
  );
};

export default Home;
