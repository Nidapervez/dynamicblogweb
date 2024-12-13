import Link from 'next/link';
import techBlogs from '@/app/_lib/data';
import Image from 'next/image';

const BlogsPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-6xl ">
        <h1 className="text-2xl font-bold mb-4 text-center">Blogs</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techBlogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
              <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                <Image
                  src={blog.image}
                  width={500}
                  height={300}
                  alt={blog.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm block text-gray-400 mb-2"></span>
                  <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                  <hr className="my-4" />
                  <p className="text-gray-400 text-sm">{blog.description || 'No description available.'}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
