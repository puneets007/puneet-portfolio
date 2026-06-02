import "./Home.css";
import Contact from "../common/Contact";
import puneetPhoto from '../../assets/Puneet.jpg';
import certificatePhoto from '../../assets/401367-0-16504900-1746162168-certificate_gold_seal_certification_by_dny59_gettyimages-942721178_2400x1600-100788472-orig.webp';
import graduationPhoto from '../../assets/graduation-cap-on-top-of-books.jpg';
import mernPhoto from '../../assets/MERN_Stack_9437df2ba9_62af1dd3fc.png';
import puneetResume from '../../assets/Puneet_Singhal_Resume.pdf';
export default function Home() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProject = () => {
    document
      .getElementById("Projects")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />
      {/* <link rel="stylesheet" href="Home.css" /> */}

      <section className="home" id="Home">
        <div className="content">
          <h2>
            Hi, I'm <span>Puneet </span>Singhal
          </h2>
          <h4>Full-Stack Web Developer</h4>
          <p className="font-normal">
            Self-motivated and hardworking individual , seeking for an
            opportunity to work in a challenging environment to prove my skills
            and utilize my knowledge &amp; intelligence in software development
            for the growth of the organization.{" "}
          </p>
          <div className="btn-group">
          <a href="#">
  <button onClick={scrollToContact}>Let's Connect</button>
</a>
            <button onClick={scrollToProject}>Projects</button>
            <a href={puneetResume}>Resume</a>
          </div>
        </div>

        <div className="profile-image">
          <img src={puneetPhoto} />
        </div>
      </section>
      <section className="about" id="About">
        <div className="content">
          <h2>About</h2>
          <p className="font-normal">
            I am a passionate and dedicated web development student with
            knowledge of <span>HTML</span>,<span> CSS</span>,
            <span> JavaScript</span>, and<span> React.js</span>. I enjoy
            building responsive and user-friendly websites while continuously
            improving my frontend development skills.
          </p>
          <p className="font-normal">
            Currently, I am learning backend technologies like
            <span> Node.js</span>,<span>Express.js</span>, and
            <span> MongoDB</span> to become a<span> full-stack developer</span>.
            I love
            <span>exploring</span> new <span>technologies</span> and creating
            projects that help me gain practical experience and improve my
            <span> problem-solving</span> abilities.
          </p>
          <p className="font-normal">
            Apart from technical skills, I believe in<span> teamwork</span>,
            <span> leadership</span>, and
            <span> continuous learning</span>. My<span> goal</span> is to
            <span> build</span> modern and impactful
            <span> web applications</span> while growing as a professional
            developer in the IT industry.
          </p>
        </div>
        <div className="mernImage">
          <img src={mernPhoto} />
        </div>
      </section>

      <section className="education" id="Education">
        <div className="content">
          <h2>Education</h2>
          <div className="master">
            <h4>
              <span>Master</span> of Computer Applications
            </h4>
            <p>Chandigarh University</p>
          </div>
          <div className="bachelor">
            <h4>
              Bachelor of <span>Computer Applications</span>
            </h4>
            <p>Surajmal University</p>
          </div>
        </div>
        <div className="graduation-image">
          <img src={graduationPhoto} />
        </div>
      </section>
      <section className="certification" id="Certify">
        <div className="content">
          <h2>Certifications</h2>
          <div className="certificate1">
            <h4>
              <span>ReactJs</span> Course
            </h4>
            <p>- from Udemy</p>
          </div>
          <div className="certificate2">
            <h4>
              Web Development with<span> HTML</span>,<span> CSS</span> and
              <span> JavaScript</span>
            </h4>
            <p>- from Data Flair</p>
          </div>
        </div>
        <div className="certificate-image">
          <img
            src={certificatePhoto} />
        </div>
      </section>
      <section className="project" id="Projects">
        <div className="content">
        <h2>Projects</h2>
        <div className="project1">
            <h4>
              <span>Gym Management System</span>
            </h4>
            <p><span>Description : </span>Developed a web-based application designed to streamline and automate the daily operations of a 
            gym like gym member registrations, batch scheduling, fee payments, and stakeholder communication.</p>
            <p><span>Technologies Used : </span>HTML, CSS, JavaScript, Bootstrap, PHP, MySQL .</p>
            <a href="https://github.com/puneets007/Gym_Management_Project" target='_blank'>
        <i className="fa-brands fa-github" />
      </a>
          </div>

          <div className="project1">
            <h4>
              <span>YouTube Clone</span>
            </h4>
            <p><span>Description : </span>Developed a video streaming platform similar to YouTube, allowing users to view, and interact 
            with video content. Implemented features like playback, comments, and likes. </p>
            <p><span>Technologies Used : </span>HTML, CSS and JavaScript .</p>
            <a href="https://github.com/puneets007/YouTube" target='_blank'>
        <i className="fa-brands fa-github" />
      </a>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="content">
          <h2>Contact</h2>
        <Contact />
        </div>
      
      </section>
    </>
  );
}
