export const getPost = () => {
  const query = `*[_type == "post"] {
        image {
            asset ->{
                url
            }
        },
        createdBy -> {
            name,
            _id,
            image {
                asset ->{
                    url
                }
            },
            description
        },
        _createdAt,
        slug{
            current
        },
        title,
        excerpt,
        category -> {
            name,
            slug{
                current
            }
        }
    }`;

  return query;
};

export const getRecentPost = (): any => {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
        title,
        image {
            asset -> {
                url
            }
        },
        _createdAt,
        slug {
            current
        }

    }[0...3]`;

  return query;
};

export const getSimilarPost = (category: any, slug: any): any => {
  const query = `*[_type == "post" && ('${slug}' != slug.current && !(references('${category}')))] {
        title,
        image {
            asset -> {
                url
                }
            },
        _createdAt,
        slug {
            current
            }
    }[0...3]`;

  return query;
};

export const getCategories = () => {
  const query = `*[_type == 'category'] {
        name,
        slug {
            current
        }
    }`;

  return query;
};

export const getPostDetails = (slug: string) => {
    const query = `*[_type == "post" &&  slug.current == '${slug}'] {
      _id,
        image {
            asset ->{
                url
            }
        },
        createdBy -> {
            name,
            _id,
            image {
                asset->{
                    url
                }
            },
            description
        },
        _createdAt,
        slug {
            current
        },
        title,
        excerpt,
        category -> {
            name,
            slug {
                current
            }
        },
        content[],
        comments[]{
            name,
            _key,
            comment,
        }
    }`;

  return query;
};

export const getFeaturedPost = () => {
  const query = `*[_type == "post" && featuredPost == true ] {
        title,
        image {
            asset -> {
                url
                }
            },
        _createdAt,
        slug {
            current
         },
        createdBy -> {
            name,
            image {
                asset -> {
                    url
                }
            },
            description
        }
    }`;
    
    return query;
};

export const getCategoryPostDetails = (slug: string) => {
    const query = `*[_type == "post" &&  slug.current match '${slug}*'] {
      _id,
        image {
            asset ->{
                url
            }
        },
        createdBy -> {
            name,
            _id,
            image {
                asset ->{
                    url
                }
            },
            description
        },
        _createdAt,
        slug{
            current
        },
        title,
        excerpt,
        category -> {
            name,
            slug{
                current
            }
        },
        content[],
        comments[]{
            name,
            _key,
            comment,
        }
    }`;

  return query;
};
