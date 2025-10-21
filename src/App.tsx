import perfil from './assets/Perfil.jpg';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <header className="text-center">
        <img src={perfil} alt="Foto de perfil" className="rounded-circle" width="150" />
        <h1>Gelen Dayanna López Morales</h1>
        <p>Documentadora técnica y coordinadora de tareas en DevSolutions UMG</p>
      </header>

      <section>
        <h2>Perfil Profesional</h2>
        <p>Meticulosa, colaborativa y orientada a resultados. Especialista en documentación técnica y liderazgo backend.</p>
      </section>

      <section>
        <h2>Formación Académica</h2>
        <ul>
          <li>Licenciatura en Informática – Universidad Mariano Gálvez</li>
          <li>Certificación en Documentación Técnica – DevSolutions</li>
        </ul>
      </section>

      <section>
        <h2>Experiencia Laboral</h2>
        <ul>
          <li>Coordinadora de minutas y tareas – DevSolutions UMG</li>
          <li>Documentadora técnica en sistemas de nómina y RRHH</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>React, TypeScript, Vite, GitHub Pages</li>
          <li>Bootstrap, Notion, Confluence, GitBook</li>
          <li>Resolución de errores en producción, limpieza de historial Git</li>
        </ul>
      </section>

      <section>
        <h2>Contacto</h2>
        <form>
          <input type="text" placeholder="Nombre" className="form-control mb-2" required />
          <input type="email" placeholder="Correo" className="form-control mb-2" required />
          <textarea placeholder="Mensaje" className="form-control mb-2"></textarea>
          <button type="submit" className="btn btn-success">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;