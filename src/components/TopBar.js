import logo from '../assets/hh.png';
import { ImTable2 } from 'react-icons/im';


export const  TopBar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div style={{ display: "flex", backgroundColor: "#363C3C", flex: 1, justifyContent:'space-between', alignItems:'center', paddingLeft:20, paddingRight:20 }}>
        
        {/* <h1>test</h1> */}
      <img src={logo} height={60} />
        <div style={{ display:'flex', flexDirection:'row', alignItems:'center'}}>
        {/* <div style={{ display:'flex', flexDirection:'row', alignItems:'center', marginLeft:20, marginRight:20}}
          onClick={() => props.toggleShowAll()} >
          <ImTable2 color='white' size={24} style={{marginLeft:30, marginRight:10}} />
          {props.showAllBool ?  
            <h2 style={{marginRight:10, color:'white', fontFamily:'Roboto Condensed'}}>Hide</h2>
          : 
            <h2 style={{marginRight:10, color:'white', fontFamily:'Roboto Condensed'}}>Show All</h2>
          }
        </div> */}
          <h2 style={{marginRight:10, color:'white', fontFamily:'Roboto Condensed'}}>Search: </h2>
          <input 
            onChange={(event) => props.setFilterString(event.target.value)}
             style={{height:35}}/>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
