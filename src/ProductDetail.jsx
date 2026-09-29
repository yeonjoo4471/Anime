import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { products } from './products'

const ProductDetail = () => {
  const { id } = useParams()
  const [showMessage, setShowMessage] = useState(false)
  const product = products.find((item) => item.id === Number(id))

  if (!product) return <Navigate to="/goods" replace />

  return (
    <main className="product-detail-page">
      <nav className="detail-breadcrumb" aria-label="현재 위치">
        <Link to="/goods">GOODS</Link>
        <span>/</span>
        <span>{product.series}</span>
      </nav>

      <section className="product-detail" aria-labelledby="product-title">
        <div className="product-detail__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail__info">
          <p className="kicker">
            {product.series} · FIGURE COLLECTION
          </p>
          <h1 id="product-title">
            {product.name}
          </h1>
          <p className="product-detail__description">
            {product.description}
          </p>

          <dl className="product-specs">
            <div>
              <dt>상품 번호</dt>
              <dd>ANI-{String(product.id).padStart(3, '0')}</dd>
            </div>
            <div>
              <dt>구성</dt>
              <dd>피규어 본체 · 전용 패키지</dd>
            </div>
            <div>
              <dt>배송</dt>
              <dd>결제 후 2–4일 이내 출고</dd>
            </div>
          </dl>

          <div className="product-purchase">
            <strong>{product.price}</strong>
            <button type="button" onClick={() => setShowMessage(true)}>
              구매하기
            </button>
          </div>
          {showMessage && <p className="purchase-message" role="status">현재는 포트폴리오용 페이지로 실제 구매는 진행되지 않습니다.</p>}
          <Link className="detail-back" to="/goods">굿즈 목록으로 돌아가기</Link>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
