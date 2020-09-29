import React, {useState} from 'react';
import Graph from "react-graph-vis";
import {levelSP} from '../levels.js'

const Grafo = ({events, network}) => {
  const [graph, setGraph] = useState(levelSP);
 
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
				getNetwork={network}
				graph={graph}
				options={options}
				events={events}
			/>
  );
}

export default Grafo;

