function ReturnAddress({ homeAddress, officeAddress }) {
  if (homeAddress) {
    return <div>{homeAddress}</div>;
  } else {
    return <div>{officeAddress}</div>;
  }
}

export function MyDetail({ detailObj }) {
  return (
    <>
      <div
        style={{
          fontFamily: "sans-serif",
          width: 200,
          background: "rebeccapurple",
          textAlign: "center",
          padding: "20px",
          color: "white",
          marginBottom: "20px",
          fontSize: "12px",
          borderRadius: "10px",
        }}
      >
        <img
          src={detailObj.url}
          alt="photo"
          style={{ width: 100, height: 100, borderRadius: "50px" }}
        />
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          {detailObj.name}
        </div>
        <div>{detailObj.email}</div>
        <ReturnAddress
          homeAddress={detailObj.homeAddress}
          officeAddress={detailObj.officeAddress}
        />
      </div>
    </>
  );
}
