import React, { useState } from "react";
export default function App() {
  const [form, setForm] = useState({ name: "", device: "Smart TV" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Solicitação enviada! Nome: ${form.name}, Dispositivo: ${form.device}`);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto py-10 space-y-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Invictos IPTV</h1>
          <p className="text-gray-400">A melhor experiência em IPTV com teste grátis!</p>
        </header>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg">
          <label className="block">
            <span>Seu nome</span>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Digite seu nome" className="mt-1 p-2 rounded w-full bg-gray-900 text-white" />
          </label>
          <div>
            <span className="block mb-2">Qual seu dispositivo?</span>
            {["Smart TV", "Celular", "TV Box", "Computador"].map((device) => (
              <label key={device} className="block">
                <input
                  type="radio"
                  name="device"
                  value={device}
                  checked={form.device === device}
                  onChange={handleChange}
                  className="mr-2"
                />
                {device}
              </label>
            ))}
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full">
            Solicitar Teste
          </button>
        </form>
        <div>
          <h2 className="text-2xl font-bold text-center my-6">Planos e Valores</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { titulo: "Mensal", preco: "R$ 29,90" },
              { titulo: "Trimestral", preco: "R$ 79,90" },
              { titulo: "Anual", preco: "R$ 249,90" }
            ].map((plano, index) => (
              <div key={index} className="bg-gray-800 text-center p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{plano.titulo}</h3>
                <p className="text-green-400 text-2xl font-bold">{plano.preco}</p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded">Assinar</button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Fale Conosco</h2>
          <p>Atendimento rápido via WhatsApp</p>
          <a href="https://wa.me/5541997405670" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            WhatsApp
          </a>
        </div>
        <footer className="text-center text-gray-400 text-sm mt-10">
          © {new Date().getFullYear()} Invictos IPTV - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
