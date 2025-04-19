// Blog post queries
export const allPostsQuery = `
  *[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage {
      asset->{
        url
      }
    }
  }
`;

export const singlePostQuery = (slug: string) => `
  *[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    publishedAt,
    "author": author->name,
    body
  }
`;

// 🏠 Property queries
export const allPropertiesQuery = `
  *[_type == "property"]{
    _id,
    slug,
    address,
    price,
    location,
    beds,
    bath,
    squareFt,
    mainSrc {
      asset -> {
        url
      }
    }
  }
`;

export const singlePropertyQuery = (slug: string) => `
  *[_type == "property" && slug.current == "${slug}"][0]{
    mainSrc {
      asset -> {
        url
      }
    },
    address,
    price,
    location,
    beds,
    bath,
    squareFt,
    propertyDescription,
    specs,
    highlights,
    listingImages[] {
      asset -> {
        url
      }
    }
  }
`;
