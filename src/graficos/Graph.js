import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export default class Graph extends Component {

  constructor(props) {
    super(props);

    this.state = {

      series: [3957, 32, 1, 2560, 8, 561, 820, 11],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        title: {
          margin: 30,
          text: "Vacunación por grupo de riesgo",
          align: "center",
          style: {
              fontSize: '20px'
          },
        },
        colors: ['#E74C3C', '#7D3C98', '#2E86C1', '#28B463', '#A5978B', '#E67E22', '#F4D03F', '#5F6A6A',
        ],
        labels: ["Adulto Mayor", "Brigadistas", "Estudiantes de ciencia de la salud", "Personal de Salud",
                "Personal de seguridad", "Personal Militar o FFAA", "Policia Nacional del Peru", "Trabajador o personal de limpieza"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },


    };
  }

  render() {

    return (
      <div className="pie" style={{ background: '#E5E8E8', borderRadius: '10px'}}>
        <Chart options={this.state.options} series={this.state.series} type="pie" width={'100%'} height={350}/>
      </div>
    );
  }
}
