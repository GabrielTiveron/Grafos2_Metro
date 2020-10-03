import React, {useState} from 'react';
import Graph from "react-graph-vis";
import levels from '../levels.js'

const MAX_WT = 9999999

function arrayMove(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};

function getAdjList(list, id){
  let arr = []
  list.forEach(item =>{
    if(item.from == id){
      arr = [...arr, item.to]
    }
  })

  return arr;
};

export const Djikstra = (graph, selectedList) => {

  const begin = selectedList
  
  var PQinit = []
  var priority = []
  var v
  var newgraph = {'edges': [], 'nodes': []}
  graph.edges.forEach(x => {
    priority = [...priority, x.label]
    let a = {'from': x.from, 'to':x.to, 'label': parseInt(x.label,10)}
    newgraph.edges = [...newgraph.edges, a]
  })
  console.log(newgraph)
  console.log(priority)

  let st = []
  let wt = []
  let PQ = []
  
  graph.nodes.forEach( (x, index) =>{
    newgraph.nodes = [...newgraph.nodes, x]
    st[index] = -1
    wt[x.id] = MAX_WT
    PQ[index] = x.id
    }
  )
  console.log('*****************',PQ)
  wt[begin.id] = 0
  PQ = [PQ.splice(PQ.findIndex(elem => elem==begin.id), 1)[0], ...PQ]
  //PQ = arrayMove(PQ, PQ.findIndex(element => element == begin.id), 
  //                    PQ.findIndex(elem => elem == newgraph.nodes[0]))

  let ind = 0, w = 0;
  while(!(PQ === undefined || PQ.length == 0)){
    if(wt[v = PQ.shift()] != MAX_WT){
      let t = getAdjList(newgraph.edges, v)
			console.log('v', v)
      console.log('ajascencia', t)
      t.forEach((edge, index) => {
        //console.log(v, '$$$$$$$$$$$$$', edge)
        let adj = newgraph.edges.find(elem => elem.from==v && elem.to==edge).label
        //if(adj != 0)
        if(adj + wt[v] < wt[w = edge]){
          console.log("W", w)
          wt[w] = wt[v] + adj
					if (PQ.findIndex(elem => elem==w) === -1)
						PQ = [w, ...PQ]
					else
						PQ = [PQ.splice(PQ.findIndex(elem => elem==w), 1)[0], ...PQ]
          st[w] = v
          console.log("wt[w]", wt[w])
        }
      })
    }
  }

  console.log("STzada", wt)
  

  return wt
}
