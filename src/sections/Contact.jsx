import { useState } from "react";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault(); 
    alert(`¡Mensaje recibido, ${nombre}! A la brevedad me pondré en contacto al correo: ${email}.`);
    
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <section id="contacto" style={{ 
      padding: '80px 20px', 
      backgroundColor: '#1c0b2b',
      textAlign: 'center'
    }}>
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', color: '#fff', marginBottom: '10px' }}>Contacto</h2>
      <p style={{ fontFamily: 'Arial, sans-serif', color: '#ccc', marginBottom: '30px' }}>Dejame tu mensaje y te respondo a la brevedad.</p>

      <form onSubmit={manejarEnvio} style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        maxWidth: '500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        textAlign: 'left'
      }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500', fontFamily: 'Arial, sans-serif' }}>Nombre:</label>
          <input 
            type="text" 
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500', fontFamily: 'Arial, sans-serif' }}>Correo Electrónico:</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500', fontFamily: 'Arial, sans-serif' }}>Mensaje:</label>
          <textarea 
            rows="4" 
            required
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)} // Guarda lo que se escribe en "mensaje"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', resize: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button type="submit" style={{
          backgroundColor: '#b967ff',
          color: '#fff',
          border: 'none',
          padding: '12px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          marginTop: '10px',
          transition: 'background-color 0.2s'
        }}>
          Enviar Mensaje
        </button>

      </form>
    </section>
  );
};

export default Contact;