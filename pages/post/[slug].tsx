import { NextPage } from "next";
import React from "react";
import Author from "../../components/Author/Author";
import Categories from "../../components/Categories/Categories";
import Comments from "../../components/Comments/Comments";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import PostDetail from "../../components/PostDetail/PostDetail";
import PostWidget from "../../components/PostWidget/PostWidget";
import { Post } from "../../types";
import { client } from "../../utils/client";
import { getPostDetails } from "../../utils/query";
import {
  LeftContainer,
  PostDetailsContainer,
  PostDetailsWrapper,
  RightContainer,
  RightWrapper,
} from "../../styles/styles";

interface IProps {
  posts: Post[];
}

const PostDetails: NextPage<IProps> = ({ posts }) => {
  return (
    <PostDetailsContainer>
      {posts.map((post: Post) => (
        <PostDetailsWrapper key={post.title}>
          <LeftContainer>
            <PostDetail post={post} />
            <Author author={post?.createdBy} />
            <CommentsForm id={post._id} />
            <Comments comment={post.comments} />
          </LeftContainer>
          <RightContainer>
            <RightWrapper>
              <PostWidget
                slug={post?.slug?.current}
                categories={post?.category.slug.current}
              />
              <Categories />
            </RightWrapper>
          </RightContainer>
        </PostDetailsWrapper>
      ))}
    </PostDetailsContainer>
  );
};

export const getServerSideProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const posts = await client.fetch(getPostDetails(slug));

  return {
    props: {
      posts,
    },
  };
};

export default PostDetails;
