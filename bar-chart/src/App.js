
import './App.css';
import Avg_Min_Temp_Year_Wise from './Avg_Min_Temp_Year_Wise.js';
import Avg_Max_Temp_Year_Wise from './Avg_Max_Temp_Year_Wise.js';
import Avg_Precipitation_Month_Year_Wise from './Avg_Precipitation_Month_Year_Wise.js';
import Avg_Snow_Monthly_Year_Wise from './Avg_Snow_Monthly_Year_Wise.js';
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
     <Avg_Min_Temp_Year_Wise/>
     <Avg_Max_Temp_Year_Wise/>
     <Avg_Precipitation_Month_Year_Wise/>
     <Avg_Snow_Monthly_Year_Wise/>
    </div>
  );
}

export default App;