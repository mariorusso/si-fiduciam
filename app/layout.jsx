import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';
export const metadata = {
    title: "Si Fiduciam | Share Your Thoughts With Confidence.",
    description: "The Freedom of Speech Platform. We Put Freedom Above All Human Rights!",
    icons: {
        icon: '/assets/icons/favicon.ico',
        apple: '/assets/icons/apple-touch-icon.png'
    },    
    openGraph: {
            type: 'website',
            url: 'https://sifiduciam.com/',
            title: 'Si Fiduciam | Share Your Thoughts With Confidence.',
            description: 'The Freedom of Speech Platform. We Put Freedom Above All Human Rights!',
            images: [
            {
                url: 'https://www.sifiduciam.com/icons/apple-touch-icon.png',
                width: 485,
                height: 581,
                alt: 'Si Fiduciam | Share Your Thoughts With Confidence.',
            }
            ],
            site_name: 'Si Fiduciam',
        },
        manifest: '/site.manifest',
    }


const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
            <Footer />
        </body>
    </html>
  )
}

export default RootLayout