/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import Layout from '../../components/Layout'

export default function Home({ post }) {
    useEffect(() => {
        console.log('[] in posts/[id].js');
    }, [])

    return (
        <>
            <Layout>
                <p>This is Posts/[id].js</p>

                <div>
                    <ul>
                        {JSON.stringify(post)}
                    </ul>
                </div>
            </Layout>
        </>
    )
}


export async function getStaticPaths() {
    console.log('This is: getStaticPaths [id]');

    // const posts = [
    //     { id: 1, title: "Hello 1", content: "This is Hello content 1" },
    //     { id: 2, title: "Hello 2", content: "This is Hello content 2" },
    // ]
    
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // can also be true or 'blocking'
    }
}


export async function getStaticProps(context) {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    console.log('This is: getStaticProps [id]');
    const post = { id: 1, title: "Hello 1", content: "This is Hello content 1" }

    return {
        props: {
            post,
        }, // will be passed to the page component as props
    }
}
