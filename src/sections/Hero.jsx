const Hero = () => {
  return (
    <section id="inicio" style={{ 
      padding: '80px 20px', 
      textAlign: 'center', 
      backgroundColor: '#1c0b2b',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', color: '#fff' }}>
        Hola Mundo, soy Cecilia
      </h1>

<img 
        src="/imagenceci.jpg"
        alt="Foto de Cecilia"
        style={{ 
          fontFamily: 'Arial, sans-serif',
          width: '200px', 
          height: '200px',
          borderRadius: '50%',
          marginTop: '20px',
          objectFit: 'cover',
          border: '1px solid rgba(186, 154, 214, 0.4)',
              boxShadow: '0 0 10px rgba(185, 103, 255, 0.1)'}}
      />
      
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', color: '#fff', maxWidth: '600px' }}>
        Estudiante de Análisis y Desarrollo de Aplicaciones en el ISFD 166. Me apasiona el desarrollo web con React 
        y la gestión de bases de datos SQL.
      </p>
      
      

    </section>
  );
};

export default Hero;