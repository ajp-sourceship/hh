import {MainContent} from "./MainContent";
import {SubContent} from "./SubContent";

export const Content = (props) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#FFFFFF",
        flex: 6,
        flexDirection: "column",
      }}
    >
      <MainContent selectedColor={props.selectedColor} colors={props.Colors} />
      <SubContent selectedColor={props.selectedColor} colors={props.Colors} />
    </div>
  );
}


