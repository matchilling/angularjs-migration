import { react2angular } from 'react2angular'
import ChuckNorris from './ChuckNorris'

angular
  .module('app.components', [])
  .component('chuckNorris', react2angular(ChuckNorris))
