import Head from 'next/head'
import Layout from '../components/layout.component'
import { ArtistSection, ContactSection, GalerySection, ShopSection } from '../components/sections.component'

export default function Home() {
  return (
    <Layout>
      
       <div className="main-wrapper">
          {/* Section 1 */}
          <GalerySection/>
          {/* Section 2 */}
          <ArtistSection/>
          {/* Section 3 */}
          <ContactSection/>
          {/* Section 4 */}
          <ShopSection/>
         
      </div>
    </Layout>
  )
}
