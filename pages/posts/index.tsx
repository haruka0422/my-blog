import Layout from '../../components/layout'
import Container from '../../components/container'
import Header from '../../components/header'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function Posts() {
    return (
        <>
            <Layout>
            <Head>
            <title>{CMS_NAME}</title>
            </Head>
            <Container>
            <Header />
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Posts
            </h1>
            </Container>
        </Layout>
        </>
        
    );
    
}