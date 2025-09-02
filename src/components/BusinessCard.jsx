function BusinessCard() {
  return (
    <div className="business-card">
      <img 
        src="https://avatars.githubusercontent.com/u/101490788?v=4"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="business-name">Amit Rawat</h2>
      <div className="social-links">
        <a href="https://github.com/amitsinghrawat777" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/amit-singh-rawat-bb056524a/" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/250px-LinkedIn_logo_initials.png" alt="LinkedIn Logo" />
        </a>
        <a href="https://www.instagram.com/a.myth_singh/" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s" alt="Instagram Logo" />
        </a>
        <a href="https://x.com/rawat_sing32712" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpevfm2P0BtgC9LbXH1n2Xp-oR-iLX8xQTBg&s" alt="X Logo" />
        </a>
      </div>
      <p className="business-description">
        A Full-Stack web developer specializing in building responsive web applications in React.
      </p>
    </div>
  );
}
export default BusinessCard;