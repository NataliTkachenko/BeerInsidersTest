import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import { Select } from "antd";
import "./style.css";

export default function DynamicOrder({ months }) {
  const [selectedYear, setSelectedYear] = useState();

  useEffect(() => {
    if (months && months?.length) {
      setSelectedYear(months.filter((arr) => arr.year === "2023"));
    }
  }, [months]);

  const handleChange = (value) => {
    setSelectedYear(months.filter((arr) => arr.year === value));
  };
  const sumer = selectedYear?.length ? selectedYear[0].yearOrderTotalSumRub : 0;

  const result = selectedYear?.length ? selectedYear[0].months : 0;
  function getMonthName(month) {
    const monthNames = [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь",
    ];
    return monthNames[Number(month) - 1];
  }
  const data = result?.length
    ? result
        ?.map((obj) => ({
          month: getMonthName(obj.month),
          Продажи: obj.orderTotalSumRub,
        }))
        .sort((a, b) => {
          const months = [
            "январь",
            "февраль",
            "март",
            "апрель",
            "май",
            "июнь",
            "июль",
            "август",
            "сентябрь",
            "октябрь",
            "ноябрь",
            "декабрь",
          ];
          return months.indexOf(a.month) - months.indexOf(b.month);
        })
    : [];


  const config = {
    data,
    padding: "auto",
    xField: "month",
    yField: "Продажи",
    lineStyle: {
      stroke: "#A6D05D",
    },
    smooth: true,
    yAxis: {
      grid: { visible: false },
      label: {
        formatter: () => null,
      },
    },
    point: { size: 5, shape: "circle", style: { fill: "#6C981E" } },
    tooltip: {
      showTitle: false,
      showMarkers: true,
      textBackground: {
        backgroundColor: "#464748",
      },
      markerStyle: {
        fill: "#464748",
      },
      customContent: (value, items) => {
        const sales = items[0]?.data?.Продажи;
        return <>{sales}р</>;
      },
    },
    className: "line-pink",
  };

  return (
    <div
      style={{
        width: 1104,
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

          // marginTop: "33px",
        }}
      >
        <div
          style={{
            fontFamily: "Rubik",
            fontWeight: "400",
            fontSize: "16px,",
            lineHeight: "18.96px",
            paddingRight: "40%",
            opacity: "50%",
          }}
        >
          Динамика заказов
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
        {sumer}
      </div>
      <div
        style={{
          width: "90%",
          height: "80%",

          marginTop: "10px",
          paddingLeft: "40px",
          paddingRight: "20px",
        }}
      >
        <Line {...config} />
      </div>
    </div>
  );
}
