import ChatApp from "./components/ChatApp"

function App() {

  return (
    <>
      <div className="curve-1"></div>

      <div className="container">
        <div className="content">

          <div className="phone">
            <ChatApp />
          </div>

          <div className="description">
            <h1 className="title">Simple booking</h1>
            <p className="paragraph">Stay in touch with our dog walkers through the chat interface. This makes it easy to
              discuss arrangements and make bookings. Once the walk has been completed you can rate
              your walker and book again all through the chat.</p>
          </div>
        </div>
      </div>

      <div className="curve-2"></div>

    </>
  )
}

export default App
