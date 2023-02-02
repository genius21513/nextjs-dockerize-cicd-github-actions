/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { useEffect } from 'react'
import Layout from '../components/Layout'

export default function Home({ posts }) {
  useEffect(() => {
    console.log('[] in index');
  }, [])

  return (
    <>
      <Layout>
        <p>This is Home Page. for test</p>

        <div>
          <ul>
            {
              posts.map(p => (
                <Link href={`/posts/${p.id}`} key={p.id}>
                  <li>{p.title}</li>
                </Link>
              ))
            }
          </ul>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  console.log('This is: getStaticProps');
  const posts = [
    { id: 1, title: "Hello 1", content: "This is Hello content 1" },
    { id: 2, title: "Hello 2", content: "This is Hello content 2" },
  ]

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  }
}
