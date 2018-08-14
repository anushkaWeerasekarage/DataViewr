function doGet() {
  return HtmlService.createTemplateFromFile('INDEX').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile('STYLESHEET').getContent();
}
/*
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Web Interface')
      .addItem('Deploy As Web app', 'menuItem1')
      //.addSeparator()
      //.addSubMenu(ui.createMenu('Sub-menu')
      //.addItem('Second item', 'menuItem2'))
      .addToUi();
      }
 */
function onOpen(e) {
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Show web interface', 'showWebInterface')
      .addToUi();
}
function onInstall(e) {
  onOpen(e);
}
/*
function showSidebar() {
  var ui = HtmlService.createTemplateFromFile('INDEX')
      .evaluate();
  SpreadsheetApp.getUi().showSidebar(ui);
}
*/

 function showWebInterface() {
  //SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  //.alert("hello");
  
     // Display a modeless dialog box with custom HtmlService content.
 /*var htmlOutput = HtmlService
     .createHtmlOutput('<p><a target=_blank href="https://script.google.com/macros/s/AKfycbyo7OCScSucy2OUOt2aYL2qH8W5axW4Zuv4uoLFmpBc/dev"> Click </a></p>')
     .setWidth(150)
     .setHeight(150);*/
    var ui = HtmlService.createTemplateFromFile('INDEX')
      .evaluate().setWidth(1200)
     .setHeight(1100);
   
 SpreadsheetApp.getUi().showModalDialog(ui, 'Web Interface for your Google Spread Sheet');       
     }
     
     

/*
function myFunction() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheets()[0];
  var dataRange = dataSheet.getRange(2, 2, dataSheet.getMaxRows() - 1, 2);
  var names = getRowsData(dataSheet, dataRange);
  var n = [];
 
  for(var i = 0; i < names.length; i++) {
    n.push(names[i].userFirstName +" "+names[i].userLastName);
    //Logger.log(names[i].userFirstName);
  //Browser.msgBox(names);
  }
   return n;
  
}
*/
function radioFunction(no) {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheets()[0];
   //no = 4;
  var dataRange = dataSheet.getRange(2, no, dataSheet.getMaxRows() - 1, 1);
  //var names = getRowsData(dataSheet, dataRange);
  var names = dataRange.getValues();
  Logger.log(names);
  Logger.log('------------');
  var n = [];
   
  
  for(var i = 0; i < names.length; i++) {
    
      n.push(names[i].toString());
    
    //Logger.log(names[i].userFirstName);
  //Browser.msgBox(names);
  }
  Logger.log(n);
  return n;
  
}

function rowFunction() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheets()[0];
  var dataRange = dataSheet.getRange(1, 1, 1, dataSheet.getMaxColumns());
  //var v = getRowsData(dataSheet, dataRange);
  var v = dataRange.getValues();
  var values = [];
  var s = v.toString();
  //Logger.log(s);
  values = s.split(',');
 /*
  for(var i = 0; i < v.length; i++) {
    var s = v[i].toString();
    Logger.log(s);
    values = s.split(',');
    //values.push(v[i]);
  //Browser.msgBox(names);
  }
  */
  for(var j = 0; j < values.length; j++) {
    Logger.log(values[j]);
  }
   return values;
  
}
function rowValues(num) {
 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheets()[0];
  var s = "";
  var values = [];
  //num = 1; 
  //var v = [];
  //var x = num + 2;
  var dataRange = dataSheet.getRange(num, 1, 1, dataSheet.getMaxColumns());
  //var v = getRowsData(dataSheet, dataRange);
  var v = dataRange.getValues();
  s = v.toString();
  //Logger.log(s);
  values = s.split(',');
 /*
  for(var i = 0; i < v.length; i++) {
    var s = v[i].toString();
    Logger.log(s);
    values = s.split(',');
    //values.push(v[i]);
  //Browser.msgBox(names);
  }
  
  for(var j = 0; j < values.length; j++) {
    Logger.log(values[j]);
  }
  */
   //Logger.log(values);
   arr1 = rowFunction();
   arr3 = [];
   var j = 0;
  
   for(var i = 0; i < arr1.length; i++) {
      arr3.push(arr1[i]); 
      while( j < values.length) {
         arr3.push(values[j]);
         j++;
         break;
    } 
  }
  return arr3;
  
}
/*
function mergeArray(arr1, arr2) {
  arr1 = rowFunction();
  arr2 = rowValues(2);
  arr3 = [];
  var j = 0;
  
  for(var i = 0; i < arr1.length; i++) {
      arr3.push(arr1[i]); 
      while( j < arr2.length) {
         arr3.push(arr2[j]);
         j++;
         break;
    } 
  }
 
  Logger.clear();
  for(var k = 0; k < arr3.length; k++) {
      Logger.log(arr3[k]);
  }
}
 */
