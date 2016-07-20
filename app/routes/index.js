import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
        // return fetch('https://api.imgur.com/3/gallery/hot/viral/0.json')
    return fetch(`http://tiy-brewery-proxy.herokuapp.com/v2/breweries?key=${config.apiKey}&established=2015`)
      .then((res) => res.json());
      debugger;
  }
});
