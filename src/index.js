import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' ;
let curDate = new Date();
curDate = curDate.getHours();
let greeting =' ';

const cssStyle={


};
const curdate=new Date().toLocaleDateString();
const curtime=new Date().toLocaleTimeString();



if (curDate >=1 &&  curDate < 12)
{
  greeting  ="Good Morning  ";

  cssStyle.color ='lime';

  
}else if (curDate>=12 && curDate <19)
{
  greeting  ="Good Afternoon"; 
  cssStyle.color ='lightblue';
}

else
{
  greeting  = "  Good Night" ;
  cssStyle.color ='dark';
}



ReactDOM.render(
  <>



<div>
<h2 className="time">
  Time:  {curtime}
</h2>
</div>
<div>
<h1 style ={ { fontFamily: 'Brush Script MT'

}}>
Hello Sir, <span style={cssStyle}>{  greeting }</span>


</h1>
</div>
<div>
<h2 className="date">
Date : {curdate}
</h2>

</div>


</>
 
 
 ,

  document.getElementById('root'));