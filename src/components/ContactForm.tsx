export default function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Nombre" className="form-control mb-2" required />
      <input type="email" placeholder="Correo" className="form-control mb-2" required />
      <textarea placeholder="Mensaje" className="form-control mb-2"></textarea>
      <button type="submit" className="btn btn-success">Enviar</button>
    </form>
  );
}