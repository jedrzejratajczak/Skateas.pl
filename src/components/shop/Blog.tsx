import Posts from './Posts';
import Title from './Title';

const Blog = () => {
  return (
    <div className="h-567 border border-black">
      <Title title="BLOG:" />
      <Posts />
    </div>
  );
};

export default Blog;
