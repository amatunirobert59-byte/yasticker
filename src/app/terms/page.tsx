export default function TermsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>Пользовательское соглашение</h1>

      <p style={{ marginTop: "20px", opacity: 0.8 }}>
        Используя сайт ЯСтикер, вы соглашаетесь с правилами сервиса.
      </p>

      <p style={{ marginTop: "20px", opacity: 0.8 }}>
        Запрещено копирование материалов сайта без разрешения.
      </p>

      <p style={{ marginTop: "20px", opacity: 0.8 }}>
        Администрация имеет право изменять функционал сайта.
      </p>

      <p style={{ marginTop: "20px", opacity: 0.8 }}>
        ИНН: 760405915638
      </p>
    </main>
  )
}