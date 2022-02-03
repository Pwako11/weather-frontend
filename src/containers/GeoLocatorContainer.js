import React from 'react'
import CityInfo from '../components/CityDetails'
import CitySearch from '../components/WeatherSearch'

class GeoLocatorContainer extends React.Component{
  constructor(){
    super()
      this.state={
        cityDetails: [] 
      }
  }
  
  getCityDetails = () =>{
  
    console.log( "here is sate", this.cityDetails)
  }  

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   let term = e.target.querySelector("input").value;
    //   let url = `https://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=10b49ddd515186590dd889e02244c36d`;
    //     fetch(url)
    //       .then(res => res.json())
    //         .then(json =>
    //           console.log(json)
    //           // this.setState({
    //           //   allGifs: json.data.slice(0,3)
    //           // })
    // )}
    
  render(){
    return (
      <div>
        {console.log( "there is cityDetails", this.state.cityDetails )}
          <ul>
            <li> < CityInfo  props={this.state.cityDetails} /> </li>
          </ul> 
          < CitySearch onSubmit={this.handleSubmit}/> 
      </div>
      )
  }
    

  componentDidMount(){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=NYC&limit=5&appid=10b49ddd515186590dd889e02244c36d`)
    .then(res => res.json())
    .then(json =>
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${json[0]["lat"]}&lon=${json[0]["lon"]}&appid=10b49ddd515186590dd889e02244c36d`)
      .then(res => res.json())
      .then(json =>
          this.setState({
            cityDetails: json
          })
      )
    ) 
  }
     
  
    
    
    
}
    
    
export default GeoLocatorContainer;