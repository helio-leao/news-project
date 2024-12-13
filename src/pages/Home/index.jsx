import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import imagePlaceholder from "./../../assets/images/image-placeholder.jpg";

const API_URL = "https://newsapi.org/v2/";
const API_KEY = import.meta.env.VITE_API_KEY;
const PAGE_SIZE = 100; // api max is 100

export default function Home() {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    axios
      .get(
        `${API_URL}top-headlines?pageSize=${PAGE_SIZE}&country=us&apiKey=${API_KEY}`
      )
      .then(({ data }) => setPageData(data));
  }, []);

  return (
    <section className={styles.topHeadlines}>
      {pageData.articles &&
        pageData.articles.map((article) => {
          return (
            <article key={article.url} className={styles.article}>
              <img
                className={styles.articleImage}
                src={article.urlToImage || imagePlaceholder}
                alt=""
              />
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <p className={styles.articleDescription}>{article.description}</p>
              <span className={styles.articleDate}>
                {new Date(article.publishedAt).toLocaleString("pt-BR")}
              </span>
              <Link
                className={styles.articleLink}
                to="/article"
                state={article}
              >
                Read more
              </Link>
            </article>
          );
        })}
    </section>
  );
}
