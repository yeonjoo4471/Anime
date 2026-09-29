import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { filters, products } from './products'

const banners = [
  { image: '/Anime/img/banner1.jpg', alt: '블리치 룩업 피규어 컬렉션' },
  { image: '/Anime/img/banner2.jpg', alt: '나루토 메가캣 프로젝트 컬렉션' },
  { image: '/Anime/img/banner3.jpg', alt: '사이키 쿠스오의 재난 룩업 컬렉션' },
  { image: '/Anime/img/banner4.jpg', alt: '괴수 8호 나루미 겐 룩업 컬렉션' },
  { image: '/Anime/img/banner5.jpg', alt: '헌터×헌터 룩업 컬렉션' },
]

const ITEMS_PER_PAGE = 16

const Sub1 = () => {
  const location = useLocation()
  const requestedSeries = new URLSearchParams(location.search).get('series')
  const [activeFilter, setActiveFilter] = useState(filters.includes(requestedSeries) ? requestedSeries : '전체')
  const [currentPage, setCurrentPage] = useState(1)
  const catalogRef = useRef(null)

  useEffect(() => {
    setActiveFilter(filters.includes(requestedSeries) ? requestedSeries : '전체')
    setCurrentPage(1)
  }, [requestedSeries])

  const filteredProducts = activeFilter === '전체' ? products : products.filter((product) => product.series === activeFilter)
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const visibleProducts = filteredProducts.slice(firstItemIndex, firstItemIndex + ITEMS_PER_PAGE)

  const selectFilter = (filter) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  const goToPage = (page) => {
    setCurrentPage(page)
    catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="goods-page">
      <section className="goods-banner" aria-label="추천 굿즈 배너">
        <Swiper
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={850}
          modules={[Autoplay, Pagination]}
          className="bannerSwiper">

          {banners.map((banner) => (
            <SwiperSlide key={banner.image}>
              <img src={banner.image} alt={banner.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="goods-catalog" aria-labelledby="goods-title" ref={catalogRef}>
        <div className="goods-title-row">
          <div>
            <p className="kicker">ANIME GOODS MENU</p>
            <h1 id="goods-title">굿즈 목록</h1>
          </div>
          <p>
            은혼부터 블리치, 나루토, 주술회전까지 작품별 캐릭터 굿즈를 모았습니다.
          </p>
        </div>

        <div className="catalog-toolbar">
          <div className="filters" aria-label="작품별 필터">
            {filters.map((filter) => (
              <button className={activeFilter === filter ? 'active' : ''} type="button" onClick={() => selectFilter(filter)} key={filter}>
                {filter}
              </button>
            ))}
          </div>
          <p>
            총 <strong>{filteredProducts.length}</strong>개의 굿즈
          </p>
        </div>

        <div className="product-grid" aria-live="polite">
          {visibleProducts.map((product) => (
            <Link className="product-card" to={`/goods/${product.id}`} aria-label={`${product.name} 상세 보기`} key={product.id}>
              <div className="product-card__image">
                <img src={product.image} alt={product.name} />
                <span>{String(product.id).padStart(2, '0')}</span>
              </div>
              <div className="product-card__info">
                <p>{product.series}</p>
                <h2>{product.name}</h2>
                <strong>{product.price}</strong>
                <span>상세 보기</span>
              </div>
            </Link>
          ))}
        </div>

        <nav className="catalog-pagination" aria-label="상품 목록 페이지">
          <button type="button" aria-label="이전 페이지" disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>‹</button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button className={currentPage === page ? 'active' : ''} type="button" aria-label={`${page}페이지`} aria-current={currentPage === page ? 'page' : undefined} onClick={() => goToPage(page)} key={page}>
              {page}
            </button>
          ))}
          <button type="button" aria-label="다음 페이지" disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>›</button>
        </nav>
      </section>
    </main>
  )
}

export default Sub1
