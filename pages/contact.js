import Head from "next/head"
import Header from "../components/common/Header"
import HeroSection from "../components/common/Hero"

const Contact = () => {
    return (
      <div className="h-screen ">
        <Head>
          <title>Contact</title>
          <link rel="icon" href="/favicon.ico" />
           <meta title="gkj" />
        </Head>
        <Header />
        <HeroSection 
        Title={'Contact Us '}  
        subtitle={'We are here to help you.'}
        imgcls={'bg-hero'}
        />
        <div className="h-64 border border-rose-800  py-4 md:py-20">
             <button className="rounded px-10 py-2  button-2 btn border-main border-2">CLICK</button>
             <button className="rounded px-10 py-2  button-3     border-main border-2">CLICK</button>
          
        </div>
      </div>
    )
  }
  
  export default Contact