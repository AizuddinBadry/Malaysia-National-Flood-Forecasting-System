import React, { Component } from 'react';
import './App.css';
import {Line, Bar} from 'react-chartjs-2';
import axios from 'axios';



class sg_kelantan_kuala_krai extends Component {
    
    constructor() {
        super();
        var today = new Date(),
        DateComponent =  today.getDate() + '/' +(today.getMonth() + 1) + '/' +   today.getFullYear();
        var past1Day = (today.getDate() - 1) + '-' +(today.getMonth() + 1) + '-' +   today.getFullYear();
        var past2Day = (today.getDate() - 2) + '-' +(today.getMonth() + 1) + '-' +   today.getFullYear();

        this.state = {
            past1Day: past1Day, past2Day: past2Day, DateComponent: DateComponent, current_status:[],
            oneAM: '',twoAM: '',threeAM: '',fourAM: '',fiveAM: '',sixAM: '',sevenAM: '',eightAM: '',nineAM: '',tenAM: '',elevenAM: '',
            twelvePM: '', onePM: '',twoPM: '',threePM: '',fourPM: '',fivePM: '',sixPM: '',sevenPM: '',eightPM: '',ninePM: '',tenPM: '',
            elevenPM: '',twelveAM: '',forecast_oneAM: '',forecast_twoAM: '',forecast_threeAM: '',forecast_fourAM: '',forecast_fiveAM: '',forecast_sixAM: '',forecast_sevenAM: '',forecast_eightAM: '',forecast_nineAM: '',forecast_tenAM: '',forecast_elevenAM: '',
            forecast_twelvePM: '', forecast_onePM: '',forecast_twoPM: '',forecast_threePM: '',forecast_fourPM: '',forecast_fivePM: '',forecast_sixPM: '',forecast_sevenPM: '',forecast_eightPM: '',forecast_ninePM: '',forecast_tenPM: '',
            forecast_elevenPM: '',forecast_twelveAM: '',
        };
    }

    

