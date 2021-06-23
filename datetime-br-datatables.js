/**
 * Método utilizado para sortear os datatables em date/datetime em br, utilizando {"type": "date-br"}
 * @author Bernardo Alves Roballo
 */
 $.extend($.fn.dataTableExt.oSort, {
  "date-br-pre": function (a) {
    if (a == null || a == "") {
      return 0;
    }
    let dataHora = $.trim(a).split(' ');
    let data, hora;
    if (typeof dataHora[1] != 'undefined') {
      hora = dataHora[1].split(':');
      data = dataHora[0].split('/');
      return (data[2] + data[1] + data[0] + hora[0] + hora[1]) * 1;
    } else {
      data = dataHora[0].split('/');
      return (data[2] + data[1] + data[0]) * 1;
    }
  },
  "date-br-asc": function (a, b) {
    return ((a < b) ? -1 : ((a > b) ? 1 : 0));
  },
  "date-br-desc": function (a, b) {
    return ((a < b) ? 1 : ((a > b) ? -1 : 0));
  }
});