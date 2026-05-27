import { supabase } from "@/lib/supabase"

export default async function Home() {

  const { data, error } = await supabase
    .from("products")
    .select("*")

  console.log(data)

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px"
      }}
    >

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "30px"
        }}
      >
        ЯСтикер
      </h1>

      {data?.map((product: any) => (
        <div
          key={product.id}
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px"
          }}
        >
          <h2>{product.title}</h2>

          <p>{product.description}</p>

          <h3>{product.price} ₽</h3>
        </div>
      ))}

    </main>
  )
}