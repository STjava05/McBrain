import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";

const Contact = () => {
    // Informazioni di contatto della tua azienda
    const companyData = {
        companyName: 'McBrain International',
        address: '25,Via Gora e Bartolone, Pistoia, 51100, IT',
        email: 'info@azienda.com',
        phone: '+39 351 085 3176',
        openHours: 'Mon-Fri 8:00-22:00',

        // Altre informazioni di contatto...
    };

    // Mostra la mappa
   

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <p>Feel free to reach out to us for any inquiries or support!</p>

            {/* Mostra i dati di contatto */}
            <div className="infos">
                <h3>{companyData.companyName}</h3>
                <p className="p-3">Address:< FaAddressBook/>  {companyData.address}</p>
                <p className="p-3">Email:< MdEmail/> {companyData.email}</p>
                <p className="p-3">Phone:< FaPhone/> {companyData.phone} </p>
                {/* Altre informazioni di contatto */}
            </div>

            {/* Mostra la mappa */}
            <div style={{ height: '400px', width: '100%' }} id="map"></div>
            <div>
           
            </div>

           
        </div>
    );
};

export default Contact;
