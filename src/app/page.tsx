'use client';

import Rome from '@/app/blogs/page';
import React, { useEffect, useState } from 'react';
import Create from './components/create';
import Link from 'next/link';

const Home = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInterpretations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/comments');
        if (!response.ok) {
          throw new Error('Failed to fetch interpretations');
        }
        const data = await response.json();
        setComments(data);
      } catch (error: any) {
        console.error(error.message || error); // Log the error
        setError('Failed to load interpretations, please try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };
    fetchInterpretations();
  }, []);

  const addComment = (newComment: any) => {
    console.log('Adding new comment:', newComment); // Debugging log
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <Rome />
      {error && <p className="py-4 text-red-500">{error}</p>}
      {isLoading ? (
        <p className="text-center text-gray-600">Loading comments...</p>
      ) : (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Previous Comments</h2><h1>After adding comment reload the page to view your comment</h1>
          {comments.length > 0 ? (
            comments.map((inter, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow border border-gray-200"
              >
                <p className="text-gray-700">{inter.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to add one!</p>
          )}
        </div>
      )}
      <div className="mt-8">


      <Link href={"https://crudblogging-git-main-nida-pervezs-projects.vercel.app/"}><button className='bg-black text-white ml-64 rounded-lg h-11'>If u want to make your own blog click here</button>
      </Link>
        <Create addComment={addComment} />
    
      </div>
    </div>
  );
};

export default Home;
