import React from 'react';

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {backgroundColor: "#fff", transitionDuration: "1s"}
    };
    this.rgb = 'rgb(255, 255, 255)';
  }

  getValue = (e) => {
    this.setState(() => ({ value: e }))
  }
  
  render() {
    const { value } = this.state;
    
    const handleSubmit = e => {
      e.preventDefault();
      e.target.reset();
    }
    
    const handleNameChange = ({target}) => {
      const currentValue = target.value;
      if (currentValue.length === 7 && currentValue[0] === '#') {
        const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f'];
        const valueArr = currentValue.split('');
        valueArr.splice(0, 1);

        const valueArrHEX = [currentValue.substring(1, 3), currentValue.substring(3, 5), currentValue.substring(5, 7)];
        
        function hexToDec(hex) {
          let result = 0;
          let digitValue;
          hex = hex.toLowerCase();
          for (let i = 0; i < hex.length; i++) {
            digitValue = '0123456789abcdef'.indexOf(hex[i]);
            result = result * 16 + digitValue;
          }
          return result;
        }

        const result = valueArr.every(a => a === arr.find(arg => arg === a));
        if (result) {
          this.getValue({backgroundColor: String(currentValue), transitionDuration: "1s"});
          this.rgb = `rgb(${hexToDec(valueArrHEX[0])}, ${hexToDec(valueArrHEX[1])}, ${hexToDec(valueArrHEX[2])})`;
        }
        else {
          this.getValue({backgroundColor: "red", transitionDuration: "1s"});
          this.rgb = "Ошибка!";
        }
      }
    }

    return (
      <div className="wrapper__form" style={value}>
        <form onSubmit={handleSubmit}>
          <label>
            <input className="input" type="text" name="name" placeholder="Введите цвет в HEX" onChange={handleNameChange} />
          </label>
          <div className="block__span" style={value}>
            <span className="span">{this.rgb}</span>
          </div>
        </form>
      </div>
    )
  }
}

export default Colors;
    