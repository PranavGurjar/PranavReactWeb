import udemyCert from '../assets/images/udemy_java.jpg';
import nptelCert from '../assets/images/Programming In Java.jpg';

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="container">
        <h2>Certificates</h2>
        <div className="certificate-list">
          <div className="certificate-item">
            <h3>FULL STACK JAVA DEVELOPER</h3>
            <p className="issuer-date">Udemy | 8 Dec 2024</p>
            <img src={udemyCert} alt="Udemy Full Stack Java Developer Certificate" />
          </div>
          <div className="certificate-item">
            <h3>Programming In Java</h3>
            <p className="issuer-date">NPTEL | Jan 2024 – April 2024</p>
            <img src={nptelCert} alt="NPTEL Programming in Java Certificate" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;