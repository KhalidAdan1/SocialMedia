import { useState } from 'react';
import users from '../data/users.json';
import posts from '../data/post.json';
import comments from '../data/comments.json';

export const useData = () => {
  const [localUsers, setLocalUsers] = useState(users.users);
  const [localPosts, setLocalPosts] = useState(posts.posts);
  const [localComments, setLocalComments] = useState(comments.comments);

  const getUser = (userId: string) => {
    return localUsers.find(user => user.id === userId);
  };

  const getPostComments = (postId: string) => {
    return localComments.filter(comment => comment.postId === postId);
  };

  const getUserPosts = (userId: string) => {
    return localPosts.filter(post => post.userId === userId);
  };

  const addComment = (postId: string, userId: string, text: string) => {
    const newComment = {
      id: Date.now().toString(),
      postId,
      userId,
      text,
      timestamp: new Date().toISOString()
    };
    setLocalComments([...localComments, newComment]);
  };

  const toggleLike = (postId: string) => {
    setLocalPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  return {
    users: localUsers,
    posts: localPosts,
    comments: localComments,
    getUser,
    getPostComments,
    getUserPosts,
    addComment,
    toggleLike
  };
};