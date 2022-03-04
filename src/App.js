import React,{ useReducer,useEffect } from 'react';

import { Route,Switch } from 'react-router-dom';

import axios from 'axios';

import Home from './components/Home'
import Static from './components/Static';
import Responsive from './components/Responsive';
import Dynamic from './components/Dynamic';
import NavBar from './components/NavBar';
import './App.css';



export const ProjectContext = React.createContext()

const initialState = {
  
  loading:false,
  error:'',
  post:{}
}

const reducer = (state,action)=>{
  switch(action.type){
    case 'FETCH_SUCCESS':
      return{
        
        loading:false,
        post:action.payLoad,
        error:''
      }
    case 'FETCH_ERROR':
      return{
        
        loading:false,
        post:{},
        error:'something went wrong!'
      } 
    
      default:
        return state   
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  
  useEffect(()=>{
    
    axios.get('http://localhost:4000').then(response=>{
      dispatch({type:'FETCH_SUCCESS',payLoad:response.data})
    }).catch(error=>{
      dispatch({type:'FETCH_ERROR'})
    })
  },[])

  console.log(state.post)
  
  return (
    <div class='container-fluid'>
    <div class='row'>
    <ProjectContext.Provider value={{projectData:state.post,dataLoad:state.loading,errorData:state.error}}>
   
                
     <NavBar />
     
      <Switch>
      <Route exact path='/' component={Home} />
        <Route exact path='/static' component={Static} />
        <Route exact path='/responsive' component={Responsive} />
        <Route exact path='/dynamic' component={Dynamic} />
      
      
        </Switch>
    
    </ProjectContext.Provider>
    </div>
    </div>
  );
}

export default App;
