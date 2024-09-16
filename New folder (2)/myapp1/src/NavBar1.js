import React from 'react';
import { Link } from 'react-router-dom';

const NavBar1 = () => {
    return (
        <nav style={styles.navBar}>
            <ul style={styles.navList}>
                <div style={styles.navLinksContainer}>
                    <li style={styles.navItem}>
                        <Link to="/" style={styles.navLink}>Home</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/PatientManagementModule" style={styles.navLink}>Patient Portal</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/ClinicalModule" style={styles.navLink}>Record</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/Appointment" style={styles.navLink}>Appointments</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/Inventory" style={styles.navLink}>Inventory</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/BillingAndFinancialModule" style={styles.navLink}>Billing</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/FeedbackForm" style={styles.navLink}>Feedback</Link>
                    </li>
                </div>
                <div style={styles.contactContainer}>
                    <span style={styles.contactText}>
                        <img src="tele.png" style={styles.icon} alt="Phone Icon" />:
                        <span>&nbsp;&nbsp;9973349881&nbsp;&nbsp;</span>
                    </span>
                    <span style={styles.contactText}>
                        <img src="email2.png" style={styles.icon} alt="Email Icon" />:
                        <span>&nbsp;&nbsp;<a href="mailto:hospital@gmail.com" style={styles.navLink}>hospital@gmail.com</a></span>
                    </span>
                </div>
            </ul>
        </nav>
    );
};

const styles = {
    navBar: {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#0048b2',
        color: '#fff',
    },
    navList: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    navLinksContainer: {
        display: 'flex',
    },
    navItem: {
        marginRight: '20px', // Increase this value to add more space between links
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    contactContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    contactText: {
        color: '#fff',
        marginLeft: '15px',
    },
    icon: {
        width: '20px',
        height: '20px',
        marginRight: '5px',
    },
};

export default NavBar1;
