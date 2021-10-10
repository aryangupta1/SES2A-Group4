import React, { useState } from "react";
import styles from "./Search.module.css";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Find Assignment</div>
      <div className={styles.subheading}>
        Here, you can edit your details, create a new assignment, or view your existing assignments!
      </div>
      <input className={styles.input} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default Search;
