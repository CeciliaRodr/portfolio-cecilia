const Projects = () => {

    const misProyectos = [
    {
      id: 1,
      titulo: "E-commerce 'Joyas Rodriguez'",
      descripcion: "Desarrollo de tienda online utilizando WordPress y Elementor, aplicando estilos globales, tipografías y diseño adaptado a la marca."
    },
    {
      id: 2,
      titulo: "Base de Datos - Fábrica de Maniquíes",
      descripcion: "Diseño lógico de una base de datos relacional para control de inventario. Creación de esquemas y diagramas DBML en MySQL."
    }
  ];

  return (
    <section id="proyectos" style={{ 
      padding: '80px 20px', 
      backgroundColor: '#1c0b2b', 
      minHeight: '50vh' 
    }}>
      <h2 style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginBottom: '40px', color: '#fff', fontSize: '2rem' }}>
        Mis Proyectos
      </h2>

      {/* Contenedor de las tarjetas */}
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        justifyContent: 'center', 
        flexWrap: 'wrap'
      }}>
        
        {misProyectos.map((proyecto) => (
          <div key={proyecto.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '25px',
            width: '300px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s'
          }}>
            <h3 style={{ fontFamily: 'Arial, sans-serif', color: '#222', marginTop: 0, marginBottom: '10px' }}>
              {proyecto.titulo}
            </h3>
            <p style={{ fontFamily: 'Arial, sans-serif', color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>
              {proyecto.descripcion}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
