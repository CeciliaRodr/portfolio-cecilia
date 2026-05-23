const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      background: '#b967ff',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>

      <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Bienvenidos
      </div>

      <ul style={{
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        gap: '20px',
        listStyle: 'none',
        margin: 0
      }}>
        <li><a href="#inicio" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="#proyectos" style={{ color: 'white', textDecoration: 'none' }}>Proyectos</a></li>
        <li><a href="#contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;