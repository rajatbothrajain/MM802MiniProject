import React, {Component } from 'react';
import Plot from 'react-plotly.js';
class Weather_Data_Snow extends Component{
    render()
    {
        return(
<div>
<Plot 
data={
    [
    {    
    type:'bar',
    x:['January','Febuary','March','April','May','June','July','August','September','October','November','December'],
    y:[29,150,85,1,2,1,2,12,3,4,4,5,],
    marker:{color:'rgb(56,125,89)'}
}
]
}
layout={{width:1500,height:1000,title:"Minimum and Maximum Temperatures of each year"}}
/>
</div>
        
        )
    }
}

export default Weather_Data_Snow;