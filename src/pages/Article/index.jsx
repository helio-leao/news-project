import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export default function Article() {
  const { state: article } = useLocation();

  // if user opening article on new tab
  if (!article) return <p>It was not possible to open an article</p>;

  return (
    <article className={styles.article}>
      {article.urlToImage && (
        <img className={styles.articleImage} src={article.urlToImage} alt="" />
      )}
      <h1 className={styles.articleTitle}>{article.title}</h1>
      <p className={styles.articleContent}>{article.content}</p>
      <p className={styles.articleDate}>
        {new Date(article.publishedAt).toLocaleString("pt-BR")}
      </p>
      <a
        className={styles.articleLink}
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to page
      </a>
    </article>
  );
}
