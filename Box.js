import './ShowBox.css';
const Box =()=>{
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    return(
        <div className="App">
        <div className="slide-show horizontal">
          {colors.map((color, i) => (
            <div
              key={i}
              className="box"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        <div className="slide-show vertical">
          {colors.map((color, i) => (
            <div
              key={i}
              className="box"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    );
};
export default Box;