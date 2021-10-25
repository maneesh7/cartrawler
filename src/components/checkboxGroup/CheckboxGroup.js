import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const CheckboxGroup = ({ data, handleData, selectedItem }) => {
  const [selectedCB, setSelectedCB] = useState(selectedItem);

  const handleChange = (event) => {
    const id = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedCB([...selectedCB, id]);
    } else {
      setSelectedCB(selectedCB.filter((item) => item !== id));
    }
  };

  const isChecked = (id) => {
    return selectedItem.includes(id);
  };

  useEffect(() => {
    handleData(selectedCB);
  }, [selectedCB]);

  useEffect(() => {}, [data]);

  return (
    <div>
      {data.map((item, index) => {
        const label = { inputProps: { "aria-label": item.name } };
        return (
          <div key={index} className="checkBoxRow">
            <Checkbox
              {...label}
              onChange={handleChange}
              value={item.id}
              checked={isChecked(item.id)}
            />
            <span className="name" data-testid={item.id}>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxGroup;
