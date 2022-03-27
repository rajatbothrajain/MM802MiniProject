
import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import './App.css';
class Avg_Snow_Monthly_Year_Wise extends Component{
    constructor(props){
        super(props);
        this.state={data:[]}
    }
    componentDidMount(){
        const endpoint="https://data.edmonton.ca/resource/s4ws-tdws.json?$query=SELECT%20year,%20avg(total_snow_cm)%20group%20by%20year%20order%20by%20year"
        fetch(endpoint)
        .then(response =>response.json())
        .then(data=>{
            this.setState({data:data})
        })

    }
        
    transformData (data) {
            let plot_data = [];
            let y=[];
            
            data.map(each => {  
                var snow_monthly=parseFloat(each.avg_total_snow_cm)
                y.push(snow_monthly)   
            
            }
            )  
     
            plot_data['y']=y
            console.log(y)
            return plot_data
        }

	
        render() {
            return (
      
                <div>
                    <center>
                   <Plot
                        data = {[
                                {type: 'spline',
                                 mode: 'lines',
                                 x: ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
                                 y: this.transformData(this.state.data)['y'],
                                 marker: { color:'violet'}
                                }
                            ]}
                   
                            layout={{width:1000,height:800,title:"Average Yearly Snowfall in Edmonton form 2000-2022"}}
                     />
                </center>     
                </div>
            )
        }
        }
        
        export default Avg_Snow_Monthly_Year_Wise