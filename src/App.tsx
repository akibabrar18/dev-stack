import { Suspense, useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Technology from "./Components/Technology";
import type TechnologieType from "./Types/TechnologieType";

const fetchTechnologies = async (): Promise<TechnologieType[]> => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
};
function App() {
  const [technologiesPromise] = useState<Promise<TechnologieType[]>>(() => fetchTechnologies());
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Technology technologiesPromise={technologiesPromise}></Technology>
      </Suspense>
    </>
  );
}

export default App;
