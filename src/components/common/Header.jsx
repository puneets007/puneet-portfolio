import './Header.css'

export default function Header() {
  
  const scrollToHome = () => {
    document
      .getElementById("Home")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document
      .getElementById("About")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEducation = () => {
    document
      .getElementById("Education")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCertify = () => {
    document
      .getElementById("Certify")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div>
      <header>
    <h2 className="logo">
      <span>P</span>S
    </h2>
    <div className="navigation">
      <button onClick={scrollToHome}>Home</button>
      <button onClick={scrollToAbout}>About</button>
      <button onClick={scrollToEducation}>Education</button>
      <button onClick={scrollToCertify}>Certificates</button>
      <button onClick={scrollToContact}>Contact</button>
    </div>
  </header>
    </div>
  )
}
