import { computed, observable } from "mobx"
import axios from "axios";

// Please update the config to access to the Elastic Search API

const elasticSearchUrl = 'http://e8c87a4a9ef1276cc88b50ce5ea83c7d.us-west-1.aws.found.io:9200/_search'
const elasticUserName = 'guest';
const elasticPassword = 'guest';


var requestConfig = {};

if (elasticUserName && elasticUserName.length > 0) {
  requestConfig = {
    auth: {
      username: elasticUserName,
      password: elasticPassword
    }
  }
}

class Test {
  @observable testId
  @observable userId
  @observable timestamp
  @observable option

  constructor(playload) {
    this.userId = playload.userId
    this.timestamp = playload['@timestamp']
    this.option = playload.option
    this.testId = playload.key
  }
}

export class TestStore {
  @observable tests = []
  @observable testId = ""
  @observable error = false
  @observable errorMessage = "";
  
  

  searchTests(key) {
    var self = this;
    axios.post(elasticSearchUrl, {
        "query": {
            "query_string": {
                "query": key
            }                           
        }            
    }, requestConfig)
    .then(function (response) {
      self.tests = []; // reset the previous result
      var results = response.data.hits.hits;
      if (results.length > 0) {
        self.errorMessage = "";
        self.error = false;
      } else {
        self.error = true;
        self.errorMessage = "no record found for search key: " + key
      }

      for (var i = 0; i< results.length; i++) {
        var result = results[i]._source;
        var test = new Test(result)
        self.tests.push(test);
      }
      
    })
    .catch(function (error) {
      self.error = true;
      self.errorMessage = error.toString();
    });
  }

}

export default new TestStore
