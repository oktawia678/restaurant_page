import { Button } from "../button/Button";
export const SectionCenter = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "blue",
        width: "100vw",
        height: "85vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "green",
          width: "70%",
          height: "40%",
          flexDirection:'column'
        }}
      >
        <div style={{ display: "flex",backgroundColor:'yellow',flex:'1',justifyContent:'center',alignItems:'center' }}>WE`RE GOREAMEX RESTAURANT</div>
        <div style={{ display: "flex",backgroundColor:'violet',flex:'1',justifyContent:'center',alignItems:'center' }}>MAKING DELICIOUS PREMIUM FOOD</div>
        <div style={{ display: "flex",backgroundColor:'pink',flex:'1',justifyContent:'center',alignItems:'center' }}>Welcome to our restaurant! If you want to make a reservation, please, push the button below. Enjoy your meal!</div>
        <div style={{ display: "flex",backgroundColor:'brown',flex:'1',justifyContent:'center',alignItems:'center' }}>
            <Button/>
        </div>
      </div>
    </div>
  );
};
