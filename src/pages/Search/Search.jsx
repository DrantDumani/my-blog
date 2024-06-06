import { SearchBar } from "../../components/SearchBar/SearchBar";
import { PostCard } from "../../components/PostCard/PostCard";
import { useLoaderData, Link } from "react-router-dom";

export function Search() {
  const postList = useLoaderData();

  return (
    <div>
      <SearchBar />

      <h1>Search Results</h1>

      {postList.length ? (
        <div>
          {postList.map((post) => (
            <Link key={post._id} to={`/post/${post._id}`}>
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
