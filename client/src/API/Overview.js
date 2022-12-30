
const Overview = {
  getAllProducts: () => {
    return fetch('http://localhost:3000/products', {
      method: 'GET'
    })
      .then(results => {
        console.log(results);
        return results;
      })
      .catch(err => {
        console.log(err);
      });
  },

  getProductById: (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
      method: 'GET'
    })
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  },

  getStylesById: (id) => {
    return fetch(`http://localhost:3000/products/${id}/styles`, {
      method: 'GET'
    })
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  },

  addToCart: (data) => {
    return fetch('http://localhost:3000/cart', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        return;
      })
      .catch(err => {
        console.log(err);
      });
  },

  getAllReviews: (id) => {
    return fetch(`http://localhost:3000/allReviews/${id}`)
      .then(result => {
        return result.json();
      })
      .catch(err => {
        console.log(err);
      });
  },

  getAverageRating: (ratings) => {
    var sum = 0;
    var count = 0;
    Object.keys(ratings).forEach(function(rating) {
      sum += rating * parseInt(ratings[rating]);
      count += parseInt(ratings[rating]);
    });
    return sum / count;
  }
};

export default Overview;