  componentDidMount() {
    var self = this;
    var water_level = []
    var forecasted = []
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&date='+ this.state.DateComponent).then(function (response) {self.setState({current_status : response.data});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=00:00&date='+ this.state.DateComponent).then(function (response) {self.setState({twelveAM : response.data[0].water_level, forecast_twelveAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=01:00&date='+ this.state.DateComponent).then(function (response) {self.setState({oneAM : response.data[0].water_level, forecast_oneAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=02:00&date='+ this.state.DateComponent).then(function (response) {self.setState({twoAM : response.data[0].water_level, forecast_twoAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=03:00&date='+ this.state.DateComponent).then(function (response) {self.setState({threeAM : response.data[0].water_level, forecast_threeAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=04:00&date='+ this.state.DateComponent).then(function (response) {self.setState({fourAM : response.data[0].water_level, forecast_fourAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=05:00&date='+ this.state.DateComponent).then(function (response) {self.setState({fiveAM : response.data[0].water_level, forecast_fiveAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=06:00&date='+ this.state.DateComponent).then(function (response) {self.setState({sixAM : response.data[0].water_level, forecast_sixAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=07:00&date='+ this.state.DateComponent).then(function (response) {self.setState({sevenAM : response.data[0].water_level, forecast_sevenAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=08:00&date='+ this.state.DateComponent).then(function (response) {self.setState({eightAM : response.data[0].water_level, forecast_eightAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=09:00&date='+ this.state.DateComponent).then(function (response) {self.setState({nineAM : response.data[0].water_level, forecast_nineAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=10:00&date='+ this.state.DateComponent).then(function (response) {self.setState({tenAM : response.data[0].water_level, forecast_tenAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=11:00&date='+ this.state.DateComponent).then(function (response) {self.setState({elevenAM : response.data[0].water_level, forecast_elevenAM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=12:00&date='+ this.state.DateComponent).then(function (response) {self.setState({twelvePM : response.data[0].water_level, forecast_twelvePM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=13:00&date='+ this.state.DateComponent).then(function (response) {self.setState({onePM : response.data[0].water_level, forecast_onePM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=14:00&date='+ this.state.DateComponent).then(function (response) {self.setState({twoPM : response.data[0].water_level, forecast_twoPM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=15:00&date='+ this.state.DateComponent).then(function (response) {self.setState({threePM : response.data[0].water_level, forecast_threePM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=16:00&date='+ this.state.DateComponent).then(function (response) {self.setState({fourPM : response.data[0].water_level, forecast_fourPM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=17:00&date='+ this.state.DateComponent).then(function (response) {self.setState({fivePM : response.data[0].water_level, forecast_fivePM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=18:00&date='+ this.state.DateComponent).then(function (response) {self.setState({sixPM : response.data[0].water_level, forecast_sixPM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=19:00&date='+ this.state.DateComponent).then(function (response) {self.setState({sevenPM : response.data[0].water_level, forecast_sevenPM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=20:00&date='+ this.state.DateComponent).then(function (response) {self.setState({eightPM : response.data[0].water_level, forecast_eightPM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=21:00&date='+ this.state.DateComponent).then(function (response) {self.setState({ninePM : response.data[0].water_level, forecast_ninePM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=22:00&date='+ this.state.DateComponent).then(function (response) {self.setState({tenPM : response.data[0].water_level, forecast_tenPM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});
    axios.get('https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan%20di%20Kuala%20Krai&time=23:00&date='+ this.state.DateComponent).then(function (response) {self.setState({elevenPM : response.data[0].water_level, forecast_elevenPM: response.data[0].stage_forecast});}).catch(function (error) {console.log(error);});

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
    const data = {
  labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', 
            '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '22.00', 
            '22.00', '23.00', ],
  datasets: [
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
      data: [25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00],
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
      data: [22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50]
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
      data: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
    },
    
    {
      label: 'Current',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#0097FF',
      borderColor: '#0076C7',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#0097FF',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0097FF',
      pointHoverBorderColor: '#0097FF',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [this.state.twelveAM, this.state.oneAM, this.state.twoAM, this.state.threeAM, this.state.fourAM, this.state.fiveAM, this.state.sixAM, this.state.sevenAM, this.state.eightAM, this.state.nineAM, this.state.tenAM, this.state.elevenAM, this.state.twelvePM, this.state.onePM, this.state.twoPM, this.state.threePM, this.state.fourPM, this.state.fivePM, this.state.sixPM, this.state.sevenPM, this.state.eightPM, this.state.ninePM, this.state.tenPM, this.state.elevenPM]
    },
     {
      label: 'Forecast',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF0051',
      borderColor: '#D60145',
      borderCapStyle: 'butt',
      borderDash: [10],
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
      data: [this.state.forecast_twelveAM, this.state.forecast_oneAM, this.state.forecast_twoAM, this.state.forecast_threeAM, this.state.forecast_fourAM, this.state.forecast_fiveAM, this.state.forecast_sixAM, this.state.forecast_sevenAM, this.state.forecast_eightAM, this.state.forecast_nineAM, this.state.forecast_tenAM, this.state.forecast_elevenAM, this.state.forecast_twelvePM, this.state.forecast_onePM, this.state.forecast_twoPM, this.state.forecast_threePM, this.state.forecast_fourPM, this.state.forecast_fivePM, this.state.forecast_sixPM, this.state.forecast_sevenPM, this.state.forecast_eightPM, this.state.forecast_ninePM, this.state.forecast_tenPM, this.state.forecast_elevenPM]
    }
  ],
};

const data3 = {
  labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', 
            '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '22.50.00', 
            '22.00', '23.00', ],
  datasets: [
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
      data: [25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00],
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
      data: [22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50]
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
      data: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
    },
    
    {
      label: 'Current',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#0097FF',
      borderColor: '#0076C7',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#0097FF',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0097FF',
      pointHoverBorderColor: '#0097FF',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [19.31, 17.32, 17.15, 18.15, 18.40, 18.35, 19.55, 18.32, 18.25, 18.15, 18.40, 18.35, 18.15, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32]
    },
     {
      label: 'Forecast',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF0051',
      borderColor: '#D60145',
      borderCapStyle: 'butt',
      borderDash: [10],
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
      data: [18.35, 18.37, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37, 18.38, 18.28, 18.43, 18.88, 18.58, 18.37, 18.28, 18.22, 18.43, 18.88, 18.58, 18.47, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37]
    }
  ],
};

const data2 = {
   labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', 
            '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '22.50.00', 
            '22.00', '23.00', ],
  datasets: [{
      label: 'Water Level',
      type:'line',
      data: [18.31, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32],
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
      data: [200, 185, 390, 321, 250, 400, 95, 200, 185, 390, 321, 250, 400, 95, 200, 185, 390, 321, 250, 400, 95, 250, 400, 95, ],
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
      data: [25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00, 25.00],
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
      data: [22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50, 22.50]
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
      data: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
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
      data: [18.35, 18.37, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37, 18.38, 18.28, 18.43, 18.88, 18.58, 18.37, 18.28, 18.22, 18.43, 18.88, 18.58, 18.47, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37, 18.28, 18.18, 18.43, 18.88]
    }
    ]
};

const tankModelData = {
   labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', 
            '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '22.50.00', 
            '22.00', '23.00', ],
  datasets: [{
      label: 'Water Level',
      type:'line',
      data: [18.31, 18.32, 18.25, 18.15, 18.40, 18.45, 18.45, 18.32, 18.25, 18.15, 18.40, 18.25, 18.35, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32, 18.25, 18.15, 18.40, 18.85, 18.55, 18.32, 18.25, 18.15, 18.40, 18.85],
      fill: false,
      backgroundColor: '#0097FF',
      borderColor: '#0076C7',
      pointBorderColor: '#0097FF',
      pointBackgroundColor: '#0097FF',
      pointHoverBackgroundColor: '#0097FF',
      pointHoverBorderColor: '#0076C7',
      yAxisID: 'y-axis-2'
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
      data: [18.35, 18.37, 18.28, 18.18, 18.43, 18.48, 18.48, 18.37, 18.38, 18.28, 18.43, 18.28, 18.28, 18.37, 18.28, 18.22, 18.43, 18.88, 18.58, 18.47, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37, 18.28, 18.18, 18.43, 18.88]
    },
    {
      type: 'bar',
      label: 'Rainfall',
      data: [200, 185, 230, 221, 250, 200, 95, 200, 185, 290, 221, 250, 200, 95, 200, 185, 290, 421, 350, 300, 95, 250, 400, 95, ],
      fill: false,
      backgroundColor: '#05F8E5',
      borderColor: '#08C3B4',
      hoverBackgroundColor: '#08C3B4',
      hoverBorderColor: '#08C3B4',
      yAxisID: 'y-axis-1',
      xAxisID: 'x-axis-1'
    }
    ]
};

const unitHydrographData = {
   labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', 
            '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '22.50.00', 
            '22.00', '23.00', ],
  datasets: [{
      label: 'Water Level',
      type:'line',
      data: [18.31, 18.32, 18.25, 18.15, 18.40, 18.45, 18.45, 18.32, 19.25, 18.15, 18.40, 18.25, 18.35, 18.32, 18.25, 18.15, 18.40, 18.45, 18.55, 18.32, 18.25, 18.15, 18.40, 18.45, 18.55],
      fill: false,
      backgroundColor: '#0097FF',
      borderColor: '#0076C7',
      pointHoverBackgroundColor: '#0097FF',
      pointHoverBorderColor: '#0076C7',
      pointRadius: 1,
      yAxisID: 'y-axis-2'
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
      data: [18.35, 18.37, 18.28, 18.18, 18.43, 18.48, 18.48, 18.37, 19.38, 18.28, 18.43, 18.28, 18.28, 18.37, 18.28, 18.22, 18.43, 18.88, 18.58, 18.47, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37, 18.28, 18.18, 18.43, 18.88, 18.58, 18.37, 18.28, 18.18, 18.43, 18.88]
    },
    {
      type: 'bar',
      label: 'Rainfall',
      data: [100, 135, 130, 121, 150, 90, 95, 100, 405, 190, 221, 250, 200, 95, 200, 185, 290, 321, 350, 300, 95, 250, 300, 95, ],
      fill: false,
      backgroundColor: '#05F8E5',
      borderColor: '#08C3B4',
      hoverBackgroundColor: '#08C3B4',
      hoverBorderColor: '#08C3B4',
      yAxisID: 'y-axis-1',
      xAxisID: 'x-axis-1'
    }
    ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
    {
      scaleLabel: {
        display: true,
        labelString: 'Water Level (m)'
      },
      ticks: {
          suggestedMin: 19,
          suggestedMax: 30
        },
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Time'
      }
    }]
  }
}

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
          suggestedMax: 30
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
          suggestedMax: 1000
                
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

const tankModelOption = {
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
          suggestedMax: 20
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
          suggestedMax: 1000
                
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

const unitHydrographOption = {
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
          suggestedMax: 30
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
          suggestedMax: 800
                
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
      <div className="main-content">
      <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-header">
                            <center>
                              <h1>Sg. Kelantan di Kuala Krai</h1><br/>
                              <span className="label label-info"> {this.state.DateComponent}</span>
                            </center>

                        </div>
                    </div>
                </div>
            
                <div className="row">
               
                    <div className="col-sm-12">
                    <h3>Stage Regression</h3>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="clip-stats"></i> Sg. Kelantan di Kuala Krai Station Regression Chart
                                <div className="panel-tools">
                                    <a className="btn btn-xs btn-link panel-collapse collapses">
                                    </a>
                                </div>
                            </div>
                            <div className="panel-body">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="flot-medium-container">
                                     <Line data={data} options={options} />
                                     
                                </div>
                               
                                </div>
                            </div>
                                <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <i className="fa fa-external-link-square"></i> Current Water Level Status
                                        <div className="panel-tools">
                                            <a className="btn btn-xs btn-link panel-collapse collapses">
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <table className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="center">Time</th>
                                                    <th className="center">River Level</th>
                                                     <th className="center">Forecast</th>
                                                    <th className="center">Normal</th>
                                                    <th className="center">Alert</th>
                                                    <th className="center">Warning</th>
                                                    <th className="center">Danger</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {current_status}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                <div id="container" ></div>
                            </div>

                        </div>
                    </div>
                </div>
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

                <div id="container" ></div>

                <div className="row">
                    <div className="col-sm-12">
                    <h3>Tank Model</h3>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="clip-stats"></i> Sg. Kelantan di Kuala Krai Station Tank Model Chart
                                <div className="panel-tools">
                                    <a className="btn btn-xs btn-link panel-collapse collapses" href="index.html#">
                                    </a>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="flot-medium-container">
                                    <Bar data={tankModelData} options={tankModelOption} />
                                </div>
                                 <center><span className="label label-info">Date : {this.state.DateComponent}</span></center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                    <h3>Unit Hydrograph</h3>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="clip-stats"></i> Sg. Kelantan di Kuala Krai Station Unit Hydrograph Chart
                                <div className="panel-tools">
                                    <a className="btn btn-xs btn-link panel-collapse collapses" href="index.html#">
                                    </a>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="flot-medium-container">
                                 <Bar data={unitHydrographData} options={unitHydrographOption} />
                                </div>
                                 <center><span className="label label-info">Date : {this.state.DateComponent}</span></center>
                            </div>
                        </div>
                    </div>
                </div>
              <div id="container" ></div>
                <div className="row">

                                    <div className="col-sm-12">
                                    <h3>Past Water Level Record</h3>
                                        <div className="tabbable">
                                            <ul id="myTab4" className="nav nav-tabs tab-padding tab-space-3 tab-blue">
                                                <li className="active">
                                                    <a href="ui_tabs_accordions.html#monday" data-toggle="tab" aria-expanded="false">
                                                        Past 1 Days
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_tabs_accordions.html#tuesday" data-toggle="tab" aria-expanded="true">
                                                        Past 2 Days
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="ui_tabs_accordions.html#wednesday" data-toggle="tab" aria-expanded="false">
                                                        Past 3 Days
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="ui_tabs_accordions.html#thursday" data-toggle="tab" aria-expanded="false">
                                                        Past 4 Days
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="ui_tabs_accordions.html#friday" data-toggle="tab" aria-expanded="false">
                                                        Past 5 Days
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="monday">
                                                 <center><span className="label label-info">Record for : {this.state.past1Day}</span></center>
                                                  <div className="panel-body">
                                                    <div className="flot-medium-container">
                                                      <Line data={data3} options={options} />
                                                    </div>
                                                     <table className="table table-hover">
                                                      <thead>
                                                          <tr>
                                                             <th className="center">Time</th>
                                                              <th className="center">River Level</th>
                                                               <th className="center">Forecast</th>
                                                              <th className="center">Normal</th>
                                                              <th className="center">Alert</th>
                                                              <th className="center">Warning</th>
                                                              <th className="center">Danger</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          {current_status}
                                                      </tbody>
                                                  </table>
                                                </div>
                                                </div>
                                                <div className="tab-pane" id="tuesday">
                                                  <center><span className="label label-info">Record for : {this.state.past2Day}</span></center>
                                                    <div className="panel-body">
                                                    <div className="flot-medium-container">
                                                       <Line data={data3} options={options} />
                                                    </div>
                                                     <table className="table table-hover">
                                                      <thead>
                                                          <tr>
                                                             <th className="center">Time</th>
                                                              <th className="center">River Level</th>
                                                              <th className="center">Forecast</th>
                                                              <th className="center">Normal</th>
                                                              <th className="center">Alert</th>
                                                              <th className="center">Warning</th>
                                                              <th className="center">Danger</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          {current_status}
                                                      </tbody>
                                                  </table>
                                                </div>
                                                </div>
                                                <div className="tab-pane" id="wednesday">
                                                    <div className="panel-body">
                                                    <div className="flot-medium-container">
                                                        <Line data={data} options={options} />
                                                    </div>
                                                     <table className="table table-hover">
                                                      <thead>
                                                          <tr>
                                                              <th className="center">Station ID</th>
                                                              <th className="center">Station Name</th>
                                                              <th className="center">River Basin</th>
                                                              <th className="center">Time</th>
                                                              <th className="center">River Level</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          
                                                      </tbody>
                                                  </table>
                                                </div>
                                                </div>
                                                  <div className="tab-pane" id="thursday">
                                                  <div className="panel-body">
                                                    <div className="flot-medium-container">
                                                       <Line data={data} options={options} />
                                                    </div>
                                                     <table className="table table-hover">
                                                      <thead>
                                                          <tr>
                                                              <th className="center">Station ID</th>
                                                              <th className="center">Station Name</th>
                                                              <th className="center">River Basin</th>
                                                              <th className="center">Time</th>
                                                              <th className="center">River Level</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          
                                                      </tbody>
                                                  </table>
                                                </div>
                                                </div>
                                                  <div className="tab-pane" id="friday">
                                                   <div className="panel-body">
                                                    <div className="flot-medium-container">
                                                       <Line data={data} options={options} />
                                                    </div>
                                                     <table className="table table-hover">
                                                      <thead>
                                                          <tr>
                                                              <th className="center">Station ID</th>
                                                              <th className="center">Station Name</th>
                                                              <th className="center">River Basin</th>
                                                              <th className="center">Time</th>
                                                              <th className="center">River Level</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          
                                                      </tbody>
                                                  </table>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                    <div className="footer clearfix">
                                      <div className="footer-inner">
                                         &copy; NaFFWS Kelantan 
                                      </div>
                                      <div className="footer-items">
                                          <span className="go-top"><i className="clip-chevron-up"></i></span>
                                      </div>
                                  </div>
                    </div>
            </div>
    );
  }
}

export default sg_kelantan_kuala_krai;
