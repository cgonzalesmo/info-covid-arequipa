import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Graphthree extends Component {

    constructor(props) {
        super(props);

        this.state = {

          series: [{
            name: 'Masculino',
            data: [407, 2, 1, 48400, 3, 245, 488, 1]
          }, {
            name: 'Femenino',
            data: [568, 4, 0, 89194, 0, 4, 51, 3]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              toolbar: {
                show: false,
              }
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '65%',
                endingShape: 'rounded'
              },
            },
            colors: ['#3498DB', '#FE2EF7'],
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 1,
              colors: ['transparent']
            },
            xaxis: {
              categories: ["Adulto Mayor", "Brigadistas", "Estudiantes de ciencia de la salud", "Personal de Salud", "Personal de seguridad",
                            "Personal Militar o FFAA", "Policia Nacional del Peru", "Trabajador o personal de limpieza"],
            },
            title: {
              margin: 30,
              text: "Grupo de riesgo por sexo",
              align: "center",
              style: {
                  fontSize: '20px'
              },
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  val + " vacunados"
                }
              }
            }
          },


        };
      }


    render() {
        return (
            <div className="bar" style={{ background: '#E5E8E8', borderRadius: '10px'}}>
               <Chart options={this.state.options} series={this.state.series} type="bar" width={'100%'} height={400} />
            </div>
        )
    }
}
