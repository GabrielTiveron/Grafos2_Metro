import React from 'react';
import logo from './logo.svg';
import Graph from "react-graph-vis";
import './App.css';

function App() {
  const graph = {
		nodes: [
			{'id': 'teste', 'label': 'teste', 'title': 'teste'},
			{'id': 'teste2', 'label': 'teste2', 'title': 'teste2'},
		],
		edges:[
			{'from': 'teste', 'to': 'teste2', 'label': '120'}
		]
  };
 
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

