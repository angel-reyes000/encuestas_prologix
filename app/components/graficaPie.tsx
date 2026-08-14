import ReactECharts from "echarts-for-react";

function ProgresoCircular({ promedioTotal }: { promedioTotal: any }) {
  const progreso = promedioTotal;
  console.log("PROMEDIO GRAFIC: ", promedioTotal)

  const option = {
    series: [
      {
        type: "pie",
        radius: ["80%", "90%"],
        silent: true,

        data: [
          {
            value: progreso,
            itemStyle: {
              color: "#00ccff", // color del progreso
            },
          },
          {
            value: 100 - progreso,
            itemStyle: {
              color: "#020202", // color de lo que falta
            },
          },
        ],

        label: {
          show: true,
          position: "center",
          formatter: `{valor|${progreso} Puntos}\n{descripcion|de 100 puntos}`,
          rich: {
            valor: {
              fontSize: 32,
              fontWeight: "bold",
              color: "#fbfbfb",
              lineHeight: 40,
            },
            descripcion: {
              fontSize: 14,
              color: "#6B7280",
              lineHeight: 20,
            },
          },
          fontSize: 30,
          fontWeight: "bold",
          color: "white", 
        },

        labelLine: {
          show: false,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "300px" }} />;
}

export default ProgresoCircular;