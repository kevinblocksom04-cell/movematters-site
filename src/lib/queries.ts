export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    description,
    publishedAt,
    author
  }
`;

// Fetches all posts with full body — used in getStaticPaths to avoid a second per-post fetch
export const ALL_POSTS_FULL_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    description,
    publishedAt,
    author,
    tags,
    body
  }
`;
