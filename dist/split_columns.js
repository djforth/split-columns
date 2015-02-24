(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/split_columns.coffee":[function(require,module,exports){
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



},{"angular":"angular"}]},{},["./lib/split_columns.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmb3J0aC93ZWJzaXRlcy9tb2R1bGVzL3NwbGl0X2NvbHVtbnMvbGliL3NwbGl0X2NvbHVtbnMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBQSxDQUFBO0FBQUEsSUFBQSxXQUFBOztBQUFBLE9BQ0EsQ0FBUSxTQUFSLENBREEsQ0FBQTs7QUFBQSxXQUdBLEdBQWUsT0FBTyxDQUFDLE1BQVIsQ0FBZSxlQUFmLEVBQWdDLEVBQWhDLENBQ2IsQ0FBQyxPQURZLENBQ0osa0JBREksRUFDZ0IsU0FBQSxHQUFBO0FBQzNCLE1BQUEsT0FBQTtBQUFBLEVBQU07eUJBQ0o7O0FBQUEsc0JBQUEsT0FBQSxHQUFRLENBQVIsQ0FBQTs7QUFBQSxzQkFDQSxJQUFBLEdBQUssRUFETCxDQUFBOztBQUFBLHNCQUVBLEtBQUEsR0FBTSxDQUZOLENBQUE7O0FBQUEsc0JBR0EsR0FBQSxHQUFJLENBSEosQ0FBQTs7QUFBQSxzQkFLQSxZQUFBLEdBQWEsU0FBQSxHQUFBO0FBQ1gsVUFBQSxlQUFBO0FBQUEsTUFBQSxZQUFBLEdBQWUsRUFBZixDQUFBO0FBQUEsTUFDQSxDQUFBLEdBQUksQ0FESixDQUFBO0FBRUEsYUFBTSxDQUFBLEdBQUksSUFBQyxDQUFBLE9BQVgsR0FBQTtBQUNFLFFBQUEsWUFBWSxDQUFDLElBQWIsQ0FBa0IsSUFBQyxDQUFBLFNBQUQsQ0FBVyxDQUFYLENBQWxCLENBQUEsQ0FBQTtBQUFBLFFBQ0EsQ0FBQSxFQURBLENBREY7TUFBQSxDQUZBO0FBTUEsYUFBTyxZQUFQLENBUFc7SUFBQSxDQUxiLENBQUE7O0FBQUEsc0JBY0EsUUFBQSxHQUFTLFNBQUMsR0FBRCxHQUFBOztRQUFDLE1BQUk7T0FDWjtBQUFBLE1BQUEsSUFBcUIsR0FBQSxHQUFNLElBQUMsQ0FBQSxHQUE1QjtBQUFBLGVBQU8sSUFBQyxDQUFBLEtBQUQsR0FBUyxDQUFoQixDQUFBO09BQUE7QUFDQSxhQUFPLElBQUMsQ0FBQSxLQUFSLENBRk87SUFBQSxDQWRULENBQUE7O0FBQUEsc0JBbUJBLFVBQUEsR0FBVyxTQUFDLENBQUQsR0FBQTtBQUNULE1BQUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxDQUFYLENBQUE7YUFDQSxJQUFDLENBQUEsUUFBRCxDQUFBLEVBRlM7SUFBQSxDQW5CWCxDQUFBOztBQUFBLHNCQXVCQSxPQUFBLEdBQVEsU0FBQyxDQUFELEdBQUE7QUFDTixNQUFBLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FBUixDQUFBO2FBQ0EsSUFBQyxDQUFBLFFBQUQsQ0FBQSxFQUZNO0lBQUEsQ0F2QlIsQ0FBQTs7QUFBQSxzQkEyQkEsUUFBQSxHQUFTLFNBQUEsR0FBQTtBQUNQLE1BQUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUMsQ0FBQSxJQUFJLENBQUMsTUFBTixHQUFhLElBQUMsQ0FBQSxPQUF6QixDQUFULENBQUE7YUFDQSxJQUFDLENBQUEsR0FBRCxHQUFTLElBQUMsQ0FBQSxJQUFJLENBQUMsTUFBTixHQUFlLElBQUMsQ0FBQSxRQUZsQjtJQUFBLENBM0JULENBQUE7O0FBQUEsc0JBK0JBLFNBQUEsR0FBVSxTQUFDLEdBQUQsR0FBQTtBQUVSLFVBQUEsa0JBQUE7O1FBRlMsTUFBSTtPQUViO0FBQUEsTUFBQSxJQUFnQixJQUFDLENBQUEsSUFBSSxDQUFDLE1BQU4sSUFBZ0IsQ0FBaEIsSUFBcUIsSUFBQyxDQUFBLE9BQUQsS0FBWSxDQUFqRDtBQUFBLGVBQU8sSUFBQyxDQUFBLElBQVIsQ0FBQTtPQUFBO0FBQUEsTUFFQSxNQUFBLEdBQVMsSUFBQyxDQUFBLFFBQUQsQ0FBVSxHQUFWLENBRlQsQ0FBQTtBQUFBLE1BSUEsS0FBQSxHQUFRLE1BQUEsR0FBTyxHQUpmLENBQUE7QUFBQSxNQUtBLEdBQUEsR0FBUSxLQUFBLEdBQVEsTUFMaEIsQ0FBQTtBQU1BLGFBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxLQUFOLENBQVksS0FBWixFQUFtQixHQUFuQixDQUFQLENBUlE7SUFBQSxDQS9CVixDQUFBOzttQkFBQTs7TUFERixDQUFBO0FBNkNBLFNBQU8sT0FBUCxDQTlDMkI7QUFBQSxDQURoQixDQUhmLENBQUE7O0FBQUEsTUFxRE0sQ0FBQyxPQUFQLEdBQWlCLFdBckRqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xucmVxdWlyZSgnYW5ndWxhcicpXG5cbnNwbGl0Y29sdW1uID0gIGFuZ3VsYXIubW9kdWxlKCckc3BsaXRDb2x1bW5zJywgW10pXG4gIC5zZXJ2aWNlKCdzcGxpdEludG9Db2x1bW5zJywgKCktPlxuICAgIGNsYXNzIENvbHVtbnNcbiAgICAgIGNvbHVtbnM6MSxcbiAgICAgIGRhdGE6W10sXG4gICAgICBzcGxpdDowXG4gICAgICByZW06MFxuXG4gICAgICBhbGxTcGxpdERhdGE6KCktPlxuICAgICAgICBob2xkZXJfYXJyYXkgPSBbXVxuICAgICAgICBpID0gMFxuICAgICAgICB3aGlsZShpIDwgQGNvbHVtbnMpXG4gICAgICAgICAgaG9sZGVyX2FycmF5LnB1c2goQHNwbGl0RGF0YShpKSlcbiAgICAgICAgICBpKytcblxuICAgICAgICByZXR1cm4gaG9sZGVyX2FycmF5XG5cbiAgICAgIGdldFNwbGl0Oihjb2w9MCktPlxuICAgICAgICByZXR1cm4gQHNwbGl0ICsgMSBpZiBjb2wgPCBAcmVtXG4gICAgICAgIHJldHVybiBAc3BsaXRcblxuXG4gICAgICBzZXRDb2x1bW5zOihuKS0+XG4gICAgICAgIEBjb2x1bW5zID0gblxuICAgICAgICBAc2V0U3BsaXQoKVxuXG4gICAgICBzZXREYXRhOihkKS0+XG4gICAgICAgIEBkYXRhID0gZFxuICAgICAgICBAc2V0U3BsaXQoKVxuXG4gICAgICBzZXRTcGxpdDooKS0+XG4gICAgICAgIEBzcGxpdCA9IE1hdGguZmxvb3IoQGRhdGEubGVuZ3RoL0Bjb2x1bW5zKVxuICAgICAgICBAcmVtICAgPSBAZGF0YS5sZW5ndGggJSBAY29sdW1uc1xuXG4gICAgICBzcGxpdERhdGE6KGNvbD0wKS0+XG5cbiAgICAgICAgcmV0dXJuIEBkYXRhIGlmIEBkYXRhLmxlbmd0aCA8PSAwIG9yIEBjb2x1bW5zID09IDFcblxuICAgICAgICBhbW91bnQgPSBAZ2V0U3BsaXQoY29sKVxuICAgICAgICAjIGNvbnNvbGUubG9nIGFtb3VudFxuICAgICAgICBzdGFydCA9IGFtb3VudCpjb2xcbiAgICAgICAgZW5kICAgPSBzdGFydCArIGFtb3VudFxuICAgICAgICByZXR1cm4gQGRhdGEuc2xpY2Uoc3RhcnQsIGVuZClcblxuXG5cblxuICAgIHJldHVybiBDb2x1bW5zXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gc3BsaXRjb2x1bW4iXX0=
