import React, {useState} from 'react';
import Graph from './components/grafo.js'
import './App.css';
import List from './components/list.js'
import {level} from './levels.js'
import {Djikstra} from './backend/backend.js'

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
  const [graph, setGraph] = useState(level.levelSP);
	const [selectedList, setSelectedList] = useState([]);
  const [network, setNetwork] = useState();
  const [stationE, setStationE] = useState(level.levelSP.nodes[Math.floor(Math.random()*26)]);
  const [stationB, setStationB] = useState(level.levelSP.nodes[Math.floor(Math.random()*26)]);
  const [caminho, setCaminho] = useState(0)
  while(stationE.id == stationB.id)setStationB(level.levelSP.nodes[Math.floor(Math.random()*26)])
  const events = {
    selectNode: function(event) {
      var { nodes, edges } = event;
			var newGraph = graph;
      if(selectedList.length >= 1)
      newGraph.edges.forEach(elem => {
        console.log('To dentro')
        if(elem.from == selectedList[selectedList.length-1].id && elem.to == nodes[0]){
          console.log('ifzada')
          setCaminho(caminho+parseInt(elem.label,10))
        }
      })
			newGraph.nodes.forEach((item, index) => {
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
			newGraph.nodes[index].color = {
				background: 'rgba(79,192,206, 1)',
				border: 'rgba(4,165,186, 1)'
			};
		});
		setGraph(newGraph);
    setCaminho(0)
		network.setData(graph);
		setSelectedList([])
	}
  const checarEstacoes = (value) => {
    let a = Djikstra(graph, stationB)
    if(selectedList.length >= 1){
      if(selectedList[0].id == stationB.id && selectedList[selectedList.length-1].id == stationE.id){
        if(a[stationE.id] == caminho){
          alert('parabens')
          window.location.reload(false);
        }else{
          alert(`ERRRRRRRRRROOU, seu caminho tem custo de ${caminho} e o caminho correto é de ${a[stationE.id]}. Não desista!`)
        }
      }
			else{
				alert('As estações de início e de fim não coincidem com a requisitada')
			}
		}
        
    console.log('CIDADES', stationE, stationB, caminho)
  }
  return (
    <div>
    <h1>Encontre o menor caminho entre as estações</h1>
		<div style={{display: 'flex'}}>
			<div>
        <h2>De: {stationB.label}</h2>
        <h2>Para: {stationE.label}</h2>
				<List selectedList={selectedList}/>
    <div style={{display: 'flex'}}>
				<button className={'clean-doidera'} onClick={apagarEstacoes}>
					Apagar estações
				</button>
        
				<button className={'doidera-button'} onClick={checarEstacoes}>
					Verificar
				</button>
    </div>
			</div>
			<div style={{marginLeft: '100px', width: '1100px', alignSelf: 'stretch'}}>
				<Graph events={events} network={setNetwork}/>
			</div>
		</div>
    </div>
  );
}

export default App;