/*
function ageFilter(v) {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheets()[0];
  var dataRange = dataSheet.getRange(2, 2, dataSheet.getMaxRows() - 1, dataSheet.getMaxColumns());
  var rows = getRowsData(dataSheet, dataRange);
  var n = [];
  for(var i = 0; i < rows.length; i++) {
    if(v == 1) {
      if(rows[i].userAge >= 20 && rows[i].userAge <=30) {
       n.push(rows[i].userFirstName +" "+rows[i].userLastName+""+(i+2));
    }
  }
    if(v == 2) {
      if(rows[i].userAge >= 31 && rows[i].userAge <= 40) {
        n.push(rows[i].userFirstName +" "+rows[i].userLastName+""+(i+2));
    }
  }
    if(v == 3) {
      if(rows[i].userAge >= 41) {
       n.push(rows[i].userFirstName +" "+rows[i].userLastName+""+(i+2));
    }
  }
  }
   Logger.log(n);
   return n;
  
}
*/
/*
function findDate() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheets()[0];
  var dataRange = dataSheet.getRange(1, 1, 1, dataSheet.getMaxColumns());
  //var rows = getRowsData(dataSheet, dataRange);
  var colVal = dataRange.getValues();
  var r = 1;
  var n = [];
  for(var i = 0; i < colVal.length; i++) {
    if(colVal[i] == 'date') {
       r = i;
    //var fDate = Utilities.formatDate(rows[i].date, "GMT", "yyyy-MM-dd");
  }
  }
 
  Logger.log(r);
  return r;
  
}
*/
function dateFilter(v1, v2, column) {
  //var col = findDate();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheets()[0];
  var dataRange = dataSheet.getRange(2, 1, dataSheet.getMaxRows() - 1, dataSheet.getMaxColumns());
  var colVal = getRowsData(dataSheet, dataRange);
  var names = [];
  //var co = (column - 1);
  var colName = [];
  colName = rowFunction();
  var cc = colName[column];
  var ccc = normalizeHeader(cc);
  Logger.log(ccc);
  //v1 = '2018-03-12';
  //v2 = '2018-03-22';
  
  for(var i = 0; i < colVal.length; i++) {
    var fDate = Utilities.formatDate(colVal[i].timestamp, "GMT", "yyyy-MM-dd");
    Logger.log(fDate);
    if(fDate >= v1 && fDate <= v2) {
       //names.push(colVal[i].userFirstName +" "+ colVal[i].userLastName+""+(i+2));
      Logger.log(colVal[i][ccc]);
      names.push(colVal[i][ccc] +"*"+(i+2));
      //Logger.log(names);
    }
  }
 
  Logger.log(names);
  return names;
}
/*
function fetchURL() {
  //windowObjectReference = window.open("https://script.google.com/macros/s/AKfycbzrzguW1qWBCh9ExZQnBbiHEo0-k6OsOpFwYD0pMTp25dA8t4fk/exec", "CNN_WindowName", strWindowFeatures);
  window.open("https://google.com");
  
}
*/

function getRowsData(sheet, range, columnHeadersRowIndex) {
  columnHeadersRowIndex = columnHeadersRowIndex || range.getRowIndex() - 1;
  var numColumns = range.getEndColumn() - range.getColumn() + 1;
  var headersRange = sheet.getRange(columnHeadersRowIndex, range.getColumn(), 1, numColumns);
  var headers = headersRange.getValues()[0];
  return getObjects(range.getValues(), normalizeHeaders(headers));
}

// For every row of data in data, generates an object that contains the data. Names of
// object fields are defined in keys.
// Arguments:
//   - data: JavaScript 2d array
//   - keys: Array of Strings that define the property names for the objects to create
function getObjects(data, keys) {
  var objects = [];
  for (var i = 0; i < data.length; ++i) {
    var object = {};
    var hasData = false;
    for (var j = 0; j < data[i].length; ++j) {
      var cellData = data[i][j];
      if (isCellEmpty(cellData)) {
        continue;
      }
      object[keys[j]] = cellData;
      hasData = true;
    }
    if (hasData) {
      objects.push(object);
    }
  }
  return objects;
}

// Returns an Array of normalized Strings.
// Arguments:
//   - headers: Array of Strings to normalize
function normalizeHeaders(headers) {
  var keys = [];
  for (var i = 0; i < headers.length; ++i) {
    var key = normalizeHeader(headers[i]);
    if (key.length > 0) {
      keys.push(key);
    }
  }
  return keys;
}

// Normalizes a string, by removing all alphanumeric characters and using mixed case
// to separate words. The output will always start with a lower case letter.
// This function is designed to produce JavaScript object property names.
// Arguments:
//   - header: string to normalize
// Examples:
//   "First Name" -> "firstName"
//   "Market Cap (millions) -> "marketCapMillions
//   "1 number at the beginning is ignored" -> "numberAtTheBeginningIsIgnored"
function normalizeHeader(header) {
  var key = "";
  var upperCase = false;
  for (var i = 0; i < header.length; ++i) {
    var letter = header[i];
    if (letter == " " && key.length > 0) {
      upperCase = true;
      continue;
    }
    if (!isAlnum(letter)) {
      continue;
    }
    if (key.length == 0 && isDigit(letter)) {
      continue; // first character must be a letter
    }
    if (upperCase) {
      upperCase = false;
      key += letter.toUpperCase();
    } else {
      key += letter.toLowerCase();
    }
  }
  return key;
}

// Returns true if the cell where cellData was read from is empty.
// Arguments:
//   - cellData: string
function isCellEmpty(cellData) {
  return typeof(cellData) == "string" && cellData == "";
}

// Returns true if the character char is alphabetical, false otherwise.
function isAlnum(char) {
  return char >= 'A' && char <= 'Z' ||
    char >= 'a' && char <= 'z' ||
    isDigit(char);
}

// Returns true if the character char is a digit, false otherwise.
function isDigit(char) {
  return char >= '0' && char <= '9';
}


