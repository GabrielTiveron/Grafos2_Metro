import React, {useState} from 'react';
import Graph from "react-graph-vis";
import {levelSP} from '../levels.js'

const Grafo = ({events, graph}) => {
 
  const options = {
    layout: {
    },
    edges: {
      color: "#000000"
    },
    height: "700px",
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

export default Grafo;

