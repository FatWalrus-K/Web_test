const { useState } = React;
const { BrowserRouter, Route, Link, Routes } = ReactRouterDOM;

// Navigation Component
const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#003366',
      padding: '1rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000
    }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/" style={navLinkStyle}>Home</Link></li>
        <li><Link to="/fleet" style={navLinkStyle}>Our Fleet</Link></li>
        <li><Link to="/team" style={navLinkStyle}>Our Team</Link></li>
        <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
};

// Home Page
const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '80px',
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1566887129670-66d5aae4c34b?ixlib=rb-4.0.3")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Maritime Solutions</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        Your trusted partner in shipbuilding, repair, and maritime services
      </p>
      <div style={{ marginTop: '3rem' }}>
        <button style={buttonStyle}>Our Services</button>
        <button style={buttonStyle}>Contact Us</button>
      </div>
    </div>
  );
};

// Fleet Page
const Fleet = () => {
  const [selectedShip, setSelectedShip] = useState(null);
  
  const ships = [
    {
      id: 1,
      name: "Ocean Explorer",
      image: "https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png",
      description: "Luxury cruise vessel with state-of-the-art navigation systems"
    },
    {
      id: 2,
      name: "Cargo Master",
      image: "https://www.marineinsight.com/wp-content/uploads/2019/08/Cargo-ships.png",
      description: "High-capacity cargo ship for international shipping"
    },
    // Add more ships as needed
  ];

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '80px',
      background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1514214246283-d427a95c5d2f")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      padding: '2rem',
      justifyContent: 'center'
    }}>
      {ships.map(ship => (
        <div
          key={ship.id}
          style={{
            position: 'relative',
            width: '300px',
            height: '200px',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setSelectedShip(ship)}
          onMouseLeave={() => setSelectedShip(null)}
        >
          <img
            src={ship.image}
            alt={ship.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
          {selectedShip?.id === ship.id && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.8)',
              color: 'white',
              padding: '1rem',
              borderRadius: '0 0 10px 10px'
            }}>
              <h3>{ship.name}</h3>
              <p>{ship.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Team Page
const Team = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    // Add more team members
  ];

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '80px',
      padding: '2rem',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Team</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center'
      }}>
        {team.map((member, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'center',
            width: '250px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                marginBottom: '1rem'
              }}
            />
            <h3>{member.name}</h3>
            <p style={{ color: '#666' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Page
const Contact = () => {
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '80px',
      padding: '2rem',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Name:</label>
            <input type="text" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Email:</label>
            <input type="email" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Message:</label>
            <textarea style={{ ...inputStyle, height: '150px' }}></textarea>
          </div>
          <button style={{
            ...buttonStyle,
            width: '100%',
            marginTop: '1rem'
          }}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

// Styles
const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem'
};

const buttonStyle = {
  padding: '0.8rem 1.5rem',
  margin: '0.5rem',
  fontSize: '1.1rem',
  backgroundColor: '#003366',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  color: '#333'
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '1rem'
};

// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root')); 