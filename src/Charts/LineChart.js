import * as d3 from "d3";
import React,{useState,useEffect} from "react";

const LineChart = (props) => {
const{height,width } =props;

const [data,setData]=useState([]);

useEffect(()=>{
    if(data.length>0){
        drawChat();
    }
    else{
        generateData();
    }
},[data]);

const generateData = () =>{
    const chartData = [];
    for(var i=0;i<=50;i++){
        const value = Math.floor(Math.random()*i+1);
        chartData.push({
            label:i,
            value
        });
        console.log(chartData)
    }
    setData(chartData)
}


const drawChat = () =>{
    const margin = {
        top:100,
        right :50,
        bottom:50,
        left:100

    }
    const yMinValue = d3.min(data,d=>d.value);
    const yMaxValue = d3.max(data, (d) => d.value);
    const xMinValue = d3.min(data, (d) => d.label);
    const xMaxValue = d3.max(data, (d) => d.label);


    const svg = d3
      .select("#container")
      .append("svg")
      .attr("width", (width + margin.left + margin.right))
      .attr("height", (height + margin.top + margin.bottom))
    .append('g')
    .attr('transform',`translate(${margin.left},${margin.top})`);


   const xScale =d3
    .scaleLinear()
    .domain([xMinValue,xMaxValue])
    .range([0,width]);

    const yScale = d3
       .scaleLinear()
       .domain([0, yMaxValue])
       .range([height, 0]);

       svg
         .append('g')
         .attr("class", "grid")
         .attr("transform", `translate(0,${height})`)
         .call(
            d3.axisBottom(xScale)
            .tickSize(-height)
            .tickFormat(''),
         );
        svg
          .append("g")
          .attr("class", "grid")
    
          .call(d3.axisLeft(yScale).tickSize(-width).tickFormat(' '));
        
          svg
          .append('g')
          .attr('class',"x-axis")
          .attr("transform",`translate(0,${height})`)
          .call(d3.axisBottom(xScale).tickSize(15));

          svg
            .append("g")
            .attr("class", "y-axis")
            
            .call(d3.axisLeft().scale(yScale));

            const line = d3
            .line()
            .x(d=>xScale(d.label))
            .y(d=>yScale(d.value))
            .curve(d3.curveMonotoneX);
            

            svg
            .append('path')
            .datum(data)
            .attr('fill','none')
            .attr('stroke','yellow')
            .attr('stroke-width',4)
            .attr('class','line')
            .attr('d',line);

}
return <div>
    <div id= "container"/>

  
</div>; 

}




export default LineChart;
