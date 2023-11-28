import React from 'react';
import './animations.css';
import './App.css';

function PostsPage() {
  const v1 = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/videos/5-7v.mp4";
  const googleForm = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/googleForm.png";
  const posts = [
    {
      title: '5-7許雁婷',
      description: '與爺爺奶奶彰化生活',
      video: v1, // 影片路徑
    },
    {
      title: '貼文標題 2',
      description: '這是第二篇貼文的描述。',
      image: 'path/to/image2.jpg', 
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
    
    <div style={{ backgroundSize: 'cover', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
  <div className=" w-auto grid grid-cols-1 grid-rows-7 gap-5 p-4 mx-auto" style={{  borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
    <div className="flex items-center justify-between my-4">
    <div className=" responsive-invisivle h-20 invisible"> {/* 透明的佔位元素，與圖標大小相同 */}
    </div>
    <h2 className="flex justify-center text-center text-6xl font-bold text-slate-50 text-shadow-lg" 
    style={{ textShadow: '4px 4px 4px rgba(0, 0, 1, 0.5)' }}>
    Posts
    </h2>
    <div className='ml-10'>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSekCkEwOXJt32iBUyAYhmC3Rg__daP1vZS99_9vMaHjrxXRvw/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="mr-20 w-20 h-20 hover:scale-110 hover:bg-blue-500 hover:shadow-lg transition transform duration-300 ease-in-out rounded-full">
    <img src={googleForm} alt="More" className=" mt-14 w-3/6 h-auto " />
    <p className="responsive-text2 font-bold text-slate-900 mt-4  text-shadow">後測問卷 </p>
     </a>
    </div>
  </div>
    {posts.map((post, index) => (
      <div key={index} className="flex flex-col gap-2 border border-gray-300 p-4 rounded hover:bg-blue-100 hover:shadow-xl transition ease-in-out duration-300" style={{ animation: 'fadeIn 0.5s' }}>
        <h2 className="font-bold text-3xl mb-3 text-teal-400 hover:text-blue-800">{post.title}</h2>
        <p className=" font-bold text-xl text-slate-950 mb-4 ">{post.description}</p>
        <div>
          {post.image && <img src={post.image} alt="Post" className="w-full h-auto rounded transition-transform duration-300 hover:scale-105" />}
          {post.video && <video src={post.video} controls className="w-full rounded transition-transform duration-300 hover:scale-105" />}
        </div>
      </div>
    ))}
  </div>
</div>


  );
  
  
}

export default PostsPage;