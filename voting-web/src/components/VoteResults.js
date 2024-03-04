import React, { useState } from "react";
import axios from "axios";

function VoteResults() {
  const [agendaId, setAgendaId] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchResults = async () => {
    if (!agendaId) {
      alert("Por favor, insira um ID de pauta válido.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:3000/votes/result/${agendaId}`
      );
      setResults(response.data);
    } catch (err) {
      console.error("Erro ao buscar resultados dos votos:", err);
      setError("Erro ao buscar resultados");
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Buscar Resultados da Votação</h3>
      <input
        type="text"
        value={agendaId}
        onChange={(e) => setAgendaId(e.target.value)}
        placeholder="ID da Pauta"
      />
      <button onClick={fetchResults} disabled={loading}>
        Buscar Resultados
      </button>
      {loading && <div>Carregando resultados...</div>}
      {error && <div>{error}</div>}
      {results && (
        <ul>
          <li>Votos Sim: {results.yes}</li>
          <li>Votos Não: {results.no}</li>
        </ul>
      )}
    </div>
  );
}

export default VoteResults;
