import React, { useState } from "react";
import AgendaForm from "./components/AgendaForm";
import VotingSessionForm from "./components/VotingSessionForm";
import VoteForm from "./components/VoteForm";
import VoteResults from "./components/VoteResults";

function App() {
  const [agendaId, setAgendaId] = useState("");
  const [memberId, setMemberId] = useState("");

  const handleAgendaCreated = (id) => {
    setAgendaId(id);
    console.log("Pauta criada com ID:", id);
  };
  const handleSessionCreated = (id) => {
    setMemberId(id);
    console.log("Sessão criada com ID:", id);
  };

  return (
    <div className="App">
      <h1>Criar Nova Pauta</h1>
      <AgendaForm onAgendaCreated={handleAgendaCreated} />
      <h1>Cadastrar Sessão de Votação</h1>
      <VotingSessionForm
        agendaId={agendaId}
        onSessionCreated={handleSessionCreated}
      />
      <h1>Cadastrar Voto</h1>
      <VoteForm agendaId={agendaId} memberId={memberId} />
      <h1>Resultados da Votação</h1>
      <VoteResults />
    </div>
  );
}

export default App;
