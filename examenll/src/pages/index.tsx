import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>ChatGPT Barato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      </>
  )
}

export default Index
