import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/api";
import { Typography } from "antd";
import LitresByStyle from "../components/LitresByStyle";
import LitresByStyleStrong from "../components/LitresByStyleStrong";
import Packing from "../components/Packing";
import Countries from "../components/Countries";
import DynamicOrder from "../components/DynamicOrder";

export default function Analitics() {
  const { data } = useQuery({
    queryKey: ["beerData"],
    queryFn: getData,
    retry: false,
    refetchOnWindowFocus: false,
  });
  console.log(data);

  const res = data?.data?.countByProductVolumeTotals;
  const countries = data?.data?.productsCountByCountryTotals;
  const months = data?.data?.sumAndCountByMonthYearTotals;
  const styles = data?.data?.litersByTypeGroupsAndStylesTotals;
  // console.log(styles);

  const twoChildrenStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  };
  const thirdChildrenStyle = {
    width: "100%",
    height: "342px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px",
        padding: "0 20px 50px",
      }}
    >
      <Typography.Title
        level={2}
        style={{
          fontFamily: "Rubik",
          fontWeight: "600",
          fontSize: "40px",
          lineHeight: "47.4px",
          fontStyle: "Semibold",
          margin: 0,
          alignSelf: "flex-start",
          marginLeft: "150px",
        }}
      >
        Аналитика
      </Typography.Title>
      <div style={twoChildrenStyle}>
        <LitresByStyle styles={styles} />
        <LitresByStyleStrong />
      </div>
      <div style={twoChildrenStyle}>
        <Packing res={res} />
        <Countries countries={countries} />
      </div>
      <div style={thirdChildrenStyle}>
        <DynamicOrder months={months} />
      </div>
    </div>
  );
}
