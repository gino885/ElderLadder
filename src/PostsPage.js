import React, { useState,useEffect } from 'react';
import './animations.css';
import './App.css';

const v1 = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/videos/5-7v.mp4";
const googleForm = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/googleForm.png";
const posts = [
  {
    title: '5-7許雁婷',
    description: '與爺爺奶奶彰化生活',
    video: v1, // 影片路徑
  },
  {
    title: '青銀下半場 — 陪伴是最長情的告白 - 陳柏駿',
    description: '記得小時候，阿嬤是我的超級英雄，無論是做最好吃的點心、帶我上下學，還是給予無微不至的關懷。現在，轉眼間，我們長大了，這段關係走到了下半場，阿嬤的記憶逐漸模糊，甚至有時會認不得眼前站著的那位，是他的孫子，但正是這個時候，超人下崗了，換成青輩的我們要好好陪伴他們，用愛續寫我們的故事，用最純真的心，最耐心的陪伴，證明愛是不會隨著時間流逝而消失的。'
    +'或許我們不能成為他們的超人，但，或許，他們也不希望我們如此，辛苦撐起幾十年的保護傘正是希望底下愛護的人不需這般辛勞，在他們眼裡，我們不需要頂天立地，只需要好好地陪伴在他們身邊' +"— 陪伴，就是最長情的告白。"
    ,
    video: 'https://www.youtube.com/watch?v=-Wi5va176rk', 
  },
  {
    title: '奶奶與我_透過傳承延續兒時記憶 - 盧易駿',
    description: '藉由這個寶貴的機會來和長輩學習技藝，在練習的過程中逐漸也與小時候的記憶有所串聯。孩提時候的我是與奶奶一起生活的，因此與奶奶很親。不過之後搬回去和父母住之後就變成只有定期會去探望奶奶而已，不復以往的親密，聊天的內容也只剩茶餘飯後的一般閒聊。但在和奶奶一起削竹筍的過程中，我們彷彿又回到了從前一樣，有更多互動，無形之中又拉近了彼此的距離。只不過奶奶年紀變大了，我也不是當初那個懵懂無知的小孩了，讓我感到光陰似箭歲月如梭，也決定以後要更加把握與奶奶相處的時光。',
    video: 'https://www.youtube.com/watch?v=LYzHlO0Pbi8', 
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


function PostsPage() {

  const [randomPosts, setRandomPosts] = useState([]);
useEffect(() => {
  const shuffledPosts = [...posts].sort(() => 0.5 - Math.random());
  setRandomPosts(shuffledPosts);
}, []); 

  
  return (
    
    <div style={{ backgroundSize: 'cover', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
  <div className=" responsive-border grid grid-cols-1 grid-rows-7 gap-5 p-4 mx-auto" style={{  borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
    <div className="flex items-center justify-between my-4">
    <div className=" responsive-invisivle h-20 invisible"> {/* 透明的佔位元素，與圖標大小相同 */}
    </div>
    <h2 className="flex justify-center text-center text-6xl font-bold text-slate-50 text-shadow-lg" 
    style={{ textShadow: '4px 4px 4px rgba(0, 0, 1, 0.5)' }}>
    Posts
    </h2>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSekCkEwOXJt32iBUyAYhmC3Rg__daP1vZS99_9vMaHjrxXRvw/viewform?pli=1" target="_blank" rel="noopener noreferrer">
    <img src={googleForm} alt="More" className=" ml-10 mr-20 w-20 h-25 hover:scale-110 hover:bg-purple-500 hover:shadow-lg transition transform duration-300 ease-in-out"/>
    <p className=" responsive-formText ml-8 mt-3  font-bold text-slate-900  text-shadow">後測問卷 </p>
     </a>
  
  </div>
    {randomPosts.map((post, index) => (
      <div key={index} className="flex flex-col gap-2 border border-gray-300 p-4 rounded hover:bg-blue-100 hover:shadow-xl transition ease-in-out duration-300" style={{ animation: 'fadeIn 0.5s' }}>
        <h2 className="font-bold text-3xl mb-3 text-teal-400 hover:text-blue-800">{post.title}</h2>
        <p className=" font-bold text-xl text-slate-950 mb-4 ">{post.description}</p>
        <div>
          {post.image && <img src={post.image} alt="Post" className="w-full h-auto rounded transition-transform duration-300 hover:scale-105" />}
          {post.video && (
      <div>
        {post.video.includes("youtube") ? (
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${post.video.split('v=')[1]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video src={post.video} controls className="w-full rounded transition-transform duration-300 hover:scale-105" />
        )}
      
      </div>
      )}
       </div>
       </div>
    ))}
 

</div>
</div>

  );
  
  
}

export default PostsPage;