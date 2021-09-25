import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            
            <Header />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'B2B Events and conferences',
    description: 'This page is listing the most interesting B2B events',
    keywords: 'B2B, conferences, summits, events'
}