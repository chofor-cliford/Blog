import React, { useEffect, useState } from "react";
import moment from "moment";
import { getRecentPost, getSimilarPost } from "../../utils/query";
import {
  Heading,
  ImgContainer,
  PostContainer,
  PostDate,
  PostDateContainer,
  PostLink,
  PostWidgetContainer,
} from "./styles";
import Image from "next/image";
import { client, urlFor } from "../../utils/client";
import { Post } from "../../types";

const PostWidget = ({ slug, category }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    let query = null;

    if (slug) {
      query = getSimilarPost(category, slug);
      client
        .fetch(query)
        .then((result: React.SetStateAction<never[]>) =>
          setRelatedPosts(result)
        );
    } else {
      query = getRecentPost();
      client
        .fetch(query)
        .then((result: React.SetStateAction<never[]>) =>
          setRelatedPosts(result)
        );
    }
  }, [slug, category]);

  return (
    <PostWidgetContainer>
      <Heading>{slug ? "Related Posts" : "Recent Posts"}</Heading>
      {relatedPosts?.map((post: Post) => (
        <PostContainer key={post.title}>
          <ImgContainer>
            <Image
              src={urlFor(post.image).width(250).url()}
              alt={post.title}
              layout="fill"
              style={{ borderRadius: "50px" }}
            />
          </ImgContainer>
          <PostDateContainer>
            <PostDate>
              {moment(post._createdAt).format("MMM DD, YYYY")}
            </PostDate>
          </PostDateContainer>
          <PostLink key={post.title} href={`/post/${post.slug.current}`}>{post.title}</PostLink>
        </PostContainer>
      ))}
    </PostWidgetContainer>
  );
};

export default PostWidget;
