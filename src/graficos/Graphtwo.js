import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Graphtwo extends Component {

  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Pfizer',
        data: [59, 2215, 1211, 1737, 17, 8, 117, 11, 479, 38, 13, 1338, 8, 16, 25, 1652, 16, 10, 16, 151]
      }, {
        name: 'Sinopharm',
        data: [84, 2732, 212, 188, 14, 4, 42, 42, 169, 88, 0, 136, 1, 0, 0, 139, 20, 0, 495, 16]
      }],
      options: {
        chart: {
          type: 'bar',
          width: '100%',
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
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Alto Selva Alegre', 'Arequipa', 'Cayma', 'Cerro Colorado',
                      'Characato', 'Chiguata', 'Jacobo Hunter', 'JLBYR',
                      'Mariano Melgar', 'Miraflores', 'Mollebaya', 'Paucarpata', 'Quequeña', 'Sabandia', 'Sachaca',
                      'Socabaya', 'Tiabaya', 'Uchumayo', 'Yanahuara', 'Yarabamba', 'Yura'],
        },
        title: {
          margin: 20,
          text: "Vacunación por fabricante en distritos",
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
            <div className="bar">
               <Chart options={this.state.options} series={this.state.series} type="bar"  width={'100%'} height={350}/>
            </div>
        )
    }
}
