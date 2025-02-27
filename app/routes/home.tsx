import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import ThemeToggle from "~/components/ThemeToggle";
const Home: React.FC = () => {
  return (
    <div className="body-bg min-h-screen dark:bg-body-bg-dark bg-body-bg-light">
      <header className="main-header p-4 flex justify-between items-center">
        <div><h1 className="text-4xl font-bold dark:text-main-header-dark text-main-header-light">User Persona</h1>
        <span className="block w-16 h-1 bg-blue-500 mt-1"></span>
        </div>
        
        <ThemeToggle />
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="xl:row-span-2">
            <Card
              img="https://s3-alpha-sig.figma.com/img/6b09/3f68/6f5d207c371123279dd071e3836363a5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GYOvE8PNm7J8uyluzOHTY7w4mBmJgjB6pzeu0Hv-hCvw492~y7rY0bNtmF1i~dXjgKHPDVru~-kxcjQTzT~bfh9aaqYis~wgNIgs80n96hvkUXsPZ7nX9CT8ReqsZfk2o0h7K3hT-8yFgYbSz0TqdqCQ9r038IS4COGretgq48mlJb2DhUaFBkW6JxgSDM7s5CM7i5-1t~tDO2toRWlU-VstyhJ9MzbCPMIL5M93-0oJpSgUXZ~5-ETrjE58p4b~faq4rwrPsvA~KkEN04KK4ftfJpKVb0C1qhUc3OZ1H7kSyzU0xg9MmCl0Ho9YY1LO~o9EYfyye5iobz5TxLY9oA__"
              name="Jane Doe"
              age="35"
              job="Family Physician"
              hobbies="Hiking and dancing"
            />
          </div>

          <Card sections={[{ title: "Bio", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim, vel condimentum risus eget rhoncus, vitae. Viverra pulvinar cras eu ac sed nunc dui. Risus pharetra, lacus interdum quam. Egestas aliquam dui at proin. Amet, pharetra, scelerisque molestie nibh porttitor sem malesuada cursus eget. Orci." }]} />
          <Card sections={[{ title: "Personality", content: ["Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue"] }]} />
          <Card sections={[{ title: "Pain Points", content:  ["Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue"] }]} />
          <Card sections={[{ title: "Goals", content: ["Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue"] }]} />
        </div>
      </main>
    </div>
  );
};

export default Home;

