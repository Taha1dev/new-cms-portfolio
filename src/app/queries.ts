export const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;