import Head from 'next/head';
import Image from 'next/image';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

import HomeSlider from '../../components/HomeSlider';
import DesktopNavbar from '../../components/DesktopNavbar';
import AboutUs from '../../components/AboutUs';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import Brands from '../../components/Brands';
import Stats from '../../components/Stats';
import FAQs from '../../components/FAQS';
import Footer from '../../components/Footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href= "../../public/img/logo.png" />
      </Head>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <DesktopNavbar></DesktopNavbar>
      <HomeSlider></HomeSlider>
      <AboutUs></AboutUs>
      <Categories></Categories>
      <Products/>
      <Brands></Brands>
      <Stats></Stats>
      <FAQs></FAQs>
      <Footer></Footer>
    </div>
  );
}
