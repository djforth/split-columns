require('../src/split_columns.coffee')
require 'angular-mocks'
_ = require('lodash')

# console.log angular.mock

describe 'SplitColumns', ->
  splitColumns = scope = null
  currentWidth = 480
  currentHeight = 500

  beforeEach ->
    angular.mock.module('$splitColumns')

    angular.mock.inject ($rootScope, splitIntoColumns)->
      splitColumns = new splitIntoColumns()
      scope = $rootScope.$new();

  it 'should exist', ->
    expect(splitColumns).not.toBeNull()
    expect(splitColumns).toBeDefined()

  it 'defaults', ->
    expect(splitColumns.columns).toEqual(1)
    expect(splitColumns.split).toEqual(0)
    expect(_.isEmpty(splitColumns.data)).toBeTruthy()

  describe 'setting functions', ->

    beforeEach ->
      spyOn(splitColumns, "setSplit")

    it 'should set columns', ->
      expect(splitColumns.columns).toEqual(1)
      splitColumns.setColumns(2)
      expect(splitColumns.columns).toEqual(2)
      expect(splitColumns.setSplit).toHaveBeenCalled()


    it 'should set data', ->
      expect(_.isEmpty(splitColumns.data)).toBeTruthy()
      splitColumns.setData([0..10])
      expect(splitColumns.data).toEqual([0..10])
      expect(splitColumns.setSplit).toHaveBeenCalled()

  describe 'set_split', ->

    beforeEach ->
      splitColumns.columns = 3

    it 'should set split and remainder', ->
      splitColumns.data = [0..5]
      splitColumns.setSplit()

      expect(splitColumns.split).toEqual(2)
      expect(splitColumns.rem).toEqual(0)

    it 'should set split and remainder', ->
      splitColumns.data = [0..7]
      splitColumns.setSplit()

      expect(splitColumns.split).toEqual(2)
      expect(splitColumns.rem).toEqual(2)

  describe 'get_split', ->

    beforeEach ->
      splitColumns.split = 2
      splitColumns.rem   = 2

    it 'should set the correct split col 1', ->
      col1 = splitColumns.getSplit(0)
      expect(col1).toEqual(3)

    it 'should set the correct split col 1', ->
      col1 = splitColumns.getSplit(1)
      expect(col1).toEqual(3)

    it 'should set the correct split col 1', ->
      col1 = splitColumns.getSplit(2)
      expect(col1).toEqual(2)

  describe 'split_data', ->
    data = null
    beforeEach ->
      data = [0..13]
      # console.log data.length/3
      splitColumns.data = data
      splitColumns.columns = 3
      spyOn(splitColumns, 'getSplit').and.callFake (i)->
        return 5 if i <= 2
        return 4

    it 'should return data if data if empty', ->
      splitColumns.data = []
      col1 = splitColumns.splitData(0)
      expect(_.isEmpty(splitColumns.data)).toBeTruthy()

    it 'should return  all data if columns is 1', ->
      splitColumns.columns = 1
      col1 = splitColumns.splitData(0)
      expect(splitColumns.data).toEqual(data)

    it 'should give array for 1st column', ->

      col1 = splitColumns.splitData(0)
      expect(col1.length).toEqual(5)
      expect(col1).toEqual([0..4])

    it 'should give array for 2st column', ->
      col2 = splitColumns.splitData(1)
      expect(col2.length).toEqual(5)
      expect(col2).toEqual([5..9])

    it 'should give array for 3rd column', ->
      col3 = splitColumns.splitData(2)
      expect(col3.length).toEqual(4)
      expect(col3).toEqual([10..13])


  describe 'allSplitData', ->
    data = holder = null
    beforeEach ->
      data = [0..13]
      # console.log data.length/3
      splitColumns.data = data
      splitColumns.columns = 3
      spyOn(splitColumns, 'splitData').and.callFake (i)->
        switch i
          when 0 then return [0..4]
          when 1 then return [5..9]
          when 2 then return [10..13]

      holder = splitColumns.allSplitData()

    it 'should call splitData', ->
      expect(splitColumns.splitData).toHaveBeenCalled()
      expect(splitColumns.splitData.calls.count()).toEqual(3);

      expect(splitColumns.splitData.calls.argsFor(0)).toEqual([0]);
      expect(splitColumns.splitData.calls.argsFor(1)).toEqual([1]);
      expect(splitColumns.splitData.calls.argsFor(2)).toEqual([2]);



    it 'should have the correct columns', ->
      expect(holder.length).toEqual(3)
      expect(holder[0]).toEqual([0..4])
      expect(holder[1]).toEqual([5..9])
      expect(holder[2]).toEqual([10..13])









