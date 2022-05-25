// 저장된 인용 랜덤하게 불러오기

const quotes = [
  {
    quote: `숨을 쉬어 아니면 꿈을 꿔
지금 심장박동에 맞춰 다시 노를 저어`,
    song: `Intro : 화양연화`,
  },
  {
    quote: `이 시간 뒤에 어떤 라벨이 붙건
      부디 그게 전부 너길 바래`,
    song: `병`,
  },
  {
    quote: `Dear myself 넌 절대로 너의 온도를 잃지 마
  따뜻히도 차갑게도 될 필요 없으니까`,
    song: `Intro : Persona`,
  },
  {
    quote: `그래도 이 하루가 끝나잖아
  초침과 분침이 겹칠 때 
  세상은 아주 잠깐 숨을 참아`,
    song: `00:00`,
  },
  {
    quote: `믿는 대로 가는 대로
  운명이 됐고 중심이 됐어`,
    song: `Outro : Ego`,
  },
  {
    quote: `너 땜에 알았어
    왜 사람과 사랑이 비슷한 소리가 나는지
  You make live to a love`,
    song: `Trivia 承 : Love`,
  },
  {
    quote: `I'm the one I should love in this world
  빛나는 나를 소중한 내 영혼을 
  이제야 깨달아 so I love me`,
    song: `Epiphany`,
  },
  {
    quote: `내 실수로 생긴 흉터까지 다 내 별자린데`,
    song: `Answer : Love Myself`,
  },
  {
    quote: `You gave me the best of me
  So you'll give you the best of you`,
    song: `Magic Shop`,
  },
  {
    quote: `날 널 믿어 지금은 미약할지언정
  끝은 창대한 비약일 걸`,
    song: `Outro : Wings`,
  },
  {
    quote: `누구의 가시들이 모여 펼쳐진 장관이
  분명 누군간 너의 가시를 보며 위로받겠지 
  우린 서로의 야경, 서로의 달`,
    song: `Moonchild`,
  },
  {
    quote: `사람도 아픔도 언젠가는 죽기에
  무뎌지려면 바람을 맞아야 하잖아
  꿈 속에서는 영원할 수가 없잖아`,
    song: `지나가`,
  },
  {
    quote: `꿈은 옵션이 된 그런 세상인데
  정답은 없어 그게 정답이야`,
    song: `이상하지 않은가`,
  },
];

const quote = document.querySelector("#quote span:first-child");
const song = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
song.innerText = `

< ${todaysQuote.song} >`;
