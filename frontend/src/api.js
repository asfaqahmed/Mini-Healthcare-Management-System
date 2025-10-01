const API_URL = "http://localhost:8000";

export const getNotes = async () => {
  const res = await fetch(`${API_URL}/notes`);
  return res.json();
};

export const addNote = async (note) => {
  await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
};

export const deleteNote = async (id) => {
  await fetch(`${API_URL}/notes/${id}`, { method: "DELETE" });
};
