import logo from "../assets/img/linkedinLogoText1.png";
import "../assets/style/sidebarFooter.css";
const SidebarFooter = () => {
  return (
    <div className="sidebarFooter d-flex flex-column aling-items-center">
      <ul className="d-flex flex-wrap list-unstyled justify-content-center p-4 pb-0">
        <li>
          <a href="#">Informazioni</a>
        </li>
        <li>
          <a href="#">Accessibilita'</a>
        </li>
        <li>
          <a href="#">Centro Assistenza</a>
        </li>
        <li>
          <a href="#">Privacy e condizioni</a>
        </li>
        <li className="text-center">
          <a href="#">Opzioni per gli annunci pubblicitari</a>
        </li>
        <li>
          <a href="#">Pubblicita'</a>
        </li>
        <li>
          <a href="#">Servizi alle aziende</a>
        </li>
        <li>
          <a href="#">Scarica l'app LinkedIn</a>
        </li>
        <li>
          <a href="#">Altro</a>
        </li>
      </ul>
      <div>
        <p className="text-center">
          <img src={logo} height="20" alt="linkedin" />
          <span> Linkedin Corporation ©2024</span>
        </p>
      </div>
    </div>
  );
};
export default SidebarFooter;
