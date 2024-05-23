import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];
// pareent
function App() {
  return (
    <div className="container">
      <Header />

      <Menu />
      <Footer />
    </div>
  );
}
// header
function Header() {
  return (
    <header className="header">
      <h1>fast pizz compay</h1>
    </header>
  );
}

// main
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numpizza = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu </h2>

      {numpizza > 0 ? (
        <>
          <p>
            authomatic italian cuisine. 6 craetive dishes to chose from. we are
            the best in what we do ❤️❤️❤️
          </p>

          <ul className="pizzas">
            {pizzas.map((el) => (
              <Pizza elobject={el} key={Pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are working on our menu</p>
      )}
    </main>
  );
}
//  section
function Pizza({ elobject }) {
  console.log(elobject);

  // if (elobject.soldOut) return null;
  return (
    <li className={`pizza ${elobject.soldOut ? "sold-out" : ""}`}>
      <img src={elobject.photoName} alt={elobject.name}></img>
      <div>
        <h3>{elobject.name}</h3>
        <p>{elobject.ingredients}</p>
        {/* {elobject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{elobject.price}</span>
        )} */}
        <span>{elobject.soldOut ? "SOLD OUT" : elobject.price}</span>
      </div>
    </li>
  );
}
// footer

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div>
          <p>We are open until{openHour} :00. Order online now!</p>
        </div>
      ) : (
        <div>
          <p>We are closed {closeHour}: 00. now</p>
        </div>
      )}
      <button className="btn">Order</button>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
