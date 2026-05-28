"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function UploadProduct() {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const uploadImage = async (e: any) => {

    const file = e.target.files[0]

    if (!file) return

    const fileName = `products/${Date.now()}-${file.name}`

    const { data, error } = await supabase.storage
      .from("products")
      .upload(fileName, file)

    if (error) {
      console.log(error)
      alert("Ошибка загрузки")
      return
    }

    const { data: imageData } = supabase.storage
      .from("products")
      .getPublicUrl(fileName)

    setImage(imageData.publicUrl)

    alert("Фото загружено")
  }

  const addProduct = async () => {

    const { error } = await supabase
      .from("products")
      .insert({
        title,
        price,
        image
      })

    if (error) {
      console.log(error)
      alert("Ошибка")
      return
    }

    alert("Товар добавлен")
  }

  return (
    <div
      style={{
        background: "#111",
        padding: "30px",
        borderRadius: "20px",
        marginBottom: "40px"
      }}
    >

      <h2>Добавить товар</h2>

      <input
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px"
        }}
      />

      <input
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px"
        }}
      />

      <input
        type="file"
        onChange={uploadImage}
        style={{
          marginTop: "20px"
        }}
      />

      {image && (

        <img
          src={image}
          alt=""
          style={{
            width: "200px",
            marginTop: "20px",
            borderRadius: "20px"
          }}
        />

      )}

      <button
        onClick={addProduct}
        style={{
          marginTop: "20px",
          padding: "14px 20px",
          borderRadius: "12px",
          background: "#ffb300",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Добавить товар
      </button>

    </div>
  )
}