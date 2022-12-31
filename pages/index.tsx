import Head from 'next/head'
import Nav from "../components/Nav"
import Header from "../components/Header"
import Features from "../components/Features"
import Footer from "../components/Footer"
import UsedBy from "../components/UsedBy"
import DataPrivacy from "../components/DataPrivacy"

export default function Home() {
  return (
    <>
      <Head>
        <title>OneLink | Your free personalised landing page</title>
        <meta name="description" content="One link to create a own customizable landing page with links and services to their various online platforms and resources with cool features." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>


      <div className="bg"></div>

      <Nav />
      <Header />
      <Features />
      <UsedBy />
      <DataPrivacy />
      <Footer />
    </>
  )
}
