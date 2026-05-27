export default function Home() {
  return (
    <main className="site">

      {/* HERO */}

      <section className="hero">

        <div className="bg"></div>

        <h1>ЯСтикер</h1>

        <p>
          Премиальный магазин стикеров
        </p>

        <div className="heroButtons">

          <a
            href="#catalog"
            className="btn primary"
          >
            Каталог
          </a>

          <a
            href="https://t.me/Robirto1234"
            target="_blank"
            className="btn secondary"
          >
            Telegram
          </a>

        </div>

      </section>

      {/* SEARCH */}

      <section className="searchSection">

        <input
          type="text"
          placeholder="Поиск товаров..."
          className="search"
        />

      </section>

      {/* PRODUCTS */}

      <section
        className="catalog"
        id="catalog"
      >

        {/* CARD 1 */}

        <div className="card">

          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200"
            alt=""
          />

          <div className="cardBody">

            <h3>Anime Sticker Pack</h3>

            <div className="priceBox">

              <span className="oldPrice">
                500 ₽
              </span>

              <span className="price">
                350 ₽
              </span>

            </div>

            <div className="actions">

              <button className="cartBtn">
                В корзину
              </button>

              <a
                href="https://t.me/Robirto1234"
                target="_blank"
                className="buyBtn"
              >
                Купить
              </a>

            </div>

          </div>

        </div>

        {/* CARD 2 */}

        <div className="card">

          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200"
            alt=""
          />

          <div className="cardBody">

            <h3>Gaming Sticker Set</h3>

            <div className="priceBox">

              <span className="oldPrice">
                900 ₽
              </span>

              <span className="price">
                700 ₽
              </span>

            </div>

            <div className="actions">

              <button className="cartBtn">
                В корзину
              </button>

              <a
                href="https://t.me/Robirto1234"
                target="_blank"
                className="buyBtn"
              >
                Купить
              </a>

            </div>

          </div>

        </div>

        {/* CARD 3 */}

        <div className="card">

          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200"
            alt=""
          />

          <div className="cardBody">

            <h3>Premium Holographic Pack</h3>

            <div className="priceBox">

              <span className="oldPrice">
                1200 ₽
              </span>

              <span className="price">
                850 ₽
              </span>

            </div>

            <div className="actions">

              <button className="cartBtn">
                В корзину
              </button>

              <a
                href="https://t.me/Robirto1234"
                target="_blank"
                className="buyBtn"
              >
                Купить
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* TELEGRAM */}

      <footer className="footer">

        <p>
          Все эксклюзивные предложения
          в нашем телеграм-канале
        </p>

        <a
          href="https://t.me/Ystickmos"
          target="_blank"
        >
          t.me/Ystickmos
        </a>

      </footer>

    </main>
  )
}