import MainContent from "./MainContent";
import SubContent from "./SubContent";

function Content() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#FFFFFF",
        flex: 6,
        flexDirection: "column",
      }}
    >
      <MainContent />
      <SubContent />
    </div>
  );
}

export default Content;
