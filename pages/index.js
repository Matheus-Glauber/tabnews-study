function Home() {
  return (
    <div className="container">
      <div className="icon">💰</div>
      <h1>Estamos Construindo Algo Incrível!</h1>
      <p>
        Em breve, dicas e ferramentas para transformar suas finanças pessoais.
      </p>
      <footer>© 2025 Finanças Inteligentes</footer>

      <style jsx>{`
        .container {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #0d3b66, #3f88c5);
          height: 100vh;
          font-family: "Arial", sans-serif;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
        }
        .icon {
          font-size: 5rem;
          margin-bottom: 1rem;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        footer {
          position: absolute;
          bottom: 20px;
          font-size: 0.9rem;
          color: #cce0ff;
        }
      `}</style>
    </div>
  );
}

export default Home;
