import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';

function App() {
  return (
    <div>
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer style={{ 
        backgroundColor: '#111111',
        padding: '40px 20px', 
        textAlign: 'center', 
        color: '#888888',
        borderTop: '2px solid rgba(185, 103, 255, 0.3)',
        boxShadow: '0px -10px 25px rgba(185, 103, 255, 0.05)'
      }}>
        
        <p style={{ fontFamily: 'Arial, sans-serif', margin: '0 0 20px 0', fontSize: '1.1rem', color: '#fff', letterSpacing: '1px' }}>
          VISITÁ MIS REDES SOCIALES
        </p>

        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          
          <a 
            href="https://www.linkedin.com/in/cecilia-a-rodr%C3%ADguez-36b113205/" 
            target="_blank" 
            style={{ 
              color: '#00d4ff',
              textDecoration: 'none',
              fontFamily: 'Arial, sans-serif', 
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '8px 16px',
              border: '1px solid rgba(0, 212, 255, 0.4)',
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 212, 255, 0.03)',
              boxShadow: '0 0 10px rgba(0, 212, 255, 0.1)'
            }}
          >
            LinkedIn 🔗
          </a>

          <a 
            href="https://github.com/ceciliarodr" 
            target="_blank" 
            style={{ 
              color: '#b967ff',
              textDecoration: 'none', 
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '8px 16px',
              border: '1px solid rgba(185, 103, 255, 0.4)',
              borderRadius: '8px',
              backgroundColor: 'rgba(185, 103, 255, 0.03)',
              boxShadow: '0 0 10px rgba(185, 103, 255, 0.1)'
            }}
          >
            GitHub 💻
          </a>

        </div>

        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.85rem', color: '#555', margin: 0 }}>
          &copy; 2026 Cecilia. Todos los derechos reservados.
        </p>

      </footer>

    </div>
  );
}

export default App;