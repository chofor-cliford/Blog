import { NextPage } from "next";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { client } from "../../utils/client";
import { getCategories } from "../../utils/query";
import {
  HeaderContainer,
  LeftWrapper,
  HeaderWrappers,
  Title,
  RightWrapper,
  Categories,
  MobileContainer,
  MobileRightWrapper,
  MobileCategories,
} from "./styles";
type Text = {
  slug: {
    current: string;
  };
  name: string;
  image: string;
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    client.fetch(getCategories()).then((category) => {
      setCategories(category);
    });
  }, []);

  return (
    <HeaderContainer>
      <HeaderWrappers>
        <LeftWrapper>
          <Link href="/">
            <Title>BF Blog</Title>
          </Link>
        </LeftWrapper>
        <RightWrapper>
          {categories?.map((category: Text) => (
            <Link
              href={`/category/${category.slug.current}`}
              key={category.name}
            >
              <Categories>{category.name}</Categories>
            </Link>
          ))}
        </RightWrapper>
        <MobileContainer>
          {toggle ? (
            <RiCloseFill onClick={handleClick} />
          ) : (
            <RiMenuFill onClick={handleClick} />
          )}
        </MobileContainer>
      </HeaderWrappers>
      {toggle && (
        <MobileRightWrapper left={toggle ? true : false}>
          <MobileCategories>
            {categories?.map((category: Text) => (
              <Link
                href={`/category/${category.slug.current}`}
                key={category.name}
              >
                <Categories onClick={handleClick}>{category.name}</Categories>
              </Link>
            ))}
          </MobileCategories>
        </MobileRightWrapper>
      )}
    </HeaderContainer>
  );
};

export default Header;

// const categories = [
//   {
//     name: "Astronomy",
//     slug: "astronomy",
//   },
//   {
//     name: "Sports",
//     slug: "sport",
//   },
//   {
//     name: "Web Development",
//     slug: "web-dev",
//   },
//   {
//     name: "Education",
//     slug: "education",
//   },
//   {
//     name: "Photograpy",
//     slug: "photograpy",
//   },
// ];
