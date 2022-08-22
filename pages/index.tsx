import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("./components/Clock"), { ssr: false });

const Home: NextPage = () => {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <Clock />
    </main>
  );
};

export default Home;
