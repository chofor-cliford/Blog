import { NextPage } from "next";
import React from "react";
import Categories from "../../components/Categories/Categories";
import PostCard from "../../components/PostCard/PostCard";
import { Post } from "../../types";
import { client } from "../../utils/client";
import { getCategoryPostDetails } from "../../utils/query";
import {
  LeftContainer,
  PostDetailsContainer,
  PostDetailsWrapper,
  RightContainer,
  RightWrapper,
} from "../post/styles";
import Spinner from "../../components/PostWidget/Spinner";

interface IProps {
  posts: Post[];
}

const CategoryPost: NextPage<IProps> = ({ posts }) => {
  if (posts.length < 1) return <Spinner message="Loading..." />;
  return (
    <PostDetailsContainer>
      <PostDetailsWrapper>
        <LeftContainer>
          {posts.map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </LeftContainer>
        <RightContainer>
          <RightWrapper>
            <Categories />
          </RightWrapper>
        </RightContainer>
      </PostDetailsWrapper>
    </PostDetailsContainer>
  );
};

export const getServerSideProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const posts = await client.fetch(getCategoryPostDetails(slug));
  
  return {
    props: {
      posts,
    },
  };
};

export default CategoryPost;
