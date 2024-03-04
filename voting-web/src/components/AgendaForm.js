import React, { useState } from "react";
import axios from "axios";

function AgendaForm({ onAgendaCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/agenda", {
        title,
        description,
      });
      console.log(response.data);
      alert("Pauta criada com sucesso!, ID: " + response.data._id);
      onAgendaCreated(response.data._id);
    } catch (error) {
      console.error("Erro ao criar pauta", error);
      alert("Erro ao criar pauta");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título da Pauta"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
        required
      />
      <button type="submit">Criar Pauta</button>
    </form>
  );
}

export default AgendaForm;
