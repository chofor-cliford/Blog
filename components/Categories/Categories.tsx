import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../utils/client";
import { getCategories } from "../../utils/query";
import { CategoryContainer, CategoryName, Heading } from "./styles";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(getCategories()).then((category) => {
      setCategories(category);
    });
  }, []);

  return (
    <CategoryContainer>
      <Heading>Categories</Heading>
      {categories.map((category: any) => (
        <Link
          href={`/category/${category.slug.current}`}
          key={category.slug.current}
        >
          <CategoryName>{category.name}</CategoryName>
        </Link>
      ))}
    </CategoryContainer>
  );
};

export default Categories;
