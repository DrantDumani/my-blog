import { Form, useSearchParams } from "react-router-dom";
import SearchSVG from "../SearchSVG/SearchSVG";
import { useId, useState } from "react";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  const [searchParams] = useSearchParams();
  const [searchTag, setSearchTag] = useState(searchParams.get("tag") || "");
  const id = useId();

  const editSearch = (e) => {
    setSearchTag(e.target.value);
  };

  return (
    <Form
      className={styles.searchForm}
      role="search"
      method="GET"
      action={`/search/?${searchTag.replace(/\s+/g, "+")}`}
    >
      <label className={styles.label} htmlFor={id}>
        <SearchSVG />
      </label>
      <input
        className={styles.input}
        id={id}
        type="search"
        name="tag"
        value={searchTag}
        onInput={editSearch}
        placeholder="Search by tag"
      />
      <button className={styles.srOnly}>Search</button>
    </Form>
  );
}
