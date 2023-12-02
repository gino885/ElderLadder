import React, { useState,useEffect } from 'react';
import './animations.css';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const googleForm = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/googleForm.png";
const posts = [
  {
    title: '我與銀髮的互動_料理篇 - 許雁婷',
    description: [
      { text:'與長輩開啟對話三撇步：', bold: "true", size: '25px'},
      { text:'1. 展現積極的學習態度', bold: "true", size:'22px'},
      { text:'2. 勇於發問', bold: "true", size:'22px'},
      { text:'3. 勇敢嘗試', bold: "true", size:'22px'},
      { text:'印象中許多童年美好的回憶都是在外公外婆家渡過的。 但是，長大後的呢？ 一直追逐著升學的目標，國中考高中，高中考大學，不知不覺我20歲了，是時候該更新幸福回憶的庫存了！ 外公外婆家有田有山有一身絕學本領，那就是製作米食點心的專家！舉凡紅龜粿、芋粿、蘿蔔糕、菜頭粿通通包在他們身上！ 由於我喜歡吃，再加上外公外婆時常製作這些美味點心，所以發想了此Prototype 讓我與他們能夠有更多互動，創造更多美好的回憶。', bold: "false", size:'20px'}
                ],
    video: 'https://www.youtube.com/watch?v=R10wNqi9Bb0', 
  },
  {
    title: '青銀下半場 — 陪伴是最長情的告白 - 陳柏駿',
    description:  [
      { text:'與長輩對話的天龍三步：', bold: "true", size:'25px'},
      { text:'1. 展現積極的學習態度', bold: "true", size:'22px'},
      { text:'2. 勇於發問', bold: "true", size:'22px'},
      { text:'3. 勇敢嘗試', bold: "true", size:'22px'},
      { text:'記得小時候，阿嬤是我的超級英雄，無論是做最好吃的點心、帶我上下學，還是給予無微不至的關懷。現在，轉眼間，我們長大了，這段關係走到了下半場，阿嬤的記憶逐漸模糊，甚至有時會認不得眼前站著的那位，是他的孫子，但正是這個時候，超人下崗了，換成青輩的我們要好好陪伴他們，用愛續寫我們的故事，用最純真的心，最耐心的陪伴，證明愛是不會隨著時間流逝而消失的。或許我們不能成為他們的超人，但，或許，他們也不希望我們如此，辛苦撐起幾十年的保護傘正是希望底下愛護的人不需這般辛勞，在他們眼裡，我們不需要頂天立地，只需要好好地陪伴在他們身邊— 陪伴，就是最長情的告白。', bold: "false", size: '20px'}
                ],
    video: 'https://www.youtube.com/watch?v=-Wi5va176rk', 
  },
  {
    title: '奶奶與我_透過傳承延續兒時記憶 - 盧易駿',
    description: [
      { text:'三步幫你打開長輩話匣子：', bold: "true", size:'25px'},
      { text:'1. 勇於開口', bold: "true", size:'22px'},
      { text:'2. 循循善誘', bold: "true", size:'22px'},
      { text:'3. 實際執行 ＆ 未來期許', bold: "true", size:'22px'},
      { text:'藉由這個寶貴的機會來和長輩學習技藝，在練習的過程中逐漸也與小時候的記憶有所串聯。孩提時候的我是與奶奶一起生活的，因此與奶奶很親。不過之後搬回去和父母住之後就變成只有定期會去探望奶奶而已，不復以往的親密，聊天的內容也只剩茶餘飯後的一般閒聊。但在和奶奶一起削竹筍的過程中，我們彷彿又回到了從前一樣，有更多互動，無形之中又拉近了彼此的距離。只不過奶奶年紀變大了，我也不是當初那個懵懂無知的小孩了，讓我感到光陰似箭歲月如梭，也決定以後要更加把握與奶奶相處的時光。', bold: "false", size: '20px'}
                ],
     video: 'https://www.youtube.com/watch?v=AeFlFYhyL_I', 
  },
  {
    title: '手做從前—我們的技藝 - 魏妤庭',
    description: [
      { text:'和長輩從靜謐到閨蜜的教戰手則：', bold: "true", size:'25px'},
      { text:'1. 找個舒服的位子，保持平視', bold: "true", size:'22px'},
      { text:'2. 多點頭及微笑', bold: "true", size:'22px'},
      { text:'3. 如果話題歪了，或是不喜歡這個問題，隨意指個東西，問爺爺奶奶這是怎麼來的', bold: "true", size:'22px'},
      { text:'4. 把自己學到的成果展現給爺爺奶奶', bold: "true", size:'22px'},
      { text:'5. 盡情度過幸福的時光吧', bold: "true", size:'22px'},
      { text:'✱ 偷偷說，願意撒嬌的話會發現爺爺奶奶會很順著自己喔', bold: "true", size:'22px'},
      { text:'我的外婆曾經經營麵店很長一段時間，直到現在我吃到外面的餛飩麵還是不大習慣，對外婆好吃又經濟實惠的餛飩麵念念不忘。但外婆漸漸老了，站不動了。我也就很久沒吃過外婆做的餛飩麵了。或許這是在提醒我，現在該是換我動手做東西給我們吃啦!藉由此次活動，我決定向外婆學習包餛飩的技藝，加以傳承，並與大家分享我從中得到的快樂。', bold: "false", size: '20px'}
                ],
    images: ['https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/1.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/2.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/3.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/4.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/5.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/6.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/7.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/8.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/9.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/10.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/11.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/12.png',
              'https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/5-3/13.png'],
  },
  {
    title: '一針一線拉近與外婆的關係 - 鄭羽伶',
    description: [ 
    { text:'三步讓你再靠近一點點：', bold: "true", size:'25px'},
    { text:'1. 聆聽', bold: "true", size:'22px'},
    { text:'2. 正向回饋', bold: "true", size:'22px'},
    { text:'3. 陪伴', bold: "true", size:'22px'},
    { text: '從以前就知道媽媽厲害的縫紉技巧是來自外婆的指導！印象中在國小二年級時，為了完成寒假作業而寄宿在外婆家，讓外婆教我如何縫出縮小版的衣物（a.k.a.代替我做作業），似乎也種下了我對縫紉抱持熱忱和興趣的契機。升上大學後，忙碌讓我不再有時間能夠與外婆見面，曾經很要好的我們，現在卻逐漸只能從媽媽的口中了解他的近況。想到外婆因為老花而放下的縫紉，希望可以傳承他的絕活，也再次拉近彼此的關係。', bold: 'false', size:'20px'}
    ],
    image: 'path/to/image2.jpg', 
  },
  {
    title: '說書人的回憶-我與阿公的故事延續 - 查展平',
    description: [
     { text:'三步帶你走進長輩的世界：', bold: "true", size:'25px'},
    { text:'1. 探索話題', bold: "true", size:'22px'},
    { text:'2. 引導深入與聆聽', bold: "true", size:'22px'},
    { text:'3. 陪伴', bold: "true", size:'22px'},
    { text: '小時候第一次看到阿公，便有些害怕他嚴肅的長相與不苟言笑的沉默，一直以來我與他交談內容都只有兩句話 : 「阿公好」「阿公再見」，我以為我們的交集大概一輩子就停在這裡了。在阿罵過世以後，兩個人共同度過的痕跡都成為一個人被遺留下來的孤獨，我也從那時起開始經常回去陪伴他，還記得他說 :生活沒什麼變啦我很好，不用一直來。但每次過去的時候他其實都很開心，我們也多了很多貼近的時間，像是中斷已久的故事重新開始連載一般，我開始慢慢了解他的世界，並在不知不覺間成為了世界裡的一部分，感謝這次機會，讓我們的互動能被記錄下來。我不知道甚麼是好的互動模式，也不知道怎麼樣才能拍攝得讓人更能與長輩溝通，我只是把我們的日常記錄下來，讓故事延續下去。', bold: "false", size: '20px'},
    ],
    image: 'path/to/image2.jpg', 
  },
  {
    title: '上次和長輩深度談話是什麼時候？ - 金維珊',
    description: [ 
    { text:'和諧相處準則：', bold: "true", size:'25px'},
    { text:'1. 輕鬆聊天的愉悅心態', bold: "true", size:'22px'},
    { text:'2. 注意禮貌', bold: "true", size:'22px'},
    { text:'3. 多問對方想法，多讓對方說話', bold: "true", size:'22px'},
    { text:'4. 溝通目的是理解，不是找標準答案', bold: "true", size:'22px'},
    {text: '我和媽媽、媽媽和外婆的關係皆屬於非常親密，不只是過年過節相聚，儘管平時不住一起，也有時常保持聯繫的習慣。然而時常因生活中大小瑣事而忽略了深度價值觀交流的時刻，藉由本次機會和媽媽聊聊「價值觀」、「習慣」相關的話題，實為難得。從這次的訪談，發現原本以為是「禁忌話題」的事，其實在氣氛好、心平氣和、抱有好奇心的心態下談心，都是有機會讓雙方「互相理解」的。本次經驗亦使我體認，世代間因為大環境的改變有思想上的差異是理所當然的，有如祖父母輩和父母也有差別，日後我們與後代也有差別（想像要和出生於有 Chat GPT 的後代共處），所以時常「溝通」是必須的，目的不見得是消弭差距，更為重要的是因理解而更能好好維護親子、青銀關係。', bold: "false", size: '20px'},
  ],
    image: 'path/to/image2.jpg', 
  },
];

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", fontSize: "30px" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", fontSize: "30px" }}
      onClick={onClick}
    />
  );
}

function PostsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />
  };


  const [randomPosts, setRandomPosts] = useState([]);
useEffect(() => {
  const shuffledPosts = [...posts].sort(() => 0.5 - Math.random());
  setRandomPosts(shuffledPosts);
}, []); 

  
  return (
    
    <div className=' responsive-border' style={{ backgroundSize: 'cover', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
  <div className=" grid grid-cols-1 grid-rows-7 gap-5 p-4 mx-auto" style={{  borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
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
        {post.description.map((item, idx) => (
            <p key={idx} style={{ fontWeight: item.bold ? 'bold' : 'normal', fontSize: item.size }}>
              {item.text}
            </p>
        ))}
        <div>
        {post.images && Array.isArray(post.images) && (
        <Slider {...settings}>
        {post.images.map((image, index) => (
        <div key={index}>
        <img src={image} alt={`Post ${index}`} className=" w-auto h-auto rounded" />
        </div>
         ))}
  </Slider>
           )}
           {post.video && (
      <div>
         <div className="video-container">
        {post.video.includes("youtube") ? (
          <iframe
            width="600"
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