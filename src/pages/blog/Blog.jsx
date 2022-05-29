import './blog.css';
import PagesHeader from '../../components/shared/PagesHeader';
import BlogGrid from './BlogGrid';

function Blog() {
  return (
    <div>
      <PagesHeader
        headerText={'Blog'}
        subText={'All the latest news about the work of creative designers'}
      />
      <section className="blog-posts-section">
        <div className="container">
          <h1 className="overlay-header-text">Blog</h1>
          <h2>
            A Super Trendy Theme for Designers, Photographers and Creatives
          </h2>
        </div>
        <BlogGrid />
      </section>
    </div>
  );
}
export default Blog;
