import React, { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2';
import axios from 'axios';



class StageRegression extends Component {

constructor() {
super();
var today = new Date(),

DateComponent =  today.getDate() + '/' +(today.getMonth() + 1) + '/' +   today.getFullYear();


this.state = {
DateComponent: DateComponent, current_status:[],water_level:[],
oneAM: '',twoAM: '',threeAM: '',fourAM: '',fiveAM: '',sixAM: '',sevenAM: '',eightAM: '',nineAM: '',tenAM: '',elevenAM: '',
twelvePM: '', onePM: '',twoPM: '',threePM: '',fourPM: '',fivePM: '',sixPM: '',sevenPM: '',eightPM: '',ninePM: '',tenPM: '',
elevenPM: '',twelveAM: '',forecast_oneAM: '',forecast_twoAM: '',forecast_threeAM: '',forecast_fourAM: '',forecast_fiveAM: '',forecast_sixAM: '',forecast_sevenAM: '',forecast_eightAM: '',forecast_nineAM: '',forecast_tenAM: '',forecast_elevenAM: '',
forecast_twelvePM: '', forecast_onePM: '',forecast_twoPM: '',forecast_threePM: '',forecast_fourPM: '',forecast_fivePM: '',forecast_sixPM: '',forecast_sevenPM: '',forecast_eightPM: '',forecast_ninePM: '',forecast_tenPM: '',
forecast_elevenPM: '',forecast_twelveAM: '',rainfall_oneAM:'', rainfall_twoAM:'',rainfall_threeAM:'',rainfall_fourAM:'',rainfall_fiveAM:'',
rainfall_sixAM:'',rainfall_sevenAM:'',rainfall_eightAM:'',rainfall_nineAM:'',rainfall_tenAM:'',rainfall_elevenAM:'',rainfall_twelvePM:'',
rainfall_onePM:'',rainfall_twoPM:'',rainfall_threePM:'',rainfall_fourPM:'',rainfall_fivePM:'',rainfall_sixPM:'',rainfall_sevenPM:'',rainfall_eightPM:'',
rainfall_ninePM:'',rainfall_tenPM:'',rainfall_elevenPM:'',rainfall_twelveAM:''
};
}

request() {
var self = this;

 axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name='+ this.props.station+'&date='+ this.state.DateComponent,  {'timeout': 5000})
.then(function (response) 
	{
		console.log(response.data)
		self.setState({current_status : response.data});
		var arrayLength = response.data.length;
		for (var i = 0; i < arrayLength; i++) {
			if(response.data[i]['time'] === '00:00')
			{
				self.setState({twelveAM : response.data[i]['water_level'], forecast_twelveAM:response.data[i]['stage_forecast'], rainfall_twelveAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '01:00')
			{
				self.setState({oneAM : response.data[i]['water_level'], forecast_oneAM:response.data[i]['stage_forecast'],rainfall_oneAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '02:00')
			{
				self.setState({twoAM : response.data[i]['water_level'], forecast_twoAM:response.data[i]['stage_forecast'],rainfall_twoAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '03:00')
			{
				self.setState({threeAM : response.data[i]['water_level'], forecast_threeAM:response.data[i]['stage_forecast'],rainfall_threeAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '04:00')
			{
				self.setState({fourAM : response.data[i]['water_level'], forecast_fourAM:response.data[i]['stage_forecast'],rainfall_fourAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '05:00')
			{
				self.setState({fiveAM : response.data[i]['water_level'], forecast_fiveAM:response.data[i]['stage_forecast'],rainfall_fiveAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '06:00')
			{
				self.setState({sixAM : response.data[i]['water_level'], forecast_sixAM:response.data[i]['stage_forecast'],rainfall_sixAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '07:00')
			{
				self.setState({sevenAM : response.data[i]['water_level'], forecast_sevenAM:response.data[i]['stage_forecast'],rainfall_sevenAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '08:00')
			{
				self.setState({eightAM : response.data[i]['water_level'], forecast_eightAM:response.data[i]['stage_forecast'],rainfall_eightAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '09:00')
			{
				self.setState({nineAM : response.data[i]['water_level'], forecast_nineAM:response.data[i]['stage_forecast'],rainfall_nineAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '10:00')
			{
				self.setState({tenAM : response.data[i]['water_level'], forecast_tenAM:response.data[i]['stage_forecast'],rainfall_tenAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '11:00')
			{
				self.setState({elevenAM : response.data[i]['water_level'], forecast_elevenAM:response.data[i]['stage_forecast'],rainfall_elevenAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '12:00')
			{
				self.setState({twelvePM : response.data[i]['water_level'], forecast_twelvePM:response.data[i]['stage_forecast'],rainfall_twelveAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '13:00')
			{
				self.setState({onePM : response.data[i]['water_level'], forecast_onePM:response.data[i]['stage_forecast'],rainfall_onePM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '14:00')
			{
				self.setState({twoPM : response.data[i]['water_level'], forecast_twoPM:response.data[i]['stage_forecast'],rainfall_twoPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '15:00')
			{
				self.setState({threePM : response.data[i]['water_level'], forecast_threePM:response.data[i]['stage_forecast'],rainfall_threePM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '16:00')
			{
				self.setState({fourPM : response.data[i]['water_level'], forecast_fourPM:response.data[i]['stage_forecast'],rainfall_fourPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '17:00')
			{
				self.setState({fivePM : response.data[i]['water_level'], forecast_fivePM:response.data[i]['stage_forecast'],rainfall_fivePM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '18:00')
			{
				self.setState({sixPM : response.data[i]['water_level'], forecast_sixPM:response.data[i]['stage_forecast'],rainfall_sixPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '19:00')
			{
				self.setState({sevenPM : response.data[i]['water_level'], forecast_sevenPM:response.data[i]['stage_forecast'],rainfall_sevenPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '20:00')
			{
				self.setState({eightPM : response.data[i]['water_level'], forecast_eightPM:response.data[i]['stage_forecast'],rainfall_eightPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '21:00')
			{
				self.setState({ninePM : response.data[i]['water_level'], forecast_ninePM:response.data[i]['stage_forecast'],rainfall_ninePM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '22:00')
			{
				self.setState({tenPM : response.data[i]['water_level'], forecast_tenPM:response.data[i]['stage_forecast'],rainfall_tenPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '23:00')
			{
				self.setState({elevenPM : response.data[i]['water_level'], forecast_elevenPM:response.data[i]['stage_forecast'],rainfall_elevenPM:response.data[i]['rainfall_forecast']})
			}

			
		}
	})
.catch(function (error) 
	{
		console.log(error);
	});
}

componentDidMount() {
	var self = this;
	axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name='+ this.props.station+'&date='+ this.state.DateComponent,  {'timeout': 5000})
.then(function (response) 
	{
		console.log(response.data)
		self.setState({current_status : response.data});
		var arrayLength = response.data.length;
		for (var i = 0; i < arrayLength; i++) {
			if(response.data[i]['time'] === '00:00')
			{
				self.setState({twelveAM : response.data[i]['water_level'], forecast_twelveAM:response.data[i]['stage_forecast'], rainfall_twelveAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '01:00')
			{
				self.setState({oneAM : response.data[i]['water_level'], forecast_oneAM:response.data[i]['stage_forecast'],rainfall_oneAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '02:00')
			{
				self.setState({twoAM : response.data[i]['water_level'], forecast_twoAM:response.data[i]['stage_forecast'],rainfall_twoAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '03:00')
			{
				self.setState({threeAM : response.data[i]['water_level'], forecast_threeAM:response.data[i]['stage_forecast'],rainfall_threeAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '04:00')
			{
				self.setState({fourAM : response.data[i]['water_level'], forecast_fourAM:response.data[i]['stage_forecast'],rainfall_fourAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '05:00')
			{
				self.setState({fiveAM : response.data[i]['water_level'], forecast_fiveAM:response.data[i]['stage_forecast'],rainfall_fiveAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '06:00')
			{
				self.setState({sixAM : response.data[i]['water_level'], forecast_sixAM:response.data[i]['stage_forecast'],rainfall_sixAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '07:00')
			{
				self.setState({sevenAM : response.data[i]['water_level'], forecast_sevenAM:response.data[i]['stage_forecast'],rainfall_sevenAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '08:00')
			{
				self.setState({eightAM : response.data[i]['water_level'], forecast_eightAM:response.data[i]['stage_forecast'],rainfall_eightAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '09:00')
			{
				self.setState({nineAM : response.data[i]['water_level'], forecast_nineAM:response.data[i]['stage_forecast'],rainfall_nineAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '10:00')
			{
				self.setState({tenAM : response.data[i]['water_level'], forecast_tenAM:response.data[i]['stage_forecast'],rainfall_tenAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '11:00')
			{
				self.setState({elevenAM : response.data[i]['water_level'], forecast_elevenAM:response.data[i]['stage_forecast'],rainfall_elevenAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '12:00')
			{
				self.setState({twelvePM : response.data[i]['water_level'], forecast_twelvePM:response.data[i]['stage_forecast'],rainfall_twelveAM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '13:00')
			{
				self.setState({onePM : response.data[i]['water_level'], forecast_onePM:response.data[i]['stage_forecast'],rainfall_onePM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '14:00')
			{
				self.setState({twoPM : response.data[i]['water_level'], forecast_twoPM:response.data[i]['stage_forecast'],rainfall_twoPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '15:00')
			{
				self.setState({threePM : response.data[i]['water_level'], forecast_threePM:response.data[i]['stage_forecast'],rainfall_threePM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '16:00')
			{
				self.setState({fourPM : response.data[i]['water_level'], forecast_fourPM:response.data[i]['stage_forecast'],rainfall_fourPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '17:00')
			{
				self.setState({fivePM : response.data[i]['water_level'], forecast_fivePM:response.data[i]['stage_forecast'],rainfall_fivePM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '18:00')
			{
				self.setState({sixPM : response.data[i]['water_level'], forecast_sixPM:response.data[i]['stage_forecast'],rainfall_sixPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '19:00')
			{
				self.setState({sevenPM : response.data[i]['water_level'], forecast_sevenPM:response.data[i]['stage_forecast'],rainfall_sevenPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '20:00')
			{
				self.setState({eightPM : response.data[i]['water_level'], forecast_eightPM:response.data[i]['stage_forecast'],rainfall_eightPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '21:00')
			{
				self.setState({ninePM : response.data[i]['water_level'], forecast_ninePM:response.data[i]['stage_forecast'],rainfall_ninePM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '22:00')
			{
				self.setState({tenPM : response.data[i]['water_level'], forecast_tenPM:response.data[i]['stage_forecast'],rainfall_tenPM:response.data[i]['rainfall_forecast']})
			}
			else if(response.data[i]['time'] === '23:00')
			{
				self.setState({elevenPM : response.data[i]['water_level'], forecast_elevenPM:response.data[i]['stage_forecast'],rainfall_elevenPM:response.data[i]['rainfall_forecast']})
			}

			
		}
	})
.catch(function (error) 
	{
		console.log(error);
	});
	self.interval = setInterval(() => self.request(), 600000);
}

render() {
var self = this;
var bgColors = { "Default": "#81b71a",
"Blue": "#00B1E1",
"Orange": "#F9B10A",
"Green": "#8CC152",
"Red": "#F70000",
"Yellow": "#FEFE0E",
};
let current_status = self.state.current_status.map((index) =>

<tr>
	<td className="center">{index.time}</td>
	<td className="center">{index.water_level}</td>
	<td className="center">{index.stage_forecast}</td>
	<td className="center" style={{backgroundColor: bgColors.Green}}>17.00</td>
	<td className="center" style={{backgroundColor: bgColors.Yellow}}>20.00</td>
	<td className="center" style={{backgroundColor: bgColors.Orange}}>22.50</td>
	<td className="center" style={{backgroundColor: bgColors.Red}}>25.00</td>
</tr>
);
const data2 = {
   labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', 
            '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', 
            '22.00', '23.00', ],
  datasets: [{
      label: 'Water Level',
      type:'line',
      data: [this.state.twelveAM, this.state.oneAM, this.state.twoAM, this.state.threeAM, this.state.fourAM, this.state.fiveAM, this.state.sixAM, this.state.sevenAM, this.state.eightAM, this.state.nineAM, this.state.tenAM, this.state.elevenAM, this.state.twelvePM, this.state.onePM, this.state.twoPM, this.state.threePM, this.state.fourPM, this.state.fivePM, this.state.sixPM, this.state.sevenPM, this.state.eightPM, this.state.ninePM, this.state.tenPM, this.state.elevenPM],
      fill: false,
      backgroundColor: '#0097FF',
      borderColor: '#0076C7',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#0097FF',
      pointHoverBorderColor: '#0076C7',
      yAxisID: 'y-axis-2'
    },{
      type: 'bar',
      label: 'Rainfall',
      data: [this.state.rainfall_twelveAM, this.state.rainfall_oneAM, this.state.rainfall_twoAM, this.state.rainfall_threeAM, this.state.rainfall_fourAM, this.state.rainfall_fiveAM, this.state.rainfall_sixAM, this.state.rainfall_sevenAM, this.state.rainfall_eightAM, this.state.rainfall_nineAM, this.state.rainfall_tenAM, this.state.rainfall_elevenAM, this.state.rainfall_twelvePM, this.state.rainfall_onePM, this.state.rainfall_twoPM, this.state.rainfall_threePM, this.state.rainfall_fourPM, this.state.rainfall_fivePM, this.state.rainfall_sixPM, this.state.rainfall_sevenPM, this.state.rainfall_eightPM, this.state.rainfall_ninePM, this.state.rainfall_tenPM, this.state.rainfall_elevenPM ],
      fill: false,
      backgroundColor: '#05F8E5',
      borderColor: '#08C3B4',
      hoverBackgroundColor: '#08C3B4',
      hoverBorderColor: '#08C3B4',
      yAxisID: 'y-axis-1',
      xAxisID: 'x-axis-1'
    },
    {
      label: 'Alert',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FFFC33',
      borderColor: '#E2DF03',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FFFC33',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FFFC33',
      pointHoverBorderColor: '#E2DF03',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      type:'line',
      yAxisID: 'y-axis-2',
      data: [this.props.alert,this.props.alert,this.props.alert,this.props.alert,
	this.props.alert,this.props.alert,this.props.alert,this.props.alert,this.props.alert,
	this.props.alert,this.props.alert,this.props.alert,this.props.alert,this.props.alert,
	this.props.alert,this.props.alert,this.props.alert,this.props.alert,this.props.alert
	,this.props.alert,this.props.alert,this.props.alert,this.props.alert,this.props.alert
	],
    },
    {
      label: 'Warning',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FFB448',
      borderColor: '#FC9705',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FFB448',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FFB448',
      pointHoverBorderColor: '#FFB448',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      type:'line',
      yAxisID: 'y-axis-2',
      data: [this.props.warning,this.props.warning,this.props.warning,this.props.warning,
	this.props.warning,this.props.warning,this.props.warning,this.props.warning,this.props.warning,
	this.props.warning,this.props.warning,this.props.warning,this.props.warning,this.props.warning,
	this.props.warning,this.props.warning,this.props.warning,this.props.warning,this.props.warning
	,this.props.warning,this.props.warning,this.props.warning,this.props.warning,this.props.warning
	],
    },
    {
      label: 'Danger',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF0000',
      borderColor: '#D50303',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FF0000',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FF0000',
      pointHoverBorderColor: '#FF0000',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      type:'line',
      yAxisID: 'y-axis-2',
      data: [this.props.danger,this.props.danger,this.props.danger,this.props.danger,
	this.props.danger,this.props.danger,this.props.danger,this.props.danger,this.props.danger,
	this.props.danger,this.props.danger,this.props.danger,this.props.danger,this.props.danger,
	this.props.danger,this.props.danger,this.props.danger,this.props.danger,this.props.danger
	,this.props.danger,this.props.danger,this.props.danger,this.props.danger,this.props.danger
	],
    },
    {
      label: 'Forecast',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF0051',
      borderColor: '#D60145',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FF0051',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FF0051',
      pointHoverBorderColor: '#FF0051',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 30,
      yAxisID: 'y-axis-2',
      type:'line',
      data: [this.state.forecast_twelveAM, this.state.forecast_oneAM, this.state.forecast_twoAM, this.state.forecast_threeAM, this.state.forecast_fourAM, this.state.forecast_fiveAM, this.state.forecast_sixAM, this.state.forecast_sevenAM, this.state.forecast_eightAM, this.state.forecast_nineAM, this.state.forecast_tenAM, this.state.forecast_elevenAM, this.state.forecast_twelvePM, this.state.forecast_onePM, this.state.forecast_twoPM, this.state.forecast_threePM, this.state.forecast_fourPM, this.state.forecast_fivePM, this.state.forecast_sixPM, this.state.forecast_sevenPM, this.state.forecast_eightPM, this.state.forecast_ninePM, this.state.forecast_tenPM, this.state.forecast_elevenPM]
    }
    ]
};

const options2 = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        labels: {
          show: true
        },
        position: 'bottom',
        id: 'x-axis-1',
        ticks: {
        reverse: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        },
         ticks: {
          suggestedMin: 19,
          suggestedMax: 50
        },
        scaleLabel: {
          display: true,
          labelString: 'Water Level (m)'
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          reverse: true,
          suggestedMax: 40
        },
        scaleLabel: {
          display: true,
          labelString: 'Rainfall (mm)'
        },
        labels: {
          show: true
        }
      }
    ]
  }
};



return (
<div style={{"width" : "100%"}}> 
	<div className="row">
                    <div className="col-sm-12">
                    <h3>Rainfall Correlation</h3>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="clip-stats"></i> Sg. Kelantan di Kuala Krai Station Rainfall Chart
                                <div className="panel-tools">
                                    <a className="btn btn-xs btn-link panel-collapse collapses" href="index.html#">
                                    </a>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="flot-medium-container">
                                  <Bar data={data2} options={options2} />
                                </div>
                                <center><span className="label label-info">Date : {this.state.DateComponent}</span></center>
                            </div>
                        </div>
                    </div>
                </div>
</div>
);
}
}

export default StageRegression;
