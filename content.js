(function() {
    function convertToCSV(table) {
      let data = [];
      for (let i = 0, row; row = table.rows[i]; i++) {
        let rowData = [];
        for (let j = 0, col; col = row.cells[j]; j++) {
          rowData.push('"' + col.innerText + '"');
        }
        data.push(rowData.join(','));
      }
      return data.join('\n');
    }
  
    let tables = document.getElementsByTagName('table');
    for (let i = 0; i < tables.length; i++) {
      let csv = convertToCSV(tables[i]);
      let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      let link = document.createElement("a");
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "table" + i + ".csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  })();
  