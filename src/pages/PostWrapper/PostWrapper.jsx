import { SearchBar } from "../../components/SearchBar/SearchBar";
import { PostCard } from "../../components/PostCard/PostCard";
import { useLoaderData, Link } from "react-router-dom";
import styles from "./PostWrapper.module.css";

export function PostWrapper() {
  const postList = useLoaderData();
  return (
    <div className={styles.gridWrapper}>
      <SearchBar />

      <h1 className={styles.title}>All Posts</h1>

      {postList.length ? (
        <div className={styles.postGrid}>
          {postList.map((post) => (
            <Link
              className={styles.postLink}
              key={post._id}
              to={`/post/${post._id}`}
            >
              <PostCard
                title={post.title}
                subTitle={post.subTitle}
                date={post.timestamp}
              />
            </Link>
          ))}
        </div>
      ) : (
        <p>There are no posts here...yet.</p>
      )}
    </div>
  );
}
