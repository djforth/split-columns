'use strict';
var splitcolumn;

require('angular');

splitcolumn = angular.module('$splitColumns', []).service('splitIntoColumns', function() {
  var Columns;
  Columns = (function() {
    function Columns() {}

    Columns.prototype.columns = 1;

    Columns.prototype.data = [];

    Columns.prototype.split = 0;

    Columns.prototype.rem = 0;

    Columns.prototype.allSplitData = function() {
      var holder_array, i;
      holder_array = [];
      i = 0;
      while (i < this.columns) {
        holder_array.push(this.splitData(i));
        i++;
      }
      return holder_array;
    };

    Columns.prototype.getSplit = function(col) {
      if (col == null) {
        col = 0;
      }
      if (col < this.rem) {
        return this.split + 1;
      }
      return this.split;
    };

    Columns.prototype.setColumns = function(n) {
      this.columns = n;
      return this.setSplit();
    };

    Columns.prototype.setData = function(d) {
      this.data = d;
      return this.setSplit();
    };

    Columns.prototype.setSplit = function() {
      this.split = Math.floor(this.data.length / this.columns);
      return this.rem = this.data.length % this.columns;
    };

    Columns.prototype.splitData = function(col) {
      var amount, end, start;
      if (col == null) {
        col = 0;
      }
      if (this.data.length <= 0 || this.columns === 1) {
        return this.data;
      }
      amount = this.getSplit(col);
      start = amount * col;
      end = start + amount;
      return this.data.slice(start, end);
    };

    return Columns;

  })();
  return Columns;
});

module.exports = splitcolumn;
