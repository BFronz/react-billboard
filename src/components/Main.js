import React, { Component } from "react";
// import "../styles/Main.css";

const styles = {
    // move the contents of respective .css file to this styles object
    // then remove the classNames, and reference the style object inside the component

    main: {
        background: "#fff",
        padding: 20
      }


}



// alter this component so that it displays a user if one is passed as props, 
// but if no user is present, then it should display something 
//like "No user profile found."
class Main extends Component {
    render() {


        if(this.props.user.lenght){
            return (
            <section style={styles.main}>
                <h2> User Profile </h2>
                <p>Name: {this.props.user.name} </p>
                <p>Age: {this.props.user.age}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Address: {this.props.user.address}</p>
                <p>Phone: {this.props.user.phone}</p>
            </section>
            );

        } else {
                return (
                <section style={styles.main}>
                    <h2> User Profile </h2>
                    <p>Name: {this.props.user.name} </p>
                    <p>Age: {this.props.user.age}</p>
                    <p>Email: {this.props.user.email}</p>
                    <p>Address: {this.props.user.address}</p>
                    <p>Phone: {this.props.user.phone}</p>
                </section>
                 );
        }

    }
}

export default Main;

// {user.length ? (

//     <h2> User Profile </h2>
//     <p>Name: {this.props.user.name} </p>
//     <p>Age: {this.props.user.age}</p>
//     <p>Email: {this.props.user.email}</p>
//     <p>Address: {this.props.user.address}</p>
//     <p>Phone: {this.props.user.phone}</p>

//     ) : (   

//         <h2> No user profile found. </h2>

//     )}    