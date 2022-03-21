
import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import './App.css';
class Avg_Snow_Monthly_Year_Wise extends Component{
    constructor(props){
        super(props);
        this.state={data:[]}
    }
    componentDidMount(){
        var dynamic_snow_year="2021"
        const endpoint="https://data.edmonton.ca/resource/s4ws-tdws.json?$query=SELECT%20year,%20month%20,avg(total_snow_cm)%20where%20year%20="+dynamic_snow_year+"%20group%20by%20year%20,month%20order%20by%20year,%20month"
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
                   <Plot
                        data = {[
                                {type: 'spline',
                                 mode: 'lines',
                                 x: ["January ","Feburary ","March","April","May","June","July","August","September","October","November","December"],
                                 y: this.transformData(this.state.data)['y'],
                                 marker: { color:'gold'}
                                }
                            ]}
                   
                            layout={{width:1000,height:800,title:"Average Monthly Snow of a particluar requested year"}}
                     />
                     
                </div>
            )
        }
        }
        
        export default Avg_Snow_Monthly_Year_Wise