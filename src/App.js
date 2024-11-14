import { useState } from 'react';
import './App.css';

// Define components


function NavBar({ items, onItemSelect }) {
    return (
        <nav className=''>
            <ul>
                {/* Set which item is active on click*/}
                {items.map(item => (
                    <li onClick={() => onItemSelect(item)} key={item}> {item} </li>
                ))}
            </ul>
        </nav>
    );
}

function Home() {
    return <div>
        <h1>Home</h1>
        <img class="w-16 md:w-32 lg:w-48" src="https://placehold.co/600x400" alt='Placeholder'></img>
    </div>;
}

function About() {
    return <div>
            <h1>About</h1>
    </div>;
}

function Contact() {
    return <div>
        <h1>Contact</h1>
    </div>;
}

// Combine components to create our App
function App() {
    const [activeItem, setActiveItem] = useState("Home");

    return (
        <div className="App">
            <NavBar
                items={["Home", "About", "Contact"]}
                onItemSelect={setActiveItem}
            />
            {/* Render the component based on the active item */}
            {activeItem === "Home" && <Home  />}
            {activeItem === "About" && <About  />}
            {activeItem === "Contact" && <Contact  />}
        </div>
    );
}

// Export the App component so it can be used in index.js
export default App;
