import React from 'react'

import { randomJoke } from '../../services/chuck.service'
import LoaderIllustration from '../LoaderIllustration'

const state = {
  isLoading: false,
  joke: {
    category: '',
    icon_url: '',
    id: '',
    url: '',
    value: '',
  },
};

class ChuckNorris extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = state;
    this.fetchRandomJoke = this.fetchRandomJoke.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.fetchRandomJoke()
  }

  fetchRandomJoke() {
    this.setState({ isLoading: true }, () => {
      randomJoke().then(joke => {
        this.setState({ isLoading: false, joke })
      })
    });
  }

  render() {
    if (this.state.isLoading) {
      return <LoaderIllustration />
    }

    if (this.state.joke.value) {
      return (
        <div>
          <button onClick={this.fetchRandomJoke}>Get random joke</button>
          <p>{this.state.joke.value}</p>
        </div>
      )
    }

    return (
      <p>Something went wrong</p>
    );
  }
}

export default ChuckNorris
