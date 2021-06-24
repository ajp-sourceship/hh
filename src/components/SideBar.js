import { useEffect, useState } from "react";
import { GetColorName } from "hex-color-to-color-name";
import { Scrollbars } from "react-custom-scrollbars";

export const SideBar = (props) => {
  
  const generateColor = () => {
    let hexString = Math.floor(Math.random() * 16777215).toString(16);
    let colorName = GetColorName(hexString);
    hexString = `#` + hexString;
    props.genColor(hexString, colorName);
    props.selectColor(hexString, colorName);
    props.getColors();
  };
  if(props.colors !== null )
  {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "#D6D8D8",
          flex: 1,
          flexDirection: "column",
          height: "92vh",
        }}
      >
        <button
            style={{
              backgroundColor: "grey",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              margin: 10,
              fontFamily: "Roboto Condensed",
              padding: 4,
            }}
            onClick={() => generateColor()}
          >
            <h3 style={{ color: "white" }}>Generate Color</h3>
          </button>
        <Scrollbars style={{  }}>
          {props.colors.map((color) => {
            return (
              <button 
              onClick={() => props.selectColor(color.HexString)}
                style={{ display: "flex", marginLeft: 20, background: 'transparent', borderWidth:0, width:'100%' }}>
                <h1
                  style={{ fontFamily: "Roboto Condensed" }}
                  key={color.ColorId}
                >
                  {color.ColorName}
                </h1>
              </button>
            );
          })}
        </Scrollbars>
      </div>
    );
  }
  else 
    {
      return (
          <div
            style={{
              display: "flex",
              backgroundColor: "#D6D8D8",
              flex: 1,
              flexDirection: "column",
              
              height: "92vh",
            }}
          >
            </div>
        )
      }
};
