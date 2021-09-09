import { useParams } from 'react-router';
import BlogItem from '../components/Sections/Blog/BlogItem';

export default function SingleBlogPage() {
  const { blogId } = useParams();
  console.log('params', blogId);
  /// useStrapi hook
  // get data, pass data as blog
  const blogObj = {};
  return (
    <>
      <h1>single</h1>
      {/* <BlogItem blog={blogObj} /> */}
    </>
  );
}
