"use client";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Box } from "@chakra-ui/react";

function Table(props) {
  const { tableData } = props;
  const className = { border: "1px solid", textAlign: "center" };
  return (
    <DataTable
      value={tableData}
      style={{ background: "white", padding: "4", alignItems: "center" }}
    >
      <Column field="cep" header="CEP" style={className}></Column>
      <Column field="logradouro" header="Logradouro" style={className}></Column>
      <Column
        field="complemento"
        header="Complemento"
        style={className}
      ></Column>
      <Column
        field="bairro"
        header="Bairro"
        sortable
        style={className}
      ></Column>
      <Column
        field="localidade"
        header="Cidade"
        sortable
        style={className}
      ></Column>
      <Column field="uf" header="Estado" sortable style={className}></Column>
      <Column field="ddd" header="DDD" style={className}></Column>
    </DataTable>
  );
}

export default Table;
