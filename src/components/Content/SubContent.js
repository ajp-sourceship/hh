import { useEffect, useState } from "react";

export const SubContent = (props) => {
  const [colorPallet, setColorPallet] = useState([]);

  useEffect(() => {
    console.log(props.selectedColor);
    if (props.selectedColor.hexString !== "") {
      let temp = [];
      for (let index = 1; index < 6; index++) {
        console.log(index)
        let ret = props.selectedColor.hexString;
        let rgbastring = convertHexToRGBA(ret, index / 10);

        temp.push(rgbastring);
        temp.reverse();
      }
      console.log(temp)
      setColorPallet(temp);
    }
  }, [props.selectedColor.hexString]);

  const convertHexToRGBA = (hexCode, opacity) => {
    //regardless if this effects like thoughts about me
    // id like to point out this hack and the bad practice
    // this shouldnt fire in the useEffect but this if statement was put there
    // the bug is when regreshed the hex code is undefined an it errors
    // didnt originally show up because i was using hot reloading and that prevented the undefienc hex
    // the if statement should not exist
    // oh yeah this part was a git hub snippet - i did not know how to convert hex to rgba before this 
    if (hexCode !== undefined) {
      let hex = hexCode.replace("#", "");

      if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
      }

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      return `rgba(${r},${g},${b},${opacity / 1})`;
    }
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
          return (
            <div
              style={{
                backgroundColor: "white",
                width: "10%",
                height: "80%",
                borderColor: "black",
                borderWidth: 2,
                borderStyle: "solid",
                borderRadius: 8,
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              <div
                style={{
                  backgroundColor: rgba,
                  height: "70%",
                }}
              ></div>
              <h3 style={{ margin: 10, fontFamily: "Roboto Condensed" }}>
                {props.selectedColor.hexString}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
