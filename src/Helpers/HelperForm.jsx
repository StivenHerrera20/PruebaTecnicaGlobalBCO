import React, { Component } from "react";
import { useState } from "react";

const HelperForm = (data = {}) => {
  const [form, setForm] = useState(data);
  const change = ({ target }) => {
    // console.log({ target });
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
    // console.log(form);
  };

  return {
    form,
    change,
  };
};

export default HelperForm;
