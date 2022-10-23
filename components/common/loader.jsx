import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
 
const Pageloader = () => {
    const override = {
        display: "block",
        margin: "25% auto",
        borderColor: "red",
      };
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#36d7b7");
  return (
<div className="">

      <HashLoader
        color={color}
        loading={loading}
        className='max-auto'
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"   
        speedMultiplier={1.5}     
      />
    </div>
  )
}

export default Pageloader