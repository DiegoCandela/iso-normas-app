// src/components/NormasSection.jsx
import { normasISO } from '../data/normas';
import '../index.css';

export default function NormasSection() {
  return (
    <section className="container">
      <h1 className="section-title">Familia de Normas ISO</h1>
      {normasISO.map((norma) => (
        <div key={norma.codigo} className="norma">
          <h2>{norma.codigo}</h2>
          <p>{norma.descripcion}</p>
        </div>
      ))}
    </section>
  );
}
