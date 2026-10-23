import "./Home.css";
import Contact from "../common/Contact";
import puneetPhoto from "../../assets/Puneet.jpg";
import certificatePhoto from "../../assets/401367-0-16504900-1746162168-certificate_gold_seal_certification_by_dny59_gettyimages-942721178_2400x1600-100788472-orig.webp";
import graduationPhoto from "../../assets/graduation-cap-on-top-of-books.jpg";
import mernPhoto from "../../assets/MERN_Stack_9437df2ba9_62af1dd3fc.png";
import puneetResume from "../../assets/PUNEET_Resume.pdf";
export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProject = () => {
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
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
            I am a passionate and dedicated <span>web developer</span> with
            knowledge of <span>HTML</span>,<span> CSS</span>,
            <span> JavaScript</span>,<span> React.js</span>,
            <span> Node.js</span>,<span> Express.js</span>, and
            <span> MongoDB</span>. I enjoy building <span>responsive</span>,{" "}
            <span>user-friendly</span>, and{" "}
            <span>dynamic web applications</span> while continuously improving
            my development skills.
          </p>
          <p className="font-normal">
            I have completed a <span>3-month internship</span> as a{" "}
            <span>Software Developer Intern</span> at SmartED Innovations, where
            I gained practical experience in <span>MERN stack development</span>
            . During my internship, I <span>developed</span> and{" "}
            <span>maintained front-end</span> and{" "}
            <span>back-end components</span> for real-world projects,{" "}
            <span>integrated RESTful APIs</span>,{" "}
            <span>optimized database operations</span>, and{" "}
            <span>created responsive UI/UX designs</span>. I also collaborated
            with team members in an Agile environment and used <span>Git</span>{" "}
            for <span>version control</span> and <span>task management</span>.
            This experience strengthened my technical skills, problem-solving
            abilities, teamwork, and project management skills.
          </p>
          <p className="font-normal">
            Currently, I am{" "}
            <span>practicing Data Structures and Algorithms (DSA) in Java</span>{" "}
            to strengthen my logical thinking and problem-solving abilities. I
            believe in continuous learning, teamwork, and leadership. My goal is
            to <span>build modern</span>, <span>scalable</span>, and{" "}
            <span>impactful web applications</span> while growing as a software
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
          <img src={certificatePhoto} />
        </div>
      </section>
      <section className="project" id="Projects">
        <div className="content">
          <h2>Projects</h2>

          <div className="project1">
            <h4>
              <span>QUICKCART E-COMMERCE APPLICATION</span>
            </h4>
            <p>
              <span>Description : </span>Developed RESTful APIs using Node.js
              and Express.js to handle product data, user accounts, and order
              processing. Implemented secure JWT-based authentication and
              role-based authorization to manage user access. Designed an
              interactive and responsive user interface using React.js and
              Tailwind CSS, incorporating shopping cart and order management
              functionality for a smooth user experience.
            </p>
            <p>
              <span>Technologies Used : </span>HTML, CSS, JavaScript, React.js,
              Node.js, Express.js and MongoDB .
            </p>
            <a
              href="https://github.com/puneets007/QuickCart_MERN"
              target="_blank"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>

          <div className="project1">
            <h4>
              <span>Translator Application</span>
            </h4>
            <p>
              <span>Description : </span>Integrated a translation API to enable
              real-time text translation between multiple languages. Developed
              an interactive, responsive, and user-friendly interface using
              React.js, HTML, CSS, and JavaScript, with language selection and
              input-handling features to ensure a smooth translation experience.
            </p>
            <p>
              <span>Technologies Used : </span>HTML, CSS, JavaScript and
              React.js .
            </p>
            <a
              href="https://github.com/puneets007/REACT_translator-application"
              target="_blank"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>

          <div className="project1">
            <h4>
              <span>YouTube Clone</span>
            </h4>
            <p>
              <span>Description : </span>Developed a video streaming platform
              similar to YouTube, allowing users to view, and interact with
              video content. Implemented features like playback, comments, and
              likes.{" "}
            </p>
            <p>
              <span>Technologies Used : </span>HTML, CSS and JavaScript .
            </p>
            <a href="https://github.com/puneets007/YouTube" target="_blank">
              <i className="fa-brands fa-github" />
            </a>
          </div>

          <div className="project1">
            <h4>
              <span>Gym Management System</span>
            </h4>
            <p>
              <span>Description : </span>Developed a web-based application
              designed to streamline and automate the daily operations of a gym
              like gym member registrations, batch scheduling, fee payments, and
              stakeholder communication.
            </p>
            <p>
              <span>Technologies Used : </span>HTML, CSS, JavaScript, Bootstrap,
              PHP, MySQL .
            </p>
            <a
              href="https://github.com/puneets007/Gym_Management_Project"
              target="_blank"
            >
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
