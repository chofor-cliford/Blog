import moment from "moment";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { MdCalendarToday } from "react-icons/md";
import { Post } from "../../types";
import { urlFor } from "../../utils/client";
import { PortableText } from "@portabletext/react";
import {
  AuthorContainer,
  AuthorImg,
  AuthorName,
  AuthorWrapper,
  DateContainer,
} from "../PostCard/styles";
import {
  Content,
  H1,
  H2,
  H3,
  ImgContainer,
  Ol,
  PostDetailContainer,
  PostTitle,
  Ul,
} from "./styles";

interface IProp {
  post: Post;
}

const components = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).width(900).quality(20).url()}
        alt={value.alt || "blog-image "}
        width={900}
        height={320}
      />
    ),
  },
  block: {
    h1: ({ children }: any) => <H1>{children}</H1>,
    h2: ({ children }: any) => <H2>{children}</H2>,
    h3: ({ children }: any) => <H3>{children}</H3>,
  },
  list: {
    bullet: ({ children }: any) => <Ul>{children}</Ul>,
    number: ({ children }: any) => <Ol>{children}</Ol>,
  },
};

const PostDetail: NextPage<IProp> = ({ post }) => {
  return (
    <PostDetailContainer>
      <ImgContainer>
        <Image
          src={urlFor(post.image && post.image)
            .width(800)
            .url()}
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
      <Content>
        <PortableText components={components} value={post.content} />
      </Content>
    </PostDetailContainer>
  );
};

export default PostDetail;
