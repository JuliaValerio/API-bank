import React from "react";
import { useFormik } from "formik";
import api from '../../services/api';
import './style.css'

const MyForm = () => {
  
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      
     users: {
        "name": "",
        "cpf": "",
        "email": "",
        "bankAccounts": [
          " "
        ]
      }
      
    },

    onSubmit: (response, error) => {
        api.post('/user', {
          users: {
            "name": "",
            "cpf": "",
            "email": "",
            "bankAccounts": [
              " "
            ]
          }
          
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  });

  const [name, metadataName] = getFieldProps("name", "text");
  const [email, metadataEmail] = getFieldProps("email", "text");
  const [cpf, metadatacpf] = getFieldProps("cpf", "text");
  console.log({ errors, touched });
  return (
    <div className="form-list">
      <form onSubmit={handleSubmit}>
      <span class="form-title">
        Faça um novo cadastro :)
        </span>
        <div>
          <label>Nome: </label>
          <input placeholder="Seu nome" {...name} />
          {metadataName.touch && metadataName.error && (
            <span>{metadataName.error}</span>
          )}
        </div>
        <div>
          <label>Email: </label>
          <input placeholder="Seu email" {...email} />
          {metadataEmail.touch && metadataEmail.error && (
            <span>{metadataEmail.error}</span>
          )}
        </div>
        <div>
          <label>CPF: </label>
          <input placeholder="Seu CPF" {...cpf} />
          {metadatacpf.touch && metadatacpf.error && (
            <span>{metadatacpf.error}</span>
          )}
        </div>
        <button type="submit">Enviar</button>
      </form>
      <pre>{JSON.stringify({ name, email, cpf }, 2, 2)}</pre>
    </div>
  );
};

export default MyForm;
