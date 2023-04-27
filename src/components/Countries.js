import React, { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";
import { Select } from "antd";

export default function Countries({ countries }) {
  const [selectedYear, setSelectedYear] = useState({});
  useEffect(() => {
    if (countries) {
      if ("2023" in countries) {
        setSelectedYear(countries["2023"].productsCountByCountry);
      } else {
        console.log(`No data for year 2023`);
      }
    }
  }, [countries]);

  const handleChange = (value) => {
    const yearData = Object.values(countries).find(
      (data) => data.year === value
    );
    setSelectedYear(yearData.productsCountByCountry);
  };

  const totalSales = Object.values(selectedYear).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const data = Object.entries(selectedYear)
    .map(([type, sales]) => ({
      type,
      sales: Math.round((sales / totalSales) * 100),
    }))
    .sort((a, b) => a.sales - b.sales);

  const config = {
    data,
    xField: "type",
    yField: "sales",

    columnWidthRatio: 0.7,
    tooltip: false,
    label: {
      position: "middle",
      style: {
        fill: "#000",
        opacity: 0.6,
        fontSize: 13,
        fontFamily: "Rubik",
        fontWeight: "400",
        lineHeight: "18.96px",
      },
      formatter: ({ sales }) => `${sales}%`,
    },
    columnStyle: ({ sales }) => {
      if (sales < 5) {
        return {
          width: "88px",
          fill: "rgba(166, 208, 93, 0.2)",

          radius: [12, 12, 0, 0],
        };
      } else if (sales < 9) {
        return {
          width: "88px",
          fill: "rgba(166, 208, 93, 0.4)",

          radius: [12, 12, 0, 0],
        };
      } else {
        return {
          width: "88px",
          fill: "#A6D05D",
          opacity: 1,
          radius: [12, 12, 4, 4],
        };
      }
    },
    yAxis: {
      grid: { visible: false },
      label: {
        formatter: () => null,
      },
    },
    // xAxis: {
    //   label: {
    //     formatter: ({ type, flag }) =>
    //       flag ? <img src={flag} alt={type} width="20" height="20" /> : type,
    //   },
    // },
  };

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
            paddingRight: "25%",
            opacity: "50%",
          }}
        >
          В разрезе стран
        </div>
        <Select
          style={{
            fontFamily: "Manrope",
            fontWeight: "400",
            fontSize: "16px,",
            lineHeight: "21.86px",
            letterSpacing: "1%",
            paddingLeft: "35%",
            opacity: "0.5px",
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
          width: "504px",
          height: "224px",
          marginTop: "24px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Column {...config} />
      </div>
    </div>
  );
}
