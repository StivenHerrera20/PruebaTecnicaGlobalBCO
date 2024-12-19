import React, { useState, useEffect } from "react";
import HelperForm from "../Helpers/HelperForm";

const Table = ({ products, setProducts }) => {
  const { form, change } = HelperForm({});

  const [productEdit, setProductEdit] = useState({});

  const editProds = (idEdit) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.idProd === idEdit
          ? {
              ...product,
              namProd: form.namProd || product.namProd,
              price: form.price || product.price,
              stock: form.stock || product.stock,
            }
          : product
      )
    );
  };
  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <>
      <table className="table table-striped w-100">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.idProd}>
              <td scope="col">{product.idProd}</td>
              <td scope="col">{product.namProd}</td>
              <td scope="col">{product.price}</td>
              <td scope="col">{product.stock}</td>
              <td scope="col">
                <button
                  className="btn btn-success bi bi-pencil-square"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setProductEdit(product)}
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                Editar Producto {productEdit.namProd}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="mb-3">
                  <label for="inputNameProduct" class="form-label">
                    Nombre del Producto
                  </label>
                  <input
                    onChange={change}
                    type="text"
                    class="form-control"
                    id="inputNameProduct"
                    name="namProd"
                    placeholder={productEdit.namProd}
                  />
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
                    name="price"
                    placeholder={productEdit.price}
                  />
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
                    name="stock"
                    placeholder={productEdit.stock}
                  />
                </div>

                <div className="d-flex justify-content-center gap-4">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => editProds(productEdit.idProd)}
                    data-bs-dismiss="modal"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
