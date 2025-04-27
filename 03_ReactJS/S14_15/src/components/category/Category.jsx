import "./Category.css";

function Category({ image, title }) {
  return (
    <div className="category">
      <img src={image} width="60" height="60" />
      <h4>{title}</h4>
    </div>
  );
}

export default Category;
