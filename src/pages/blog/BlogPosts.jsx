import './blog.css';

function BlogPosts({ tag, image, blogTitle, timestamp }) {
  return (
    <div className="blog-card">
      <span className={tag}>{tag}</span>
      <img src={image} />
      <div className="blog-info">
        <p className="blog-time">{timestamp}</p>
        <h4 className="blog-name">{blogTitle}</h4>
      </div>
    </div>
  );
}
export default BlogPosts;
