import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import CallToAction from '../../components/CallToAction'
import 'bootstrap-icons/font/bootstrap-icons.css';
import SectionAbout from '../../components/SectionAbout'
import Footer from '../../components/Footer'
import ChatRecipes from '../../components/ChatRecipes'
import NavBar from '../../components/NavBar'
const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>ChatGPT Recetas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{backgroundColor: "#F8EFFB"}}>
        <NavBar />
        <Header />
        <SectionAbout />
        <ChatRecipes />
        <CallToAction />
        <Footer />
      </div>

    </>
  )
}

export default Index
