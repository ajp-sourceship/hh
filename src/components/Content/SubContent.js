import { useEffect, useState } from "react";

export const SubContent = (props) => {
  const [colorPallet, setColorPallet] = useState([]);

  useEffect(() => {
    
    let temp = []
    for (let index = 1; index < 6; index++) {
      let ret = props.selectedColor.hexString;
      let rgbastring = convertHexToRGBA(ret, index/10)

      temp.push(rgbastring)
      temp.reverse()
    }
    setColorPallet(temp)
  }, [props.selectedColor]);

  const convertHexToRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');
    
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }    
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 1})`;
};

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <div
        style={{
          display: "flex",
          flex: 5,
        }}
      >
        {colorPallet.map((rgba) => {
          console.log(rgba)
          return <div
            style={{
              backgroundColor: "white",
              width: "10%",
              height: "60%",
              borderColor: "black",
              borderWidth: 2,
              borderStyle: "solid",
              borderRadius: 8,
              marginLeft:20,
              marginRight:20
            }}
          >
            <div
              style={{
                backgroundColor: rgba,
                height: "90%",
              }}
            ></div>
            <h1 style={{ margin: 10, fontFamily: "Roboto Condensed" }}>
              {props.selectedColor.hexString}
            </h1>
          </div>;
        })}
      </div>
    </div>
  );
};
