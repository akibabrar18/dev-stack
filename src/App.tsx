import { Suspense, useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Technology from "./Components/Technologies";
import type TechnologieType from "./Types/TechnologieType";
import Footer from "./Components/Footer";
import { toast } from "react-toastify";
import LoadingSpinner from "./Components/LoadingSpinner";

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
      toast.success(`${technology.name} added to your stack!`);
    }
  };
  const handleRemoveFromStack = (technologyName: string) => {
    toast.error(`${technologyName} removed from your stack!`);
    setSelectedStack(
      selectedStack.filter((item) => item.name !== technologyName),
    );
  };
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.success("All technologies removed from your stack!");
  };
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
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
