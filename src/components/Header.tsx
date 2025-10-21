import perfil from '../assets/Perfil.jpg';

export default function Header() {
  return (
    <header className="text-center mb-5">
      <img src={perfil} alt="Foto de perfil" className="rounded-circle shadow" width="150" />
      <h1 className="text-success">Gelen Dayanna López Morales</h1>
      <p className="lead">Documentadora técnica y coordinadora de tareas en DevSolutions UMG</p>
    </header>
  );
}