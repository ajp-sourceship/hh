import { useEffect, useState } from "react";
import { PalletTile } from "./comps/PalletTile";

export const SubContent = (props) => {
  const [colorPallet, setColorPallet] = useState([]);

  useEffect(() => {
    console.log(props.selectedColor);
    if (props.selectedColor.hexString !== "") {
      let temp = [];
      for (let index = 1; index < 6; index++) {
        console.log(index)
        let ret = props.selectedColor.hexString;
        let rgbastring = convertHexToRGBA(ret, (100- (index * 10)) / 100);

        temp.push({rgba: rgbastring, hexColor: rgba2HexCode(rgbastring), opacity: (100- (index * 10)) / 100});
        temp.sort((colorA, colorB) => colorA.opacity - colorB.opacity)
        temp.reverse();
      }
      console.log(temp)
      setColorPallet(temp);
    }
  }, [props.selectedColor.hexString]);

  const rgba2HexCode = (color)=> {
    const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
    const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;
    
    return hex;
}


  const convertHexToRGBA = (hexCode, opacity) => {
      let hex = hexCode.replace("#", "");

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
          marginLeft:10,
          marginRight:10

        }}
      >
        {colorPallet.map((color) => {
          return (
            <PalletTile 
              rgba={color.rgba}
              opacity={color.opacity}
              hexColor={color.hexColor}
              />
          );
        })}
      </div>
    </div>
  );
};
