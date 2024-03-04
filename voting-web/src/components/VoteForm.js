import React, { useEffect, useState } from "react";
import axios from "axios";

function VoteForm(props) {
  const [agendaId, setAgendaId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [vote, setVote] = useState("");

  useEffect(() => {
    if (props.agendaId) {
      setAgendaId(props.agendaId);
    }
    if (props.memberId) {
      setMemberId(props.memberId);
    }
  }, [props.agendaId, props.memberId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/votes", {
        agendaId,
        memberId,
        vote: vote === "sim",
      });
      console.log(response.data);
      alert("Voto cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar voto", error);
      alert("Erro ao cadastrar voto");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={agendaId}
        onChange={(e) => setAgendaId(e.target.value)}
        placeholder="ID da Pauta"
        required
      />
      <input
        type="text"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        placeholder="ID do Membro"
        required
      />
      <select value={vote} onChange={(e) => setVote(e.target.value)} required>
        <option value="">Selecione seu voto</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>
      <button type="submit">Enviar Voto</button>
    </form>
  );
}

export default VoteForm;
