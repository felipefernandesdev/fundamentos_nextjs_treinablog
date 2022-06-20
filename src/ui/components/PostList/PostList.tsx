import styles from './PostList.module.css';
import { BlogPost } from '../../../data/@types/BlogPostInterface';
import Link from 'next/link'

export default function PostList({ posts }: { posts: BlogPost[] }) {
  return <ul className={styles['post-list']}>
    {
      posts.map(post => (
        <PostListItem
          key={post.id}
          post={post}
        />
      )
      )
    }
  </ul>
}

export function PostListItem({ post }: { post: BlogPost }) {
  return (
    <Link href={`posts/${post.slug}`}>
      <li className={styles['post-list-item']}>
        <img className={styles['post-picture']} src={post.picture} alt={post.title} />
        <h2 className={styles['post-title']}>{post.title}</h2>
        <p>{post.description}</p>
      </li>
    </Link>
  )    
}