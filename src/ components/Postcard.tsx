// src/components/PostCard.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useData } from '../hooks/postData';

type PostCardProps = {
  postId: string;
};

export const PostCard = ({ postId }: PostCardProps) => {
  const { posts, getUser, getPostComments, toggleLike } = useData();
  const post = posts.find(p => p.id === postId);
  const user = post ? getUser(post.userId) : null;
  const comments = post ? getPostComments(post.id) : [];

  if (!post || !user) return null;

  return (
    <View>
     
      <View>
        <Image source={{ uri: user.profilePic }} />
        <Text>{user.username}</Text>
      </View>

      <Image source={{ uri: post.imageUrl }} />

      
      <View>
        <Text>Likes: {post.likes}</Text>
        <Text>{post.caption}</Text>
      </View>

      {comments.map(comment => (
        <View key={comment.id}>
          <Text>{getUser(comment.userId)?.username}: {comment.text}</Text>
        </View>
      ))}
    </View>
  );
};