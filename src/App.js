import TopBar from "./components/TopBar";
import {SideBar} from "./components/SideBar";
import {Content} from "./components/Content/Content";
import { useEffect, useState } from "react";

export const App = () =>  {
  const [colors, setColors] = useState([])
  const [colorsFiltered, setColorsFiltered] = useState([])
  const [selectedColor, setSelectedColor] = useState('')
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    getColors()
  }, [])

  const getColors = () => {
    return fetch('https://hhapi.indydev.io/api/getcolors', {
      method: "POST",
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.colors)
        setColors(response) 
        setColorsFiltered(response) 
      })
      .catch(error => {
        console.log(`woops: ` + error)
      });
  }

  const insertColor = (hexString, colorName) => {
     var myHeaders =  new Headers()
      myHeaders.append('Content-Type','application/json; charset=utf-8');
      let body = {
        hexString, 
        colorName
      }

    return fetch('https://hhapi.indydev.io/api/insertColor', {
      method: "POST",
      headers:myHeaders,
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => {
        getColors()
        return response;
      })
      .catch(error => {
        console.log(`woops: ` + error)
      });
  }

  const filterStringChanged =(str) => {
    setColorsFiltered(colors.filter(color => color.ColorName.toLowerCase().includes(str.toLowerCase())))
  }

  return (
    <div style={{ display: "flex", flex: 1, height:'100vh', flexDirection: "column",alignItems:'stretch'}}>
      <TopBar setFilterString={(str) => filterStringChanged(str)} filterString={filterString}/>
      <div style={{ display: "flex", flex: 10, flexDirection: "row", alignSelf:'stretch',  }}>
        <div style={{ display: "flex", flex:1 }}>
          <SideBar 
            colors={colorsFiltered} getColors={() => getColors()} 
            genColor={(hexString, colorName) => insertColor(hexString, colorName)}
            selectColor={(hexString, colorName) => setSelectedColor({hexString, colorName})}
            />
        </div>
        <div style={{ display: "flex", flex:6 }}>
          {selectedColor !== '' ? 
            <Content 
              colors={colors}
              selectedColor={selectedColor}
                />
          : null}
        </div>
      </div>
    </div>
  );
}

