import { useEffect, useState } from "react";
import { useAlert } from "react-alert";

export const PalletTile = (props) => {
  
    const alert = useAlert();

    const copyRgbaToClipboard = (rgba) => {
        navigator.clipboard.writeText(props.rgba)
        alert.show('Rgba String Copied to Clipboard')
    }
  return (
 
            <div
              style={{
                backgroundColor: "white",
                width: "10%",
                height: "80%",
                borderColor: "silver",
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 8,
                marginLeft: 20,
                marginRight: 20,
                boxShadow: "1px 2px 1px #9E9E9E"

              }}
              onClick={() => copyRgbaToClipboard(props.rgba)}
            >
              <div
                style={{
                  backgroundColor: props.rgba,
                  margin:1,
                  borderTopLeftRadius:8,
                  borderTopRightRadius:8,
                  height: "70%",
                }}
              />
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:2}}>
              <h3 style={{ margin: 10, fontFamily: "Roboto Condensed" }}>
                {props.hexColor}
              </h3>
              <h3 style={{ marginTop: 10, fontFamily: "Roboto Condensed" }}>
                {'' +  (props.opacity * 100) + `%`}
              </h3>
              </div>
            </div>
         
  );
};
