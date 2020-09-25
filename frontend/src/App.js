import React from 'react';
import logo from './logo.svg';
import Graph from "react-graph-vis";
import './App.css';
import {level1SP} from './levels.js'


function App() {
  const graph = level1SP;
 
  const options = {
    layout: {
    },
    edges: {
      color: "#000000"
    },
    height: "700px",
  };
 
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
			<Graph
				style={{marginBottom: '0px', display: 'flex', flex: 1}}
				graph={graph}
				options={options}
				events={events}
			/>
  );
}

export default App;

