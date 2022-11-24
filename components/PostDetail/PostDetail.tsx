import moment from "moment";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { MdCalendarToday } from "react-icons/md";
import { Post } from "../../types";
import { urlFor } from "../../utils/client";
import {
  AuthorContainer,
  AuthorImg,
  AuthorName,
  AuthorWrapper,
  DateContainer,
} from "../PostCard/styles";
import { Content, ImgContainer, PostDetailContainer, PostTitle } from "./styles";

interface IProp {
  post: Post;
}

const PostDetail: NextPage<IProp> = ({ post }) => {
  return (
    <PostDetailContainer>
      <ImgContainer>
        <Image
          src={urlFor(post.image).width(800).url()}
          alt={post.title}
          style={{ borderRadius: "10px" }}
          layout="fill"
        />
      </ImgContainer>
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
        <PostTitle>{post.title}</PostTitle>
        <Content>{post?.content}</Content>
    </PostDetailContainer>
  );
};

export default PostDetail;
