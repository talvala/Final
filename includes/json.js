var myList=[{"Dest" : "Work", "Total Alerts" : "159 Alerts"},
            {"Dest" : "Home", "Total Alerts" : "55 Alerts"},
            {"Dest" : "Dizengoff st., Tel Aviv", "Total Alerts" : "139 Alerts"},
            {"Dest" : "Work", "Total Alerts" : "359 Alerts"},
            {"Dest" : "Home", "Total Alerts" : "545 Alerts"},
            {"Dest" : "Home", "Total Alerts" : "739 Alerts"},
            {"Dest" : "Shila st., Ramat Gan", "Total Alerts" : "350 Alerts"},
            {"Dest" : "Dudu St., Tel Aviv", "Total Alerts" : "545 Alerts"},
            {"Dest" : "Bnei Brak Mall", "Total Alerts" : "739 Alerts"},
            {"Dest" : "Lalaland", "Total Alerts" : "0 Alerts"},
            {"Dest" : "School", "Total Alerts" : "30 Alerts"},
            {"Dest" : "Parents", "Total Alerts" : "81 Alerts"},
            {"Dest" : "Work", "Total Alerts" : "159 Alerts"},
            {"Dest" : "Home", "Total Alerts" : "55 Alerts"},
            {"Dest" : "Dizengoff st., Tel Aviv", "Total Alerts" : "139 Alerts"},
            {"Dest" : "Work", "Total Alerts" : "359 Alerts"}
            ];

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable() {
     var columns = addAllColumnHeaders(myList);
 
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
         }
         $("#excelDataTable").append(row$);
     }
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(myList)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
 
     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     $("#excelDataTable").append(headerTr$);
 
     return columnSet;
 }
