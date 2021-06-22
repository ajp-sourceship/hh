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
          borderColor: "black",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            backgroundColor: props.selectedColor.hexString,
            height: "90%",
          }}
        ></div>
        <h1 style={{ margin: 10, fontFamily: "Roboto Condensed" }}>
          {props.selectedColor.hexString}
        </h1>
      </div>
    </div>
  );
};
