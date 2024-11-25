import React, { useState } from "react";
import { Input } from "./components/Input";
import { useForm } from "./hooks/useForm";
import axios from "axios";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { values, handleChange, resetValues } = useForm({
    Nume: "",
    Prenume: "",
    CNP: "",
    GrupaSanguina: "",
  });

  const { data, get } = useFetch("http://localhost:3000/evidenta");
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3000/evidenta", values);
    resetValues();
    get();
  };

  const startEdit = (record) => {
    setEditingId(record.id);
    setEditValues(record);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };

  const saveEdit = async () => {
    await axios.put(`http://localhost:3000/evidenta/${editingId}`, editValues);
    setEditingId(null);
    get();
  };

  const deleteRow = async (id) => {
    await axios.delete(`http://localhost:3000/evidenta/${id}`);
    get();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center px-6">
      <header className="text-center max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          Evidenta Donatorilor de <span className="text-red-500">Sange</span>
        </h1>
      </header>

      <section className="mt-16  text-gray-900 w-full max-w-6xl p-8 rounded-lg ">
        <form
          className="flex gap-4 justify-center items-center mb-6"
          onSubmit={handleSubmit}
        >
          <Input
            name="Nume"
            type="text"
            value={values.Nume}
            handleChange={handleChange}
          />
          <Input
            name="Prenume"
            type="text"
            value={values.Prenume}
            handleChange={handleChange}
          />
          <Input
            name="CNP"
            type="number"
            value={values.CNP}
            handleChange={handleChange}
          />
          <Input
            name="GrupaSanguina"
            type="select"
            value={values.GrupaSanguina}
            handleChange={handleChange}
            options={[
              { value: "A+", label: "A+" },
              { value: "A-", label: "A-" },
              { value: "B+", label: "B+" },
              { value: "B-", label: "B-" },
              { value: "AB+", label: "AB+" },
              { value: "AB-", label: "AB-" },
              { value: "0+", label: "0+" },
              { value: "0-", label: "0-" },
            ]}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Adauga
          </button>
        </form>

        <table className="bg-blue-900 border-collapse border border-gray-300 mx-auto">
          <thead>
            <tr>
              <th className="border px-12 py-2">Nume</th>
              <th className="border px-12 py-2">Prenume</th>
              <th className="border px-12 py-2">CNP</th>
              <th className="border px-12 py-2">GrupaSanguina</th>
              <th className="border px-12 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {editingId === row.id ? (
                  <>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="Nume"
                        value={editValues.Nume}
                        onChange={handleEditChange}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="Prenume"
                        value={editValues.Prenume}
                        onChange={handleEditChange}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        name="CNP"
                        value={editValues.CNP}
                        onChange={handleEditChange}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="GrupaSanguina"
                        value={editValues.GrupaSanguina}
                        onChange={handleEditChange}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={saveEdit}
                        className="text-green-500 mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-red-500"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border px-12 py-2 text-center">
                      {row.Nume}
                    </td>
                    <td className="border px-12 py-2 text-center">
                      {row.Prenume}
                    </td>
                    <td className="border px-12 py-2 text-center">{row.CNP}</td>
                    <td className="border px-12 py-2 text-center">
                      {row.GrupaSanguina}
                    </td>
                    <td className="border px-12 py-2 text-center">
                      <button
                        onClick={() => startEdit(row)}
                        className="text-blue-500 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRow(row.id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <footer className="mt-16 text-center text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Life Drops. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
