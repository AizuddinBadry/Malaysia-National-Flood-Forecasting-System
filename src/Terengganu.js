import React, { Component } from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import $ from "jquery";

class Terengganu extends Component {

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
    $.ajax({
            url: "http://banjir-api-azd.herokuapp.com/trg",
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                console.log(res);
            }
        });
}
  render() {
   const data = [
      {name: '6.00 AM', '5524401': 0.10, '5426401': 0.10, '5428440': 0.50, '4934041': 0.30, '5029433': 0.40, '5130432': 0.50, '5031401': 0.60, '5624411': 0.70, '4730401': 0.80, '4832441': 0.90, '4131453': 1.00, '4233453': 2.50, '5331410': 3.50},
      {name: '7.00 AM', '5524401': 1.17, '5426401': 0.50, '5428440': 0.30, '4934041': 0.30, '5029433': 0.40, '5130432': 0.50, '5031401': 0.60, '5624411': 0.70, '4730401': 0.80, '4832441': 0.90, '4131453': 1.00, '4233453': 2.50, '5331410': 3.50},
      {name: '8.00 AM', '5524401': 0.12, '5426401': 0.20, '5428440': 0.17, '4934041': 0.30, '5029433': 0.40, '5130432': 0.50, '5031401': 0.60, '5624411': 0.70, '4730401': 0.80, '4832441': 0.90, '4131453': 1.00, '4233453': 2.50, '5331410': 3.50},
      {name: '9.00 AM', '5524401': 2.30, '5426401': 0.58, '5428440': 1.20, '4934041': 0.30, '5029433': 0.40, '5130432': 0.50, '5031401': 0.60, '5624411': 0.70, '4730401': 0.80, '4832441': 0.90, '4131453': 1.00, '4233453': 2.50, '5331410': 3.50},
      {name: '10.00 AM', '5524401': 0.40, '5426401': 3.10, '5428440': 2.20, '4934041': 0.30, '5029433': 0.40, '5130432': 0.50, '5031401': 0.60, '5624411': 0.70, '4730401': 0.80, '4832441': 0.90, '4131453': 1.00, '4233453': 2.50, '5331410': 3.50},
      {name: '11.00 AM', '5524401': 0.66, '5426401': 1.10, '5428440': 0.40, '4934041': 0.30, '5029433': 0.40, '5130432': 0.50, '5031401': 0.60, '5624411': 0.70, '4730401': 0.80, '4832441': 0.90, '4131453': 1.00, '4233453': 2.50, '5331410': 3.50},
      {name: '12.00 PM', '5524401': 0.90, '5426401': 2.10, '5428440': 0.60, '4934041': 0.30, '5029433': 0.40, '5130432': 0.50, '5031401': 0.60, '5624411': 0.70, '4730401': 0.80, '4832441': 0.90, '4131453': 1.00, '4233453': 2.50, '5331410': 3.50},
];

    return (
      <div className="main-content">
      <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-header">
                            <h1>Terengganu <small> </small></h1>
                        </div>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="clip-stats"></i> Terengganu Water Level Chart
                                <div className="panel-tools">
                                    <a className="btn btn-xs btn-link panel-collapse collapses" href="index.html#">
                                    </a>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="flot-medium-container">
                                    <LineChart width={950} height={300} data={data}
                                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                     <XAxis dataKey="name"/>
                                     <YAxis/>
                                     <CartesianGrid strokeDasharray="3 3"/>
                                     <Tooltip/>
                                     <Legend />
                                     <Line type="monotone" dataKey="5524401" stroke="blue" />
                                     <Line type="monotone" dataKey="5426401" stroke="red" />
                                     <Line type="monotone" dataKey="5428440" stroke="green" />
                                     <Line type="monotone" dataKey="4934041" stroke="gray" />
                                     <Line type="monotone" dataKey="5029433" stroke="black" />
                                     <Line type="monotone" dataKey="5130432" stroke="gray" />
                                     <Line type="monotone" dataKey="5031401" stroke="black" />
                                     <Line type="monotone" dataKey="5624411" stroke="gray" />
                                     <Line type="monotone" dataKey="4730401" stroke="black" />
                                     <Line type="monotone" dataKey="4832441" stroke="gray" />
                                     <Line type="monotone" dataKey="4131453" stroke="black" />
                                     <Line type="monotone" dataKey="4233453" stroke="gray" />
                                     <Line type="monotone" dataKey="5331410" stroke="black" />
                                    </LineChart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="fa fa-external-link-square"></i> Current Water Level Status
                                <div className="panel-tools">
                                    <a className="btn btn-xs btn-link panel-collapse collapses" href="table_static.html#">
                                    </a>
                                </div>
                            </div>
                            <div className="panel-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th className="center">Station ID</th>
                                            <th className="center">Station Name</th>
                                            <th className="center">River Basin</th>
                                            <th className="center">Last Update</th>
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
                <div className="row">

                                    <div className="col-sm-12">
                                    Past Water Level Record
                                        <div className="tabbable">
                                            <ul id="myTab4" className="nav nav-tabs tab-padding tab-space-3 tab-blue">
                                                <li className="active">
                                                    <a href="ui_tabs_accordions.html#monday" data-toggle="tab" aria-expanded="false">
                                                        Monday
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_tabs_accordions.html#tuesday" data-toggle="tab" aria-expanded="true">
                                                        Tuesday
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="ui_tabs_accordions.html#wednesday" data-toggle="tab" aria-expanded="false">
                                                        Wednesday
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="ui_tabs_accordions.html#thursday" data-toggle="tab" aria-expanded="false">
                                                        Thursday
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="ui_tabs_accordions.html#friday" data-toggle="tab" aria-expanded="false">
                                                        Friday
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="monday">
                                                  <div className="panel-body">
                                                    <div className="flot-medium-container">
                                                        <LineChart width={950} height={300} data={data}
                                                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                         <XAxis dataKey="name"/>
                                                         <YAxis/>
                                                         <CartesianGrid strokeDasharray="3 3"/>
                                                         <Tooltip/>
                                                         <Legend />
                                                         <Line type="monotone" dataKey="5524401" stroke="blue" />
                                                         <Line type="monotone" dataKey="5426401" stroke="red" />
                                                         <Line type="monotone" dataKey="5428440" stroke="green" />
                                                         <Line type="monotone" dataKey="4934041" stroke="gray" />
                                                         <Line type="monotone" dataKey="5029433" stroke="black" />
                                                         <Line type="monotone" dataKey="5130432" stroke="gray" />
                                                         <Line type="monotone" dataKey="5031401" stroke="black" />
                                                         <Line type="monotone" dataKey="5624411" stroke="gray" />
                                                         <Line type="monotone" dataKey="4730401" stroke="black" />
                                                         <Line type="monotone" dataKey="4832441" stroke="gray" />
                                                         <Line type="monotone" dataKey="4131453" stroke="black" />
                                                         <Line type="monotone" dataKey="4233453" stroke="gray" />
                                                         <Line type="monotone" dataKey="5331410" stroke="black" />
                                                        </LineChart>
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
                                                <div className="tab-pane" id="tuesday">
                                                    <div className="panel-body">
                                                    <div className="flot-medium-container">
                                                        <LineChart width={950} height={300} data={data}
                                                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                         <XAxis dataKey="name"/>
                                                         <YAxis/>
                                                         <CartesianGrid strokeDasharray="3 3"/>
                                                         <Tooltip/>
                                                         <Legend />
                                                         <Line type="monotone" dataKey="5524401" stroke="blue" />
                                                         <Line type="monotone" dataKey="5426401" stroke="red" />
                                                         <Line type="monotone" dataKey="5428440" stroke="green" />
                                                         <Line type="monotone" dataKey="4934041" stroke="gray" />
                                                         <Line type="monotone" dataKey="5029433" stroke="black" />
                                                         <Line type="monotone" dataKey="5130432" stroke="gray" />
                                                         <Line type="monotone" dataKey="5031401" stroke="black" />
                                                         <Line type="monotone" dataKey="5624411" stroke="gray" />
                                                         <Line type="monotone" dataKey="4730401" stroke="black" />
                                                         <Line type="monotone" dataKey="4832441" stroke="gray" />
                                                         <Line type="monotone" dataKey="4131453" stroke="black" />
                                                         <Line type="monotone" dataKey="4233453" stroke="gray" />
                                                         <Line type="monotone" dataKey="5331410" stroke="black" />
                                                        </LineChart>
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
                                                <div className="tab-pane" id="wednesday">
                                                    <div className="panel-body">
                                                    <div className="flot-medium-container">
                                                        <LineChart width={950} height={300} data={data}
                                                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                         <XAxis dataKey="name"/>
                                                         <YAxis/>
                                                         <CartesianGrid strokeDasharray="3 3"/>
                                                         <Tooltip/>
                                                         <Legend />
                                                         <Line type="monotone" dataKey="5524401" stroke="blue" />
                                                         <Line type="monotone" dataKey="5426401" stroke="red" />
                                                         <Line type="monotone" dataKey="5428440" stroke="green" />
                                                         <Line type="monotone" dataKey="4934041" stroke="gray" />
                                                         <Line type="monotone" dataKey="5029433" stroke="black" />
                                                         <Line type="monotone" dataKey="5130432" stroke="gray" />
                                                         <Line type="monotone" dataKey="5031401" stroke="black" />
                                                         <Line type="monotone" dataKey="5624411" stroke="gray" />
                                                         <Line type="monotone" dataKey="4730401" stroke="black" />
                                                         <Line type="monotone" dataKey="4832441" stroke="gray" />
                                                         <Line type="monotone" dataKey="4131453" stroke="black" />
                                                         <Line type="monotone" dataKey="4233453" stroke="gray" />
                                                         <Line type="monotone" dataKey="5331410" stroke="black" />
                                                        </LineChart>
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
                                                        <LineChart width={950} height={300} data={data}
                                                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                         <XAxis dataKey="name"/>
                                                         <YAxis/>
                                                         <CartesianGrid strokeDasharray="3 3"/>
                                                         <Tooltip/>
                                                         <Legend />
                                                         <Line type="monotone" dataKey="5524401" stroke="blue" />
                                                         <Line type="monotone" dataKey="5426401" stroke="red" />
                                                         <Line type="monotone" dataKey="5428440" stroke="green" />
                                                         <Line type="monotone" dataKey="4934041" stroke="gray" />
                                                         <Line type="monotone" dataKey="5029433" stroke="black" />
                                                         <Line type="monotone" dataKey="5130432" stroke="gray" />
                                                         <Line type="monotone" dataKey="5031401" stroke="black" />
                                                         <Line type="monotone" dataKey="5624411" stroke="gray" />
                                                         <Line type="monotone" dataKey="4730401" stroke="black" />
                                                         <Line type="monotone" dataKey="4832441" stroke="gray" />
                                                         <Line type="monotone" dataKey="4131453" stroke="black" />
                                                         <Line type="monotone" dataKey="4233453" stroke="gray" />
                                                         <Line type="monotone" dataKey="5331410" stroke="black" />
                                                        </LineChart>
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
                                                        <LineChart width={950} height={300} data={data}
                                                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                                         <XAxis dataKey="name"/>
                                                         <YAxis/>
                                                         <CartesianGrid strokeDasharray="3 3"/>
                                                         <Tooltip/>
                                                         <Legend />
                                                         <Line type="monotone" dataKey="5524401" stroke="blue" />
                                                         <Line type="monotone" dataKey="5426401" stroke="red" />
                                                         <Line type="monotone" dataKey="5428440" stroke="green" />
                                                         <Line type="monotone" dataKey="4934041" stroke="gray" />
                                                         <Line type="monotone" dataKey="5029433" stroke="black" />
                                                         <Line type="monotone" dataKey="5130432" stroke="gray" />
                                                         <Line type="monotone" dataKey="5031401" stroke="black" />
                                                         <Line type="monotone" dataKey="5624411" stroke="gray" />
                                                         <Line type="monotone" dataKey="4730401" stroke="black" />
                                                         <Line type="monotone" dataKey="4832441" stroke="gray" />
                                                         <Line type="monotone" dataKey="4131453" stroke="black" />
                                                         <Line type="monotone" dataKey="4233453" stroke="gray" />
                                                         <Line type="monotone" dataKey="5331410" stroke="black" />
                                                        </LineChart>
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
                      <script>
                          document.write(new Date().getFullYear())
                      </script> &copy; UNITEN Banjir Web App
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

export default Terengganu;
