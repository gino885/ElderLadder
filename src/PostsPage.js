import React from 'react';
import backgroundImage from './images/ladder1.png'; 
import v1 from './videos/5-7v.mp4';

function PostsPage() {
  const posts = [
    {
      title: '5-7許雁婷',
      description: '與爺爺奶奶彰化生活',
      video: v1, // 影片路徑
    },
    {
      title: '貼文標題 3',
      description: '這是第三篇貼文的描述。',
      image: 'path/to/image2.jpg', 
    },
    {
      title: '貼文標題 4ˋ',
      description: '這是第四篇貼文的描述。',
      image: 'path/to/image2.jpg',
    },
    {
      title: '貼文標題 5',
      description: '這是第五篇貼文的描述。',
      image: 'path/to/image2.jpg', 
    },
    {
      title: '貼文標題 6',
      description: '這是第六篇貼文的描述。',
      image: 'path/to/image2.jpg', // 可能有些貼文沒有影片或圖片
      // video 欄位不包含，意味著這篇貼文沒有影片
    },
    {
      title: '貼文標題 7',
      description: '這是第七篇貼文的描述。',
      image: 'path/to/image2.jpg', 
    },
  ];
    return (
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
    <div className="w-1/2 grid grid-cols-1 grid-rows-7 gap-5 p-4 mx-auto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <h2 className="text-2xl font-bold text-center text-gray-800 my-4">Posts</h2>
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col gap-0.5 border border-gray-300 p-4 rounded">
          <h2 className="font-bold text-3xl mb-3">{post.title}</h2>
          <p className="font-bold text-black mb-8">{post.description}</p>
          <div>
            {post.image && <img src={post.image} alt="Post" />}
            {post.video && <video src={post.video} controls />}
          </div>
        </div>
      ))}
    </div>
  </div>
    );
  }

export default PostsPage;