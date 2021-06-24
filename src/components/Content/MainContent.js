export const MainContent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "96%",
          height: "90%",
          borderColor: "silver",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 8,
          boxShadow: "1px 2px 1px #9E9E9E"
          
        }}
      >
        <div
          style={{
            backgroundColor: props.selectedColor.hexString,
            height: "90%",
            borderTopLeftRadius:8,
                  borderTopRightRadius:8,
            margin:2
          }}
        ></div>
        <h1 style={{ margin: 10, fontFamily: "Roboto Condensed" }}>
          {props.selectedColor.hexString}
        </h1>
      </div>
    </div>
  );
};
