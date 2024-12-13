import techBlogs from '@/app/_lib/data';
import Link from 'next/link';

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const blog = techBlogs.find((blog) => blog.id === Number(params.id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
            LATEST BLOGS
          </h2>
        </div>
        <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-60 object-cover rounded-t"
          />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">{blog.title}</span>
            <h3 className="text-xl font-bold text-gray-800">{blog.description}</h3>
            <hr className="my-4" />
           <Link href='/'> <button className="text-gray-400 text-sm bg-black rounded-lg h-9">Go Back!</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
