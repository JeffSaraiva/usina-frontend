import React, { useEffect, useState } from "react";
import "../App.css";

function GeradoresList() {
  const [usinas, setUsinas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/usinas/top5")
      .then((res) => res.json())
      .then((data) => setUsinas(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <div className="container">
      <h1>Top 5 Geradores de Energia</h1>
      <table className="usinas-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>UF</th>
            <th>Tipo</th>
            <th>Origem</th>
            <th>Potência (kW)</th>
            <th>Empresa de Conexão</th>
          </tr>
        </thead>
        <tbody>
          {usinas.map((usina, index) => (
            <tr key={index}>
              <td>{usina.nomeEmpreendimento}</td>
              <td>{usina.uf}</td>
              <td>{usina.tipoGeracao}</td>
              <td>{usina.origemCombustivel}</td>
              <td>{usina.potenciaOutorgadaKw}</td>
              <td>{usina.empresaConexao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeradoresList;
