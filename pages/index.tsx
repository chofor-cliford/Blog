import Head from "next/head";
import PostCard from "../components/PostCard/PostCard";
import Categories from "../components/Categories/Categories";
import PostWidget from "../components/PostWidget/PostWidget";
import {
  RightPostWrapper,
  RightPost,
  PostContainer,
  PostWrapper,
  ServerContainer,
} from "../styles/globalstyles";
import { client } from "../utils/client";
import { getPost } from "../utils/query";
import { NextPage } from "next";
import { Post } from "../types";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost";

interface IProps {
  posts: Post[];
}

const Home: NextPage<IProps> = ({ posts }) => {
  return (
    <ServerContainer>
      <Head>
        <title>BF Blog</title>
      </Head>
      <FeaturedPost />
      <PostContainer>
        <PostWrapper>
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </PostWrapper>
        <RightPost>
          <RightPostWrapper>
            <PostWidget />
            <Categories />
          </RightPostWrapper>
        </RightPost>
      </PostContainer>
    </ServerContainer>
  );
};

export const getServerSideProps = async () => {
  const posts = await client.fetch(getPost());

  return {
    props: {
      posts,
    },
  };
};

export default Home;
