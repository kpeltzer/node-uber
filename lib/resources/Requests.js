function Requests(uber) {
  this._uber = uber;
  this.path = 'requests';
}

module.exports = Requests;

Requests.prototype.createRequest = function (query, callback) {
    if (!query.product_id || !query.start_latitude) {
        return callback(new Error('Invalid parameters'));
    }
}