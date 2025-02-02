const style = {
  width: 400,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  marginBottom: 10,
};

export function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: 50, height: 50, borderRadius: 30 }}
          src={image}
          alt="no image"
        />
        <div style={{ fontSize: 16, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {/* Condotional rendering - if time params are passed then only render the following div */}
          {time !== undefined && (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                style={{ width: 18, height: 18, marginLeft: 5 }}
                src="https://imgs.search.brave.com/L4sErP_iLewU55zM5uMKvjpIUQX_bTzQgJQrJDcjgzw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzczLzc3/LzM2MF9GXzY1NzM3/NzkxX05ySXRwRDJQ/M0V1NWVycFF4aVlS/Yzc2NmVLeWl1c1E4/LmpwZw"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 14 }}>
        <div>{description}</div>
      </div>
    </div>
  );
}
