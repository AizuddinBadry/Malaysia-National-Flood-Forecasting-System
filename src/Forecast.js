import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import {Line, Bar} from 'react-chartjs-2';



class Forecast extends Component {
    
    constructor() {
        super();
        var today = new Date(),
        DateComponent =  today.getDate() + '-' +(today.getMonth() + 1) + '-' +   today.getFullYear();

        this.state = {
            DateComponent: DateComponent, current_status:[],
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
            $.ajax({
                    url: "https://banjirv2.herokuapp.com/Kelantan?station_name=Sg.Kelantan di Kuala Krai&date=7-12-2017",
                    type: 'GET',
                    dataType: 'json',
                    success: function(res) {
                        for(var i=0;i<res.length;i++) {
                        water_level.push(+res[i]['water_level']);
                        forecasted.push(+res[i]['forcasted']);
                      };
                        console.log(res);
                        self.setState({oneAM:water_level[0],twoAM:water_level[1],threeAM: water_level[2],fourAM: water_level[3],fiveAM: water_level[4],sixAM: water_level[5],sevenAM: water_level[6],eightAM: water_level[7],nineAM: water_level[8],tenAM: water_level[9],elevenAM: water_level[10],
                           twelvePM: water_level[11], onePM: water_level[12],twoPM: water_level[13],threePM: water_level[14],fourPM: water_level[15],fivePM: water_level[16],sixPM: water_level[17],sevenPM: water_level[18],eightPM: water_level[19],ninePM: water_level[20],tenPM: water_level[21], 
                            elevenPM: water_level[22],twelveAM: water_level[23], current_status:res, forecast_oneAM:forecasted[0],forecast_twoAM:forecasted[1],forecast_threeAM: forecasted[2],forecast_fourAM: forecasted[3],forecast_fiveAM: forecasted[4],forecast_sixAM: forecasted[5],forecast_sevenAM: forecasted[6],forecast_eightAM: forecasted[7],forecast_nineAM: forecasted[8],forecast_tenAM: forecasted[9],forecast_elevenAM: forecasted[10],
                           forecast_twelvePM: forecasted[11], forecast_onePM: forecasted[12],forecast_twoPM: forecasted[13],forecast_threePM: forecasted[14],forecast_fourPM: forecasted[15],forecast_fivePM: forecasted[16],forecast_sixPM: forecasted[17],forecast_sevenPM: forecasted[18],forecast_eightPM: forecasted[19],forecast_ninePM: forecasted[20],forecast_tenPM: forecasted[21], 
                            forecast_elevenPM: forecasted[22],forecast_twelveAM: forecasted[23],
                        });
                       
                    },
                  
                });
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
        <td className="center">{18.37}</td>
        <td className="center" style={{backgroundColor: bgColors.Green}}>17.00</td>
        <td className="center" style={{backgroundColor: bgColors.Yellow}}>20.00</td>
        <td className="center" style={{backgroundColor: bgColors.Orange}}>22.50</td>
        </tr>
    );
    return (
      <div className="main-content">
      <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-header">
                            <center>
                              <h3>Water Level Forecast</h3><br/>
                              <span className="label label-info"> {this.state.DateComponent}</span>
                            </center>

                        </div>
                    </div>
                </div>
            
                <div className="row">
               
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="clip-stats"></i> Kelantan Station Water Level Forecast
                                <div className="panel-tools">
                                    <a className="btn btn-xs btn-link panel-collapse collapses">
                                    </a>
                                </div>
                            </div>
                            <div className="panel-body">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="panel panel-default">
                                    
                                        <table className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="center">Station Name</th>
                                                    <th className="center">Last Forecast (m)</th>
                                                     <th className="center">+6 Hours (m)</th>
                                                    <th className="center">+12 Hours (m)</th>
                                                    <th className="center">+24 Hours (m)</th>
                                                    <th className="center">+48 Hours (m)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                 <tr>
                                                  <td className="center">Sg. Lebir di Kuala Koh</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>18.02</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>18.27</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>18.00</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>18.18</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>18.50</td>
                                                  </tr>
                                                  <tr>
                                                  <td className="center">Sg. Galas di Limau Kasturi</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>7.02</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>7.27</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>7.00</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Orange}}>8.18</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>7.50</td>
                                                  </tr>
                                                  <tr>
                                                  <td className="center">Sg. Lebir di Dabong</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>15.22</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>15.17</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>15.70</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>15.88</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>15.71</td>
                                                  </tr>
                                                   <tr>
                                                  <td className="center">Sg. Lebir di Dabong</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>18.02</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>18.27</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Orange}}>22.00</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Yellow}}>21.18</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Orange}}>22.50</td>
                                                  </tr>
                                                   <tr>
                                                  <td className="center">Sg. Lebir di Tualang</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Red}}>14.02</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>11.27</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>11.00</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Yellow}}>12.18</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>11.50</td>
                                                  </tr>
                                                   <tr>
                                                  <td className="center">Sg. Kelantan di Kuala Krai</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>14.02</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>14.27</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>14.00</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>14.18</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>14.50</td>
                                                  </tr>
                                                   <tr>
                                                  <td className="center">Sg. Kelantan di Kusial</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>16.62</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>16.87</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>16.80</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>16.88</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>16.10</td>
                                                  </tr>
                                                   <tr>
                                                  <td className="center">Sg. Golok di Jenob</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>13.02</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>13.27</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>14.00</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>13.18</td>
                                                  <td className="center" style={{backgroundColor: bgColors.Green}}>13.50</td>
                                                  </tr>
                                            </tbody>
                                        </table>
                                    
                                </div>
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

export default Forecast;
