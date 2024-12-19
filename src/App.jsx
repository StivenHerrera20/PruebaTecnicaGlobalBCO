import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {
      idProd: 1,
      namProd: "Arroz",
      price: 5000,
      stock: 10,
    },
    {
      idProd: 2,
      namProd: "Panela",
      price: 4500,
      stock: 20,
    },
  ]);
  return (
    <>
      <Header />
      <main className="w-100 bg-secondary-subtle">
        <div className="row mx-0 d-flex justify-content-center mb-4">
          <div className="col-10">
            <div className="card">
              <Table products={products} setProducts={setProducts} />
            </div>
          </div>
        </div>
        <div className="row mx-0 d-flex justify-content-center mb-4">
          <div className="col-10">
            <div className="card">
              <h3 className="fw-bold">AGREGAR PRODUCTO</h3>
              <Form products={products} setProducts={setProducts} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
