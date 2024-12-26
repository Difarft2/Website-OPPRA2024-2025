import { Helmet } from "react-helmet";
import '../css/timwebsite.css'
import Footer from "../components/globalComponents/footer";

const teamData = {
    leaders: [
      { name: "Arvind Nuruddin ", role: "Team Leader", instagram: "https://www.instagram.com/isme.udden/" },
      { name: "Arrafi Raihan", role: "General Leader", instagram: "https://www.instagram.com/arfraihan/" },
    ],
    officialDesigners: [
      { name: "Adnan Alvictor ", role: "UI/UX Designer", instagram: "https://www.instagram.com/adnvctor_/" },
    ],
    webDevelopers: [
      { name: "Dimas Fata ", role: "Frontend Developer", instagram: "https://instagram.com/chrisevans" },
      { name: "Revan Joharil ", role: "Frontend Developer", instagram: "https://www.instagram.com/vanmodeggmu/" },
    ],
    articleTeam: [
      { name: "Faiz Alif Yulistiawan", role: "Content Writer", instagram: "https://www.instagram.com/fay_368/" },
      { name: "Giannini Valentino", role: "Content Writer", instagram: "https://www.instagram.com/gianinni_v/" },
      { name: "Ricardo Valentino", role: "Content Writer", instagram: "https://www.instagram.com/_richardo_v/" },
    ],
  };

  const contactDev = {
    email: "dimasfata12345@gmail.com",
    phone: "+62 895-3221-45012",
    socials: [
      { platform: "GitHub", link: "https://github.com/Difarft2" },
      { platform: "Website", link: "https://difarft.com/" },
    ],
  };

function Timwebsite(){
    return(
    <div>
        <Helmet>
            <title>Tim Website | OPPRA 2024-2025</title>
        </Helmet>
        <div>
            <div className="team-page">
                <h1> Our Team</h1>

                {/* Leaders Section */}
                <div className="team-section">
                    <h2>Leaders</h2>
                    <div className="team-container">
                    {teamData.leaders.map((leader, index) => (
                        <div className="team-member" key={index}>
                        <a
                            href={leader.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-name-link"
                        >
                            <h3>{leader.name}</h3>
                        </a>
                        <p>{leader.role}</p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Official Designers Section */}
                <div className="team-section">
                    <h2>Official Designers</h2>
                    <div className="team-container">
                    {teamData.officialDesigners.map((designer, index) => (
                        <div className="team-member" key={index}>
                        <a
                            href={designer.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-name-link"
                        >
                            <h3>{designer.name}</h3>
                        </a>
                        <p>{designer.role}</p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Web Developers Section */}
                <div className="team-section">
                    <h2>Web Developers</h2>
                    <div className="team-container">
                    {teamData.webDevelopers.map((developer, index) => (
                        <div className="team-member" key={index}>
                        <a
                            href={developer.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-name-link"
                        >
                            <h3>{developer.name}</h3>
                        </a>
                        <p>{developer.role}</p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Article Team Section */}
                <div className="team-section">
                    <h2>Article Team</h2>
                    <div className="team-container">
                    {teamData.articleTeam.map((member, index) => (
                        <div className="team-member" key={index}>
                        <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-name-link"
                        >
                            <h3>{member.name}</h3>
                        </a>
                        <p>{member.role}</p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Contact Dev Section */}
                <div className="contact-dev">
                    <h2>Contact Developer Team</h2>
                    <p>Email: <a href={`mailto:${contactDev.email}`}>{contactDev.email}</a></p>
                    <p>Phone: <a href={`tel:${contactDev.phone}`}>{contactDev.phone}</a></p>
                    <ul>
                    {contactDev.socials.map((social, index) => (
                        <li key={index}>
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                            {social.platform}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
    );
}

export default Timwebsite;