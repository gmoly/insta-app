import React, { Component } from 'react';
import Map from '../../Map';
import './trip-list-item.scss'

export default class TripListItem extends Component {

    state = {
        flag: false
    }

        changeState() {
            this.setState({
                flag: !this.state.flag
            })
        }

        render() {
         
            var { trip } = this.props;

            return(
                <div className="trip-container">
                    <div id="map-canvas"><Map flag={ this.state.flag }/></div>  
                    <div className="container-fluid" id="main">
                        <div className="row">
                            <div className="col-xs-8" id="left">
                            
                            <h2>Bootstrap Google Maps Demo</h2>
                            <div className="panel panel-default">
                                <div className="panel-heading"><a href="">Item heading</a></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
                                dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
                                Aliquam in felis sit amet augue.</p>
                            
                            <hr />
                            
                            <div className="panel panel-default">
                                <div className="panel-heading"><a href="">Item heading</a></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
                                dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
                                Aliquam in felis sit amet augue.</p>
                            
                            <hr />
                            
                            <div className="panel panel-default">
                                <div className="panel-heading"><a href="">Item heading</a></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
                                dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
                                Aliquam in felis sit amet augue.</p>
                            
                            <hr />
                            
                            <div className="panel panel-default">
                                <div className="panel-heading"><a href="">Item heading</a></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
                                dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
                                Aliquam in felis sit amet augue.</p>
                            
                            <hr />
                            
                            <p>
                            <a href="http://www.bootply.com/render/129229">Demo</a> | <a href="http://bootply.com/129229">Source Code</a>
                            </p>
                            
                            <hr /> 
                                
                            <p>
                            <button onClick={() => {this.changeState()}} target="_ext" className="center-block btn btn-primary">More Bootstrap Snippets on Bootply</button>
                            </p>
                                
                            <hr />      

                            </div>
                            <div className="col-xs-4"></div>
                        </div> 
                    </div>
                </div>  
            );
        }
    
}