import { SearchBar } from "../../components/SearchBar/SearchBar";
import { PostCard } from "../../components/PostCard/PostCard";
import { useLoaderData, Link } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
  const postList = useLoaderData();

  return (
    <div className={styles.mainWrapper}>
      <SearchBar />

      <div>
        <h1 className={styles.title}>Welcome to Almagorge</h1>
        <h2 className={styles.title}>Recent Posts</h2>
      </div>

      {postList.length ? (
        <div className={styles.postContainer}>
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
