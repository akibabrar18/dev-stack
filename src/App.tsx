import { Suspense, useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Technology from "./Components/Technologies";
import type TechnologieType from "./Types/TechnologieType";
import Footer from "./Components/Footer";

const fetchTechnologies = async (): Promise<TechnologieType[]> => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
};
function App() {
  const [technologiesPromise] = useState<Promise<TechnologieType[]>>(() =>
    fetchTechnologies(),
  );
  const [selectedStack, setSelectedStack] = useState<TechnologieType[]>([]);
  const handleAddToStack = (technology: TechnologieType) => {
    if (!selectedStack.find((item) => item.name === technology.name)) {
      setSelectedStack([...selectedStack, technology]);
    }
  };
  const handleRemoveFromStack = (technologyName: string) => {
    setSelectedStack(
      selectedStack.filter((item) => item.name !== technologyName),
    );
  };
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Technology
          technologiesPromise={technologiesPromise}
          selectedStack={selectedStack}
          onAdd={handleAddToStack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        ></Technology>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
