const RootComponent = () => {
  const [ count, setCount ] = React.useState(0);
  return (
    <div>
      <GreetingComponent textColor="red" />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById("root"));
