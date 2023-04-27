import { Progress, Select } from "antd";
import React, { useEffect, useState } from "react";
const colorArray = ["#FFC78A", "#8AC7FF", "#FFC78A", "#E88AFF", "#8AC7FF"];

export default function LitresByStyle({ styles }) {
  const [selectedYear, setSelectedYear] = useState();

  useEffect(() => {
    if (styles && styles?.length) {
      setSelectedYear(styles.filter((arr) => arr.year === "2023"));
    }
  }, [styles]);

  const handleChange = (value) => {
    setSelectedYear(styles.filter((arr) => arr.year === value));
  };

  const groups = selectedYear?.length ? selectedYear[0].typeGroups : 0;
  const literesByStyle = groups?.length
    ? groups.map((el) => el.litersByStyles)
    : [];

  console.log(literesByStyle);
  let counter = 0;
  const liters = [literesByStyle[0]];
  const kegas = [literesByStyle[1]];
  const ciders = literesByStyle?.length ? [literesByStyle[2]] : [];
  const cider = ciders[0]
    ? Object.entries(ciders[0]).map(([name, quantity]) => ({
        index: (counter += 1),
        name: name,
        quantity: quantity,
      }))
    : [];
  console.log(cider);

  return (
    <div
      style={{
        width: 544,
        backgroundColor: "#F8F8FA",
        height: 342,
        borderRadius: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            fontFamily: "Rubik",
            fontWeight: "400",
            fontSize: "16px,",
            lineHeight: "18.96px",
            paddingRight: "20%",
            opacity: "50%",
          }}
        >
          Литры по стилям
        </div>
        <Select
          style={{
            fontFamily: "Manrope",
            fontWeight: "400",
            fontSize: "16px,",
            lineHeight: "21.86px",
            letterSpacing: "1%",
            paddingLeft: "35%",
            opacity: "50px",
          }}
          defaultValue="2023"
          onChange={handleChange}
          options={[
            { value: "2022", label: "2022" },
            { value: "2023", label: "2023" },
          ]}
          bordered={false}
        ></Select>
      </div>
      {/* <div
        style={{
          fontFamily: "Rubik",
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "37.92px",
          fontStyle: "Semibold",
          paddingLeft: "4%",
          fill: "solid",
          marginTop: "10px",
        }}
      >
        {/* {sumer} */}
      {/* </div> */}
      {cider.map((item) => (
        <div
          key={item.index}
          style={{
            listStyle: "none",
            display: "flex",
            // justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "10px",
            height: "auto",
          }}
        >
          <div
            style={{
              width: "32%",
              height: "19px",
              opacity: "50%",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "18.96px",
              fontFamily: "Rubik",
              paddingLeft: "5%",
            }}
          >
            {item.name}
          </div>
          <Progress
            style={{ width: "50%", paddingLeft: "8%" }}
            size="small"
            percent={Number(item.quantity)}
            showInfo={false}
            strokeColor={colorArray[item.index]}
          />
          <span
            style={{
              width: "20%",
              paddingLeft: "15%",
              height: "19px",
              opacity: "50%",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "18.96px",
              fontFamily: "Rubik",
            }}
          >
            {item.quantity}л
          </span>
        </div>
      ))}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          paddingLeft: "20px",
          position: "fixed",
          marginTop: "110px",
          position: "relative",
        }}
      >
        <button
          style={{
            width: "504px",
            height: "38px",
            fontFamily: "Rubik",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "16.59px",
            borderRadius: "24px",
            border: "1px solid #A6D05D",
            color: "#A6D05D",
            backgroundColor: "#F8F8FA",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          Заявка на обучение от пивного сомелье
        </button>
      </div>
    </div>
  );
}
