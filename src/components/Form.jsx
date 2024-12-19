import React, { useState, useEffect } from "react";
import HelperForm from "../Helpers/HelperForm";
const Form = ({ products, setProducts }) => {
  const { form, change } = HelperForm({});
  const [stateNomProd, setStateNomProd] = useState("");
  const [statePriceProd, setStatePriceProd] = useState("");
  const [stateStockProd, setStateStockProd] = useState("");
  const [stateIdProd, setStateIdProd] = useState("");

  const addProd = () => {
    if (form.namProdInsert.substring().length >= 3) {
      setStateNomProd("");
    } else {
      setStateNomProd("El nombre debe tener al menos 3 caracteres");
    }
    if (parseFloat(form.priceInsert) > 0) {
      setStatePriceProd("");
    } else {
      setStatePriceProd("El precio debe ser un numero positivo");
    }
    if (
      parseFloat(form.stockInsert) > 0 &&
      Number.isInteger(parseFloat(form.stockInsert))
    ) {
      setStateStockProd("");
    } else {
      setStateStockProd("El stock debe ser un numero entero positivo");
    }
    if (form.idProdInsert != "") {
      if (
        parseFloat(form.idProdInsert) > 0 &&
        Number.isInteger(parseFloat(form.idProdInsert))
      ) {
        setStateIdProd("");
      } else {
        setStateIdProd(
          "Debes de ingresar un Identificador (Debe ser un numero)"
        );
      }
    } else {
      setStateIdProd("Debes de ingresar un Identificador");
    }
    if (
      stateNomProd == "" &&
      statePriceProd == "" &&
      stateStockProd == "" &&
      stateIdProd == ""
    ) {
      setProducts([
        ...products,
        {
          idProd: form.idProdInsert,
          namProd: form.namProdInsert,
          price: parseFloat(form.priceInsert),
          stock: parseFloat(form.stockInsert),
        },
      ]);
    } else {
      throw new Error(
        stateNomProd + statePriceProd + stateStockProd + stateIdProd
      );
    }
  };

  return (
    <>
      <form>
        <div class="mb-3">
          <label for="inputIdProduct" class="form-label">
            Identificador del producto
          </label>
          <input
            onChange={change}
            type="text"
            class="form-control"
            id="inputIdProduct"
            name="idProdInsert"
          />
          {stateIdProd == "" ? (
            <></>
          ) : (
            <div class="alert alert-danger mt-2" role="alert">
              {stateIdProd}
            </div>
          )}
        </div>
        <div class="mb-3">
          <label for="inputNameProduct" class="form-label">
            Nombre del Producto
          </label>
          <input
            onChange={change}
            type="text"
            class="form-control"
            id="inputNameProduct"
            name="namProdInsert"
          />
          {stateNomProd == "" ? (
            <></>
          ) : (
            <div class="alert alert-danger mt-2" role="alert">
              {stateNomProd}
            </div>
          )}
        </div>
        <div class="mb-3">
          <label for="inputPrice" class="form-label">
            Precio
          </label>
          <input
            onChange={change}
            type="text"
            class="form-control"
            id="inputPrice"
            name="priceInsert"
          />
          {statePriceProd == "" ? (
            <></>
          ) : (
            <div class="alert alert-danger mt-2" role="alert">
              {statePriceProd}
            </div>
          )}
        </div>

        <div class="mb-3">
          <label for="inputStock" class="form-label">
            Stock
          </label>
          <input
            onChange={change}
            type="text"
            class="form-control"
            id="inputStock"
            name="stockInsert"
          />
          {stateStockProd == "" ? (
            <></>
          ) : (
            <div class="alert alert-danger mt-2" role="alert">
              {stateStockProd}
            </div>
          )}
        </div>

        <div className="d-flex justify-content-center ">
          <button type="button" className="btn btn-success" onClick={addProd}>
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
