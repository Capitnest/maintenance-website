import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/logo.png"
            style={{ height: "50px", marginTop: "23px", marginRight: "7px" }}
          />
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgb(4, 182, 129)",
              fontSize: "38px",
              fontWeight: "600",
            }}
          >
            Capitnest
          </h1>
        </div>

        <p>
          Capitnest is under maintenance. We are working hard for the release of
          Capitnest Beta :)
          <br />
          <br />
          Until we get the website back running you can check our social media
          or join our discord server.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <a
            href="https://instagram.com/capitnest"
            target="_blank"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            <img src="/instagram.png" height="30px" />
          </a>
          <a
            href="https://twitter.com/thecapitnest"
            target="_blank"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            <img src="/twitter.png" height="30px" />
          </a>
          <a
            href="https://discord.gg/RzyXARrBUw"
            target="_blank"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            <img src="/discord.png" height="30px" />
          </a>
          <a
            href="https://github.com/capitnest"
            target="_blank"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            <img src="/github.png" height="30px" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
