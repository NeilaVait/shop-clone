import { useParams } from 'react-router';
import BlogItem from '../components/Sections/Blog/BlogItem';
import useStrapi from '../hooks/useStrapi';

export default function SingleBlogPage() {
  const { blogId } = useParams();
  // console.log('params', blogId);

  const [blogObj] = useStrapi(`/canvas-blogs/${blogId}`);
  // console.log(blogObj);
  /// useStrapi hook
  // get data, pass data as blog

  return (
    <section className='container'>
      <h1>single</h1>
      <BlogItem singlePage blog={blogObj} />
    </section>
  );
}
