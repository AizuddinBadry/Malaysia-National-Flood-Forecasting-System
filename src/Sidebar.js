import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//Kuala krai
import Station5521444 from './sg_kelantan_kuala_krai';
import Station5320443 from './sg_lebir_dabong';
import Station5222452 from './sg_lebir_tualang';

//Gua Musang
import Station5020401 from './sg_galas_limau_kasturi';
import Station4824401 from './sg_lebir_kuala_koh';

//Tanah Merah
import Station5721442 from './sg_kelantan_kusial';
import Station5818401 from './sg_golok_jenob';

//Kota Bharu
import Station6122441 from './sg_kelantan_jeti_kastam';
import Station6021465 from './sg_kelantan_air_mulih';
//import Station5020401 from './sg_golok_rantau_panjang';
import Station5919403 from './empangan_bukit_kwong';

//Pasir Mas
import Station5824401 from './sg_semerak_pasir_putih';

//Pasir Puteh
//import Station5020401 from './sg_pagau_air_bol';

//Tumpat
import Station6120401 from './sg_golok_kuala_jambu';

import Forecast from './Forecast';

const routes = [
  { path: '/',
    exact: true,
    main: () => <h2>Home</h2>
  },
  { path: '/sg_lebir_kuala_koh',
    main: () => <Station4824401/>
  },
  { path: '/sg_galas_limau_kasturi',
    main: () => <Station5020401/>
  },
  { path: '/sg_lebir_dabong',
    main: () => <Station5320443/>
  },
  { path: '/sg_lebir_tualang',
    main: () => <Station5222452/>
  },
  { path: '/sg_kelantan_kuala_krai',
    main: () => <Station5521444/>
  },
   { path: '/sg_kelantan_kusial',
    main: () => <Station5721442/>
  },
   { path: '/sg_golok_jenob',
    main: () => <Station5818401/>
  },
   { path: '/sg_kelantan_jeti_kastam',
    main: () => <Station6122441/>
  },
   { path: '/sg_kelantan_air_mulih',
    main: () => <Station6021465/>
  },
  { path: '/empangan_bukit_kwong',
    main: () => <Station5919403/>
  },
  { path: '/sg_semerak_pasir_putih',
    main: () => <Station5824401/>
  },
  { path: '/sg_golok_kuala_jambu',
    main: () => <Station6120401/>
  },
  { path: '/forecast',
    main: () => <Forecast/>
  },
]

const SidebarExample = () => (
  <Router>

   <div className="main-container">
        <div className="sidebar">

            <div className="main-navigation navbar-collapse collapse">

                <ul className="main-navigation-menu">
                   <li className="">
                        <a>
                            <i className="clip-bars"></i>
                            <span className="title"> Current Situation </span><i className="icon-arrow"></i>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a>
                                    <span className="title"> Gua Musang </span><i className="icon-arrow"></i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                            <Link to="/sg_lebir_kuala_koh">Sg. Lebir di Kuala Koh</Link>
                                            <Link to="/sg_galas_limau_kasturi">Sg. Galas di Limau Kasturi</Link>
                                    </li>
                                </ul>
                            </li>
                             <li>
                                <a>
                                    <span className="title"> Kuala Krai </span><i className="icon-arrow"></i>
                                </a>
                                <ul className="sub-menu">
                                 <li>
                                            <Link to="/sg_lebir_dabong">Sg.Galas di Dabong</Link>
                                    </li>
                                    <li>
                                            <Link to="/sg_lebir_tualang">Sg.Lebir di Tualang</Link>
                                    </li>
                                    <li>
                                            <Link to="/sg_kelantan_kuala_krai">Sg.Kelantan di Kuala Krai</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <span className="title"> Tanah Merah </span><i className="icon-arrow"></i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                            <Link to="/sg_kelantan_kusial">Sg. Kelantan di Kusial</Link>
                                    </li>
                                    <li>
                                            <Link to="/sg_golok_jenob">Sg. Golok di Jenob</Link>
                                    </li>
                                </ul>
                            </li>
                             <li>
                                <a>
                                    <span className="title"> Kota Bharu </span><i className="icon-arrow"></i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                          <Link to="/sg_kelantan_jeti_kastam">Sg. Kelantan di Jeti Kastam</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <span className="title"> Pasir Mas </span><i className="icon-arrow"></i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/sg_kelantan_air_mulih">Sg. Kelantan di Air Mulih</Link>
                                    </li>
                                    <li>
                                        <Link to="/sg_golok_rantau_panjang">Sg. Golok di Rantau panjang</Link>

                                    </li>
                                    <li>
                                      <Link to="/empangan_bukit_kwong">Empangan Bukit Kwong</Link>
                                    </li>
                                </ul>
                            </li>
                              <li>
                                <a>
                                    <span className="title"> Pasir Puteh </span><i className="icon-arrow"></i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                      <Link to="/sg_semerak_pasir_putih">Sg.Semerak di Pasir Putih</Link>
                                    </li>
                                </ul>
                            </li>
                             <li>
                                <a>
                                    <span className="title"> Jeli </span><i className="icon-arrow"></i>
                                </a>
                                <ul className="sub-menu">
                                <li>
                                      <Link to="/sg_pagau_air_bol">Sg. Pergau di Air Bol</Link>
                                    </li>
                                </ul>
                            </li>
                                 <li>
                                <a>
                                    <span className="title"> Tumpat </span><i className="icon-arrow"></i>
                                </a>
                                <ul className="sub-menu">
                                 <li>
                                      <Link to="/sg_golok_kuala_jambu">Sg.Golok di Kuala Jambu</Link>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>

                    <li className="">
                            <Link to="/forecast"><i className="clip-bars"></i>Water Level Forecast</Link>
                    </li>
                </ul>

            </div>

        </div>
        
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
    </div>
  </Router>
)

export default SidebarExample