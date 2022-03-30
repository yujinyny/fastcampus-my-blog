import styles from "../styles/Home.module.css";
import SanityService from "../services/SanityService";
import Header from "../components/Header";
import BlogHeadline from "../components/BlogHeadline";
import BlogMainPost from "../components/BlogMainPost";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

export default function Home({ home, posts }) {
  console.log(home);
  console.log(posts);

  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPosts = posts.filter((p) => p.slug !== home.mainPostUrl);
  console.log(mainPost);
  console.log(otherPosts);

  return (
    <div className={styles.container}>
      <Header />
      <BlogHeadline />
      <BlogMainPost {...mainPost} />
      <BlogList posts={otherPosts} />
      <Footer />
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
