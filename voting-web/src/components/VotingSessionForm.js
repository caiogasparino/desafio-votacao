import React, { useEffect, useState } from "react";
import axios from "axios";

function VotingSessionForm(props) {
  const [agendaId, setAgendaId] = useState("");
  const [durationInMinutes, setDurationInMinutes] = useState("");
  const [startTime, setStartTime] = useState("");

  useEffect(() => {
    if (props.agendaId) {
      setAgendaId(props.agendaId);
    }
  }, [props.agendaId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      agendaId,
      ...(durationInMinutes && {
        durationInMinutes: parseInt(durationInMinutes, 10),
      }),
      ...(startTime && { startTime }),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/voting-session/open",
        data
      );
      console.log(response.data);
      alert("Sessão de votação criada com sucesso!, ID: " + response.data._id);
      props.onSessionCreated(response.data._id);
    } catch (error) {
      console.error("Erro ao criar sessão de votação", error);
      alert("Erro ao criar sessão de votação");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="agendaId">ID da Pauta:</label>
        <input
          type="text"
          id="agendaId"
          value={agendaId}
          onChange={(e) => setAgendaId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="duration">Duração (minutos):</label>
        <input
          type="number"
          id="duration"
          value={durationInMinutes}
          onChange={(e) => setDurationInMinutes(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <div>
        <label htmlFor="startTime">Data de Início (YYYY-MM-DDThh:mm):</label>
        <input
          type="datetime-local"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <button type="submit">Criar Sessão</button>
    </form>
  );
}

export default VotingSessionForm;
