import "./Footer.css";

function Footer({ storeName, email }) {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {storeName}</p>
      <p>Contact: {email}</p>
    </footer>
  );
}

export default Footer;
