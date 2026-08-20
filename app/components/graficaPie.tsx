import ReactECharts from "echarts-for-react";

function ProgresoCircular({ promedioTotal }: { promedioTotal: any }) {
  const progreso = promedioTotal;
  console.log("PROMEDIO GRAFIC: ", promedioTotal)

  const option = {
    series: [
      {
        type: "pie",
        radius: ["78%", "92%"],
        silent: true,

        data: [
          {
            value: progreso,
            itemStyle: {
              color: "#38bdf8", // acento azul claro, más contraste sobre el fondo navy
            },
          },
          {
            value: 100 - progreso,
            itemStyle: {
              color: "rgba(255,255,255,0.12)", // resto del anillo, translúcido sobre el fondo
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
              color: "#cbd5e1",
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

        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "300px" }} />;
}

export default ProgresoCircular;