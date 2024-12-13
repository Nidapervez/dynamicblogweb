import Link from "next/link";
// import { FaPen, FaBook, FaUsers } from "react-icons/fa"; // Icons for a blog


export default function About() {
  return (
    <>
      <section className=" py-16 px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">About Our Blog</h1>
      </section>
      <section className="bg-blue-800/10 py-8 px-8">
        <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
          At Our Blog, we are passionate about sharing insightful articles, stories, and ideas on a variety of topics. From lifestyle and technology to personal development, our blog is designed to inform, inspire, and engage readers.
        </p>
      </section>
      <section className="bg-bg py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
   
            <h3 className="text-2xl font-bold text-gray-800">Expert Writers</h3>
            <p className="text-gray-600">Our talented writers create engaging and well-researched content on various topics.</p>
          </div>
          <div>
            {/* <FaBook className="mx-auto mb-4 text-gray-800" size={100} /> */}
            <h3 className="text-2xl font-bold text-gray-800">Diverse Topics</h3>
            <p className="text-gray-600">We cover a wide range of subjects from technology to lifestyle, ensuring theres something for everyone.</p>
          </div>
          <div>
            {/* <FaUsers className="mx-auto mb-4 text-gray-800" size={100} /> */}
            <h3 className="text-2xl font-bold text-gray-800">Engaged Community</h3>
            <p className="text-gray-600">Our readers are at the heart of what we do. We encourage discussions and feedback from our community.</p>
          </div>
        </div>
      </section>
      <section className="bg-bg py-8 px-8 text-center">
        <Link href="/posts">
          <button className="mt-7 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-cyan-500 text-2xl p-2 px-7 shadow-x-2xl transition-shadow">
            Explore Our Posts
          </button>
        </Link>
      </section>
    </>
  );
}
