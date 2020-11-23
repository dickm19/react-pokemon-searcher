import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {


  state = {
    pokemon: [],
    search: ''
  }

  componentDidMount(){
    return fetch("http://localhost:3000/pokemon").then(resp=>resp.json())
    .then(pokemonArr => this.setState({
      pokemon: pokemonArr
    }))
  }

  handleSearch = (searchVal) => {
    this.setState({
      search: searchVal
    })
    
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(poke => poke.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  handleSubmit = (formValues) => {
    const pokeObj = {
      name: formValues.name.value,
      hp: formValues.hp.value,
      sprites: {
        front: formValues.front.value,
        back: formValues.back.value
      }
    }
    return fetch("http://localhost:3000/pokemon", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(pokeObj)
    }).then(resp=> resp.json()).then(poke => this.setState({
      pokemon: [...this.state.pokemon, poke]
    }))
  }
  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
