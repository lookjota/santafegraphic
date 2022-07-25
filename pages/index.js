import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import HomePage from "./homePage";
import Navbar from "../components/Navbar";
import Works from "./works";
import Clients from "./clients";
import Footer from "../components/Footer";
import FooterInfo from "../components/FooterInfo";
import Header from './Header.js'
import FullServices from "./fullServices";
import About from './about'
import Doing from './doing'
import AboutUs from './aboutUs'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Designfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar />
			<HomePage />
      <FullServices/>
			<Works />
      <Header />
      <AboutUs />
			<Clients />
      <Doing />
      <About />
      <FooterInfo/>
			<Footer />
		</div>
	);
}
