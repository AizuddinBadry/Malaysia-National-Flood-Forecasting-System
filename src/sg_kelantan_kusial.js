import React, { Component } from 'react';
import StageRegression from './Resource/stage_regression'
import RainfallCorrelation from './Resource/rainfall_correlation'
import PastRecord from './Resource/past_record'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';




class sg_kelantan_jeti_kastam extends Component {
    
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
            forecast_elevenPM: '',forecast_twelveAM: '',startDate: moment(),
        };
        this.handleChange = this.handleChange.bind(this)
    }

    

  componentDidMount() {
    }

  handleChange(date) {
    var self = this;
    var newDate = date;
      self.setState({
        startDate: newDate
      });
    }

  render() {

    return (
      <div className="main-content">
      <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-header">
                            <center>
                              <h1>Sg.Kelantan di Kusial</h1><br/>
                              <h1><span className="label label-info"> {this.state.DateComponent}</span></h1>
                            </center>

                        </div>
                    </div>
                </div>
            
                <StageRegression station="Sg.Kelantan di Kusial" normal="10.00" alert="12.00" warning="14.00" danger="16.00"/>
                <RainfallCorrelation station="Sg.Kelantan di Kusial" normal="10.00" alert="12.00" warning="14.00" danger="16.00"/>
                
              
              <div className="row">
                <div className="col-sm-12">
                  <h3>Past Water Level Record</h3>
                  <center>
                  Please Select Date
                  <DatePicker
                    dateFormat="D/M/YYYY"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    minDate={moment().subtract(7, 'days')}
                    maxDate={moment()}
                    placeholderText="Select a date between today and 7 days backwards"
                  />
                  </center>
                  
                    <PastRecord date={moment(this.state.startDate).format('D/M/YYYY')} station="Sg.Kelantan di Kusial" normal="10.00" alert="12.00" warning="14.00" danger="16.00"/>

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

export default sg_kelantan_jeti_kastam;
