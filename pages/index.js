import styles from "../styles/Home.module.css";
import SanityService from "../services/SanityService";

export default function Home({ home, posts }) {
  console.log(home);
  console.log(posts);
  return (
    <div className={styles.container}>
      <h1>Blog Home</h1>
    </div>
  );
}

export async function getStaticProps() {
  const senityService = new SanityService();
  const home = await senityService.getHome();
  const posts = await senityService.getPosts();

  return {
    props: { home, posts },
  };
}
