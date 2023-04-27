import React, { useEffect, useState } from "react";
import { Progress, Select } from "antd";

const colorArray = ["#FFC78A", "#8AC7FF", "#FFC78A", "#E88AFF", "#8AC7FF"];
export default function Packing({ res }) {
  const [selectedYear, setSelectedYear] = useState();

  useEffect(() => {
    if (res && res?.length) {
      setSelectedYear(res.filter((arr) => arr.year === "2023"));
    }
  }, [res]);

  const handleChange = (value) => {
    setSelectedYear(res.filter((arr) => arr.year === value));
  };

  let counter = 0;
  const kega = selectedYear?.length
    ? Object.entries(selectedYear[0].volumes)
        .filter((elem) => Number(elem[0]) > 1)
        .map((elem) => ({
          index: (counter += 1),
          tara: Number(elem[0]),
          quantity: elem[1],
        }))
    : [];

  const litres = selectedYear?.length
    ? Object.entries(selectedYear[0].volumes)
        .filter((elem) => Number(elem[0].replace(",", ".")) < 1)
        .map((elem) => ({
          index: (counter += 1),
          tara: Number(elem[0].replace(",", ".")),
          quantity: elem[1],
        }))
    : [];

  return (
    <>
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
            // position: "relative",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              fontFamily: "Rubik",
              fontWeight: "400",
              fontSize: "16px,",
              lineHeight: "18.96px",
              paddingRight: "25%",
              opacity: "50%",
            }}
          >
            График по таре
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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              width: "20%",
              height: "19px",
              opacity: "50%",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "18.96px",
              fontFamily: "Rubik",
              paddingLeft: "5%",
            }}
          >
            Кега
          </div>
          <div
            style={{
              width: "40%",
              height: "19px",
              opacity: "50%",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "18.96px",
              fontFamily: "Rubik",
            }}
          >
            Число заказов
          </div>
          <div
            style={{
              width: "40%",
              height: "19px",
              opacity: "50%",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "18.96px",
              fontFamily: "Rubik",
            }}
          >
            Периодичность в неделю
          </div>
        </div>
        {kega.map((item) => (
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
                width: "12%",
                height: "19px",
                opacity: "50%",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18.96px",
                fontFamily: "Rubik",
                paddingLeft: "5%",
              }}
            >
              {item.tara} л
            </div>
            <Progress
              style={{ width: "60%", paddingLeft: "8%" }}
              size="small"
              percent={Number(item.quantity)}
              showInfo={false}
              strokeColor={colorArray[item.index]}
            />
            <span
              style={{
                width: "40%",
                paddingLeft: "15%",
                height: "19px",
                opacity: "50%",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18.96px",
                fontFamily: "Rubik",
              }}
            >
              {item.quantity}
            </span>
          </div>
        ))}
        <div style={{ marginTop: "24px", marginLeft: "20px", opacity: "50%" }}>
          Бутылка
        </div>
        {litres.map((item) => (
          <div
            key={item.index}
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              height: "auto",
              // top: "24px",
            }}
          >
            <div
              style={{
                width: "12%",
                height: "19px",
                opacity: "50%",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18.96px",
                fontFamily: "Rubik",
                paddingLeft: "5%",
              }}
            >
              {item.tara} л
            </div>
            <Progress
              style={{ width: "60%", paddingLeft: "8%" }}
              size="small"
              percent={Number(item.quantity)}
              showInfo={false}
              strokeColor={colorArray[item.index]}
            />
            <span
              style={{
                width: "40%",
                paddingLeft: "13%",
                height: "19px",
                opacity: "50%",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18.96px",
                fontFamily: "Rubik",
              }}
            >
              {item.quantity}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
