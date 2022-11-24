import moment from "moment";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Post } from "../../types";
import { urlFor } from "../../utils/client";
import {
  FeaturedPostCardContainer,
  FeaturedPostContent,
  FeaturedPostContentWrapper,
  FeaturedPostImage,
  PostAuthor,
  PostCreation,
  PostImageContainer,
  PostImg,
  PostLink,
  PostTitle,
} from "./styles";

interface IProps {
  post: Post;
}

const FeaturedPostCard: NextPage<IProps> = ({ post }) => {
  return (
    <FeaturedPostCardContainer>
      <FeaturedPostImage image={urlFor(post.image).width(700).url()} />
      <FeaturedPostContent />
      <FeaturedPostContentWrapper>
        <PostCreation>
          {moment(post._createdAt).format("MMM DD, YYYY")}
        </PostCreation>
        <PostTitle>{post.title}</PostTitle>
        <PostImageContainer>
          <PostImg>
            <Image
              src={urlFor(post.createdBy.image).width(500).url()}
              alt={post.createdBy.name}
              layout="fill"
              style={{ borderRadius: "50%" }}
            />
          </PostImg>
          <PostAuthor>{post.createdBy.name}</PostAuthor>
        </PostImageContainer>
      </FeaturedPostContentWrapper>
      <Link href={`/post/${post.slug.current}`}>
        <PostLink />
      </Link>
    </FeaturedPostCardContainer>
  );
};

export default FeaturedPostCard;
