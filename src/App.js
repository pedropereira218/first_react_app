//! import logo from './logo.svg';
import './App.css';

function NavBar({items}) {
    return (
        <nav className='Nav'>
            <ul>
                {items.map(item => (
                    <li key={item}> {item} </li>
                ))}
            </ul>
        </nav>
    )
}
function App() {
    return (
        <div className="App">
            <NavBar items={["Home", "About", "Contact", "Home", "About", "Contact", "Home", "About", "Contact", ]} />
            <h1>My First React App</h1>
        </div>
    )
}

export default App;
