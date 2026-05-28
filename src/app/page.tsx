import { supabase } from "@/lib/supabase"
import UploadProduct from "@/components/UploadProduct"

export default async function Home() {

  const { data, error } = await supabase
    .from("products")
    .select("*")

  if (error) {
    console.log(error)
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "40px",
          color: "#ffb300"
        }}
      >
        ЯСтикер
      </h1>

      <UploadProduct />

      {!data || data.length === 0 ? (

        <div
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px"
          }}
        >
          <h2>Товаров пока нет</h2>

          <p>
            Добавь товары в Supabase
          </p>
        </div>

      ) : (

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px"
          }}
        >

          {data.map((product: any) => (

            <div
              key={product.id}
              style={{
                background: "#111",
                borderRadius: "24px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,.08)"
              }}
            >

              {product.image && (

                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "18px",
                    marginBottom: "20px"
                  }}
                />

              )}

              <h2>{product.title}</h2>

              <p>{product.description}</p>

              <h3
                style={{
                  color: "#ffb300",
                  marginTop: "20px"
                }}
              >
                {product.price} ₽
              </h3>

            </div>

          ))}

        </div>

      )}

    </main>
  )
}