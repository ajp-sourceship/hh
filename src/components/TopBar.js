import logo from '../assets/hh.png';

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
          <h2 style={{marginRight:10, color:'white', fontFamily:'Roboto Condensed'}}>Search</h2>
          <input 
            onChange={(event) => props.setFilterString(event.target.value)}
             style={{height:35}}/>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
