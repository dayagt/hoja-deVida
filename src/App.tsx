import perfil from './assets/Perfil.jpg';
import './App.css';

function App() {
  return (
    <div className="container-fluid p-4" style={{ backgroundColor: '#046c4e', minHeight: '100vh' }}>
      <header className="text-center text-white mb-5">
        <img src={perfil} alt="Foto de perfil" className="rounded-circle shadow" width="150" />
        <h1>Gelen Dayanna López Morales</h1>
        <p>Documentadora técnica y coordinadora de tareas en DevSolutions UMG</p>
      </header>

      <section className="bg-light p-4 mb-4 rounded">
        <h2 className="text-success">Perfil Profesional</h2>
        <p>Meticulosa, colaborativa y orientada a resultados. Especialista en documentación técnica y liderazgo backend.</p>
      </section>

      <section className="bg-light p-4 mb-4 rounded">
        <h2 className="text-success">Formación Académica</h2>
        <ul>
          <li>Licenciatura en Informática – Universidad Mariano Gálvez</li>
          <li>Certificación en Documentación Técnica – DevSolutions</li>
        </ul>
      </section>

      <section className="bg-light p-4 mb-4 rounded">
        <h2 className="text-success">Experiencia Laboral</h2>
        <ul>
          <li>Coordinadora de minutas y tareas – DevSolutions UMG</li>
          <li>Documentadora técnica en sistemas de nómina y RRHH</li>
        </ul>
      </section>

      <section className="bg-light p-4 mb-4 rounded">
        <h2 className="text-success">Habilidades Técnicas</h2>
        <ul>
          <li>React, TypeScript, Vite, GitHub Pages</li>
          <li>Bootstrap, Notion, Confluence, GitBook</li>
          <li>Resolución de errores en producción, limpieza de historial Git</li>
        </ul>
      </section>

      <section className="bg-light p-4 mb-4 rounded">
        <h2 className="text-success">Contacto</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Formulario enviado correctamente');
        }}>
          <input type="text" placeholder="Nombre" className="form-control mb-2" required />
          <input type="email" placeholder="Correo" className="form-control mb-2" required />
          <textarea placeholder="Mensaje" className="form-control mb-2" required></textarea>
          <button type="submit" className="btn btn-success">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;