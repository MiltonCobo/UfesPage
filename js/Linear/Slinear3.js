import {
  getDataScatter,
  //layout,
  options
} from '@/static/js/Plotly/plotly-config.js'

export function drawLinear3() {
  let xwidth = 4
  let step = 0.05
  let xinitial = 0

  function funct(x) {
    return 12 - 2 * x - 8 * Math.sqrt(Math.E) * Math.exp(-x / 4)
  }

  let data1 = getDataScatter(funct, xinitial, xwidth, step)

  xwidth = 20
  step = 0.01
  xinitial = 0

  let data2 = getDataScatter(funct, xinitial, xwidth, step)
  data2.visible = false // important

  let shapes = [
    {
      type: 'line',
      x0: 0,
      y0: 12,
      x1: 20,
      y1: -28,
      line: {
        color: 'red',
        width: 2
      }
    }
  ]

  let annotations1 = [
    {
      text: '$ y= 12- 2t $',
      ax: 100,
      ay: -60,
      axref: 'pixel',
      ayref: 'pixel',
      arrowcolor: 'red',
      font: {
        size: 18,
        color: 'red'
      },
      x: 5,
      y: 2
    }
  ]

  let annotations0 = [
    {
      text: '$ t_0=2 $',
      axref: 'pixel',
      ayref: 'pixel',
      showarrow: false,
      font: {
        size: 18,
        color: 'green'
      },
      x: 1.96,
      y: 0.04
    },
    {
      text: '$y_0=12-8\\sqrt{\\e}$',
      axref: 'pixel',
      ayref: 'pixel',
      showarrow: false,
      xanchor: 'left',
      font: {
        size: 18,
        color: 'green'
      },
      x: 0.05,
      y: -1.18
    }
  ]

  let layout = {
    paper_bgcolor: 'gainsboro',
    plot_bgcolor: 'gainsboro',
    annotations: annotations0,
    updatemenus: [
      {
        buttons: [
          {
            method: 'update',
            args: [
              {
                visible: [true, false],
                opacity: 1
              },
              {
                annotations: annotations0,
                shapes: []
              }
            ],
            label: 'TangĂȘncia'
          },
          {
            method: 'update',
            args: [
              { visible: [false, true], opacity: 1 },
              {
                annotations: annotations1,
                shapes: shapes
              }
            ],
            label: 'AssĂ­ntota'
          }
        ],
        direction: 'bottom',
        pad: {
          r: 10,
          t: 10
        },
        showactive: true,
        type: 'buttons',
        x: 0.7,
        xanchor: 'left',
        y: 0.63,
        yanchor: 'top',
        font: {
          size: 16,
          color: 'brown'
        }
      }
    ],
    xaxis: {
      autorange: true,
      title: 't',
      titlefont: { size: 18, color: 'brown' },
      tickfont: { size: 12, color: 'blue' }
    },
    yaxis: {
      autorange: true,
      title: 'y(t)',
      titlefont: { size: 18, color: 'brown' },
      // side : 'right',
      // tickvals: [0, -1.18, 12, -20],
      // ticktext: ['0', '$12-8\\sqrt{\\e}$', '12', '-20'],
      tickfont: { size: 12, color: 'blue' }
    },

    title:
      '$\\color{brown}{ y(t)=12 - 2t -\\color{green}{8\\sqrt{e}}\\,\\exp(-t/4)  }$',

    showlegend: false,
    hovermode: false,
    autosize: false,
    dragmode: false,
    displaylogo: false,
    showLink: false,
    width: 600, //Math.min(0.42 * windowWidth, 490),
    height: 600 // Math.min(0.42 * windowWidth, 490)
  }

  return { data: [data1, data2], layout, options }
}
