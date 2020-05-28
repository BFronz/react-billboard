import React, { Component } from "react";
// import "../styles/Footer.css";

const styles = {

    footer: {
        background: "#000",
        height: "60px"
    },
    footerText: {
    color: "#ffff",
    fontSize: "0.8rem",
    margin: 0,
    lineHeight: 3,
    textAlign: "center"
    }
   
}

// Refactor this to be a functional React component instead of a class-based component
class Footer extends Component {

    render() {
        return (
            <footer style={styles.footer}>
                <p style={styles.footerText}>&copy; RLF Inc. | 2020 </p>
            </footer>
        );
    }

}

export default Footer;