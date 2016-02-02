'use strict'
require('angular')

splitcolumn =  angular.module('$splitColumns', [])
  .service('splitIntoColumns', ()->
    class Columns
      columns:1,
      data:[],
      split:0
      rem:0

      allSplitData:()->
        holder_array = []
        i = 0
        while(i < @columns)
          holder_array.push(@splitData(i))
          i++

        return holder_array

      getSplit:(col=0)->
        return @split + 1 if col < @rem
        return @split


      setColumns:(n)->
        @columns = n
        @setSplit()

      setData:(d)->
        @data = d
        @setSplit()

      setSplit:()->
        @split = Math.floor(@data.length/@columns)
        @rem   = @data.length % @columns

      splitData:(col=0)->

        return @data if @data.length <= 0 or @columns == 1

        amount = @getSplit(col)
        # console.log amount
        start = amount*col
        end   = start + amount
        return @data.slice(start, end)




    return Columns
)

module.exports = splitcolumn