import { NextPage } from "next";
import React from "react";
import { MdCalendarToday } from "react-icons/md";
import moment from "moment";
import {
  AuthorContainer,
  AuthorName,
  AuthorWrapper,
  Button,
  ButtonContainer,
  ButtonText,
  DateContainer,
  Excerpt,
  ImgContainer,
  AuthorImg,
  PostCardContainer,
  Title,
  TitleContainer,
} from "./styles";
import Image from "next/image";
import { Post } from "../../types";
import { urlFor } from "../../utils/client";

interface IProps {
  post: Post;
}

const PostCard: NextPage<IProps> = ({ post }) => {
  return (
    <PostCardContainer>
      <ImgContainer>
        <Image
          src={urlFor(post.image).width(800).sharpen(20).url()}
          alt={post.title}
          style={{ borderRadius: "10px 10px 0 0" }}
          layout="fill"
        />
      </ImgContainer>
      <TitleContainer href={`/post/${post.slug.current}`}>
        <Title>{post.title}</Title>
      </TitleContainer>
      <AuthorContainer>
        <AuthorWrapper>
          <AuthorImg>
            <Image
              src={urlFor(post.createdBy.image).width(250).url()}
              alt={post.createdBy.name}
              style={{ borderRadius: "50%" }}
              layout="fill"
            />
          </AuthorImg>
          <AuthorName>{post.createdBy.name}</AuthorName>
        </AuthorWrapper>
        <DateContainer>
          <MdCalendarToday />
          <span>{moment(post._createdAt).format("MMM DD, YYYY")}</span>
        </DateContainer>
      </AuthorContainer>
      <Excerpt>{post.excerpt}</Excerpt>
      <ButtonContainer href={`/post/${post.slug.current}`}>
        <Button>
          <ButtonText>Continue reading...</ButtonText>
        </Button>
      </ButtonContainer>
    </PostCardContainer>
  );
};

export default PostCard;
