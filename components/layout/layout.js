import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Header from "./header";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header/>
          <main className="l-main">
            {this.props.children}
          </main>
        <Footer/>
      </>
    );
  }
}

export default Layout;