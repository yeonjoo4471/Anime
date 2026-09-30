import { Link } from 'react-router-dom'

const BASE_URL = import.meta.env.BASE_URL

const series = [
  { 
    name: '은혼', 
    english: 'GINTAMA', 
    image: `${BASE_URL}img/button_img1.webp`, 
    count: '11' 
  },

  { 
    name: '블리치', 
    english: 'BLEACH', 
    image: `${BASE_URL}img/button_img2.jpg`, 
    count: '07' 
  },

  { 
    name: '나루토', 
    english: 'NARUTO', 
    image: `${BASE_URL}img/button_img3.webp`, 
    count: '08' 
  },

  { 
    name: '주술회전', 
    english: 'JUJUTSU KAISEN', 
    image: `${BASE_URL}img/button_img4.webp`, 
    count: '04' 
  },

  { 
    name: '귀멸의 칼날', 
    english: 'DEMON SLAYER', 
    image: `${BASE_URL}img/button_img5.webp`, 
    count: '13' 
  },

  { 
    name: '진격의 거인', 
    english: 'ATTACK ON TITAN', 
    image: `${BASE_URL}img/button_img6.webp`, 
    count: '04' 
  },

  { 
    name: '사이키 쿠스오의 재난', 
    english: 'THE DISASTROUS LIFE OF SAIKI K.', 
    image: `${BASE_URL}img/button_img7.webp`, 
    count: '03' 
  },
]

const Home = () => {
  return (
    <main>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero__copy">
          <p className="kicker kicker--light">
            ANIME GOODS COLLECTION
          </p>
          <h1 id="hero-title">
            좋아하는<br />작품을<br /><em>한곳에서.</em>
          </h1>
          <p>
            은혼부터 귀멸의 칼날, 진격의 거인까지<br />다양한 애니메이션 굿즈를 모았습니다.<br />작품별로 천천히 둘러보고 마음에 드는 컬렉션을 찾아보세요.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" to="/goods">전체 굿즈 보기</Link>
            <Link className="line-link line-link--light" to="/?section=series">작품별로 보기</Link>
          </div>
        </div>

        <div className="hero-collage" aria-label="다양한 애니메이션 굿즈 미리보기">
          <figure className="hero-tile hero-tile--wide">
            <img src={`${BASE_URL}img/button_img1.webp`} alt="은혼 캐릭터 굿즈" />
            <figcaption>GINTAMA</figcaption>
          </figure>
          <figure className="hero-tile">
            <img src={`${BASE_URL}img/button_img2.jpg`} alt="블리치 캐릭터 굿즈" />
            <figcaption>BLEACH</figcaption>
          </figure>
          <figure className="hero-tile">
            <img src={`${BASE_URL}img/button_img3.webp`} alt="나루토 캐릭터 굿즈" />
            <figcaption>NARUTO</figcaption>
          </figure>
          <figure className="hero-tile hero-tile--wide">
            <img src={`${BASE_URL}img/button_img4.webp`} alt="주술회전 캐릭터 굿즈" />
            <figcaption>JUJUTSU KAISEN</figcaption>
          </figure>
          <span className="hero-count">
            <strong>50</strong> GOODS<br /><strong>07</strong> SERIES
          </span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>GINTAMA</span>
          <i>✦</i>
          <span>BLEACH</span>
          <i>✦</i>
          <span>NARUTO</span>
          <i>✦</i>
          <span>JUJUTSU KAISEN</span>
          <i>✦</i>
          <span>DEMON SLAYER</span>
          <i>✦</i>
          <span>ATTACK ON TITAN</span>
          <i>✦</i>
          <span>SAIKI K.</span>
        </div>
      </div>

      <section className="series-section" id="series" aria-labelledby="series-title">
        <div className="section-heading">
          <div>
            <p className="kicker">SELECT BY SERIES</p>
            <h2 id="series-title">어떤 작품을<br />좋아하세요?</h2>
          </div>
          <p>
            작품마다 다른 매력을 담은 피규어와 캐릭터 굿즈를 한눈에 확인해 보세요.
          </p>
        </div>

        <div className="series-grid">
          {series.map((item, index) => (
            <Link className="series-card" to={`/goods?series=${encodeURIComponent(item.name)}`} key={item.name}>
              <div className="series-card__image">
                <img src={item.image} alt={`${item.name} 굿즈`} />
              </div>
              <div className="series-card__meta">
                <span>0{index + 1}</span>
                <span>{item.count} ITEMS</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.english}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="spotlight" aria-labelledby="spotlight-title">
        <div className="spotlight__image">
          <img src={`${BASE_URL}img/banner1.jpg`} alt="블리치 룩업 피규어 배너" />
        </div>
        <div className="spotlight__copy">
          <p className="kicker kicker--light">
            THIS WEEK'S SPOTLIGHT
          </p>
          <h2 id="spotlight-title">
            이번 주<br />추천 컬렉션
          </h2>
          <p>
            익숙한 캐릭터를 새로운 모습으로 만나는 즐거움.<br />블리치 룩업 시리즈와 다양한 작품의 굿즈를 확인해 보세요.
          </p>
          <Link className="button button-light" to="/goods?series=블리치">블리치 굿즈 보기</Link>
        </div>
      </section>

      <section className="home-cta">
        <p className="kicker">
          ALL YOUR FAVORITES
        </p>
        <h2>
          최애 굿즈를<br />찾아볼까요?
        </h2>
        <Link className="button button-primary" to="/goods">굿즈 목록 바로가기</Link>
      </section>
    </main>
  )
}

export default Home
