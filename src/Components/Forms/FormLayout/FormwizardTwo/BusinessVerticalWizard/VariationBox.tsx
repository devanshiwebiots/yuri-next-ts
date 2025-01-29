import { VerticalBoxData } from "@/Data/Forms";
import { useState } from "react";
import { Input } from "reactstrap";

const VariationBox = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleCheckboxChange = (index:number) => {
    setActiveIndex(index);
  };

  return (
    <div className="variation-box mb-3">
      {VerticalBoxData.map((data, index) => (
        <div className="selection-box" key={index}>
          <Input
            type="checkbox"
            checked={activeIndex === index}
            onChange={() => handleCheckboxChange(index)}
          />
          <div className="custom--mega-checkbox">
            <ul className="d-flex flex-column align-items-center">
              <li>{data.title}</li>
              <li className="txt-primary">{data.details}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariationBox;
