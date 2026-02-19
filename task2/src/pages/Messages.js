
import React, { useState } from "react";

const initialMessages = [
  { sender: "Ali Khan", text: "Hello, I need help with my project.", time: "2h ago" },
  { sender: "Fatima Noor", text: "Can you review my application?", time: "5h ago" },
  { sender: "Ahmed Raza", text: "Payment received, thank you!", time: "1d ago" },
];

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { sender: "You", text: input, time: "now" }
    ]);
    setInput("");
  }
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Messages</h2>
      <ul className="space-y-4">
        {messages.map((msg, idx) => (
          <li key={idx} className="bg-gray-100 rounded-lg p-4 flex flex-col">
            <span className="font-semibold text-black-400">{msg.sender}</span>
            <span className="text-gray-700 mt-1">{msg.text}</span>
            <span className="text-xs text-gray-400 mt-2">{msg.time}</span>
          </li>
        ))}
      </ul>
      <form className="mt-8 flex gap-2" onSubmit={handleSubmit}>
        <input
          className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition" type="submit">Send</button>
      </form>
    </div>
  );
}
