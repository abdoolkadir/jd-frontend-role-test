import { data } from './blog.data';

import './blog.css';
import BlogPosts from './BlogPosts';

function BlogGrid() {
  return (
    <div className="blog-grid">
      {data.map(({ id, tag, title, timestamp, image }) => (
        <BlogPosts
          key={id}
          tag={tag}
          blogTitle={title}
          timestamp={timestamp}
          image={image}
        />
      ))}
    </div>
  );
}
export default BlogGrid;
