import React, {useState} from 'react';
import Graph from './components/grafo.js'
import './App.css';
import List from './components/list.js'
import {levelSP} from './levels.js'

const App = () => {
  const [graph, setGraph] = useState(levelSP);
	const [selectedList, setSelectedList] = useState([]);
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
			var newGraph = graph;
			newGraph.nodes.forEach((item, index) => {
				if (item.id === nodes[0]){
					newGraph.nodes[index] = {...item, 'color': 'red'}
					setSelectedList([...selectedList, item]);
				}
			})
			setGraph(newGraph);
    }
  };
  return (
		<div>
			<div>
				<List selectedList={selectedList}/>
			</div>
			<div style={{marginTop: '500px'}} >
				<Graph events={events} graph={graph}/>
			</div>
		</div>
  );
}

export default App;

