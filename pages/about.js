/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import Layout from '../components/Layout'

export default function Home({ posts }) {
    useEffect(() => {
        console.log('[] in home');
    }, []);
    
    return (
        <>
            <Layout>
                <p>This is About</p>

                <div>
                    <ul>
                        {
                            posts.map(p => (
                                <li key={p.id}>{p.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    console.log('This is: getServerSideProps');
    const posts = [
        { id: 3, title: "Hello 3", content: "This is Hello content 1" },
        { id: 4, title: "Hello 4", content: "This is Hello content 2" },
    ]

    return {
        props: {
            posts,
        }, // will be passed to the page component as props
    }
}
