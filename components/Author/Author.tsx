import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { urlFor } from "../../utils/client";
import { AuthBio, AuthContainer, AuthName, AuthWrapper } from "./styles";

type Text = {
  name: string;
  _id: string;
  image: {
    asset: {
      url: string;
    };
  };
  description: string;
};

interface IProps {
  author: Text;
}

const Author: NextPage<IProps> = ({ author }) => {
  return (
    <AuthContainer>
      <AuthWrapper>
        <Image
          src={urlFor(author.image).width(500).url()}
          alt={author.name}
          width={70}
          height={70}
          style={{ borderRadius: "50%" }}
        />
      </AuthWrapper>
        <AuthName>{author.name}</AuthName>
        <AuthBio>{author.description}</AuthBio>
    </AuthContainer>
  );
};

export default Author;
