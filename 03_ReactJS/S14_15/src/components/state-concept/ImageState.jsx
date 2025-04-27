import { useState } from "react";
var styles = {
  textAlign: "center",
  marginTop: "20px",
};
function ImageState() {
  const [image, setImage] = useState(
    "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg"
  );

  function updateImage() {
    setImage(
      "https://i.pinimg.com/originals/3e/37/a1/3e37a1bd45c70cb972bf95105ba4adc6.jpg"
    );
  }

  function updateToMale() {
    setImage(
      "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg"
    );
  }

  return (
    <div style={styles}>
      <img
        onMouseEnter={updateImage}
        onMouseLeave={updateToMale}
        src={image}
        width={300}
        height={300}
      />
      <br />
      <br />
      <button onClick={updateImage}>Female</button>

      <button onClick={updateToMale}>male</button>
    </div>
  );
}

export default ImageState;
