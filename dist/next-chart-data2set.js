/*!
 * name: next-chart-data2set
 * url: https://github.com/afeiship/next-chart-data2set
 * version: 1.0.0
 * date: 2019-09-03T10:55:40.113Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxChartData2set = nx.declare('nx.ChartData2set', {
    statics: {
      info: function(inItems) {
        const result = {};
        inItems.forEach(function(item) {
          item.freq = item.freq || 'D';
          result[item.sid] = item;
        });
        return result;
      },
      data: function(inItems) {
        const result = {};
        inItems.forEach(function(series) {
          const sid = nx.get(series.meta, 'sid');
          const columns = nx.get(series.meta, 'columns');
          const data = { date: series.index };
          columns.forEach(function(c, i) {
            data[c] = series.value[i].map(function(v) {
              return v === 'NaN' ? null : parseFloat(parseFloat(v).toFixed(5));
            });
          });
          result[sid] = { columns: columns, data: data };
        });
        return result;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxChartData2set;
  }
})();

//# sourceMappingURL=next-chart-data2set.js.map
