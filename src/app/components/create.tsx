'use client';

import React, { useState, ChangeEvent } from 'react';

interface CreateProps {
  addComment: (newComment: any) => void;
}

const Create: React.FC<CreateProps> = ({ addComment }) => {
  const [formData, setFormData] = useState({ comment: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create interpretation');
      }

      const newComment = await response.json();
      addComment(newComment); // Update parent state
      setFormData({ comment: '' }); // Clear input field
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h1 className="text-xl font-semibold mb-4">Add a Comment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          name="comment"
          placeholder="Write your comment here..."
          value={formData.comment}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInputChange}
          rows={4}
        />
        <button
          className={`w-full py-2 px-4 text-white rounded-lg ${
            isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Comment'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Create;
