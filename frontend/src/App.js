import React, {useState} from 'react';
import Graph from './components/grafo.js'
import './App.css';
import List from './components/list.js'
import {levelSP} from './levels.js'

function checkNode(graph, list, newItem){
	console.log('new item', newItem)
	var validation = false;
	console.log('entrei', list[list.length - 1].label)
	graph.edges.forEach((item, index) => {
		if(list[list.length - 1].id === item.from && newItem.id === item.to){
			validation = true;
		}
	})
	return validation;
}
const App = () => {
  const [graph, setGraph] = useState(levelSP);
	const [selectedList, setSelectedList] = useState([]);
  const [network, setNetwork] = useState();
  const events = {
    selectNode: function(event) {
      var { nodes, edges } = event;
			var newGraph = graph;
			newGraph.nodes.forEach((item, index) => {
				if (item.id === nodes[0]){
				}
				if (item.id === nodes[0]){
					var newItem = true;
					selectedList.forEach((lista, index) => {
						if(lista.id === item.id)
							newItem = false;
					})
					if(newItem)
						if(selectedList.length == 0){
							newGraph.nodes[index] = {...item, 'color': {
								background: 'rgba(50,205,50, 1)',
								border: 'rgba(50,161,47, 1)'
							}}
							setSelectedList([...selectedList, item]);
						}
						else if(checkNode(graph, selectedList, item)){
							newGraph.nodes[index] = {...item, 'color': {
								background: 'rgba(50,205,50, 1)',
								border: 'rgba(50,161,47, 1)'
							}}
							setSelectedList([...selectedList, item]);
						}
				}
			})
			setGraph(newGraph);
			network.setData(graph);
    }
  };
	const apagarEstacoes = () => {
		var newGraph = graph;
		graph.nodes.forEach((item, index) => {
			newGraph.nodes[index].color = null;
		});
		setGraph(newGraph);
		network.setData(graph);
		setSelectedList([])
	}
  return (
		<div style={{display: 'flex'}}>
			<div>
				<List selectedList={selectedList}/>
				<button className={'todo-row'} onClick={apagarEstacoes}>
					Apagar estações
				</button>
			</div>
			<div style={{marginLeft: '100px', width: '1100px', alignSelf: 'stretch'}}>
				<Graph events={events} network={setNetwork}/>
			</div>
		</div>
  );
}

export default App;

