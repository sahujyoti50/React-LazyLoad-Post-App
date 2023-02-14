export default function Post({ post }) {

  return (
    <ul>
        <li>{post.id}{post.title}</li>
    </ul>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json();

  return {
    fallback: 'blocking',
    paths: posts.map((post) => ({
      params: { id: post.id.toString() }
    }))
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post
    }
  }
}