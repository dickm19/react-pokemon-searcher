import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  handleImgClick = () => {
    this.setState({
      front: !this.state.front
    })
  }
  render() {
    return (
      <Card>
        <div>
          <div className="image">
          {this.state.front ? <img  onClick={this.handleImgClick} alt={this.props.poke.name} src={this.props.poke.sprites.front}/> : <img onClick={this.handleImgClick} alt={this.props.poke.name} src={this.props.poke.sprites.back}/>}
            
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
