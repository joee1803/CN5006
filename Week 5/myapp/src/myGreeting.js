import './App.css';

function GreetingElement(){
    const greeting = "Welcome to Your First Component. This is how it works!";

    return (
    <div className = 'app'>
        <h1>{greeting}</h1>
    </div>
    );
}

export default GreetingElement;