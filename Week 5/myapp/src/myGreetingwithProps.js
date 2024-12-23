import './App.css';

function GreetingElementwithProps(props){
    return (
    <div className = 'app'>
        <h1>{props.message}</h1>
    </div>
    );
}

export default GreetingElementwithProps;