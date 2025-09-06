function counter() {
    let count=0;
    const increment=()=>{
        count++;
    }
    const decrement=()=>{
        count--;
    }
    const reset=()=>{
        count=0;
    }
  return (
    <div style={{
        justifyItems: "center",
    }}>
      <h1>Counter</h1>
        <h2>{count}</h2>
        <button style={{backgroundColor:"red",
        }} onClick={increment}>+</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>-</button>
    </div>
  );
}
export default counter;