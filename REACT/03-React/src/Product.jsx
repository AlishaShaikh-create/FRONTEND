function Product({ title, price, feature }) {
  let Fontcolor={color:"blue"};
  let isDiscount = price > 30000;
  let styles = { backgroundColor: isDiscount ? "pink" : null };
  let list = feature.map((ele) => {
    return <li>{ele}</li>;
  });

  return (
    <div className="Container" style={styles}>
      <h1>{title}</h1>
      <h3 style={Fontcolor}>Price: {price}</h3>
      <p>{list}</p>
      {isDiscount ? <p>"Discount of 5%"</p> : null}
    </div>
  );
}

export default Product;
