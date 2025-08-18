const spreadSheetContainer = document.querySelector("#spreadsheet-container");

const ROWS=10;
const COLS=10;
const spreadsheet=[];

class Cell{
    constructor(isHeader, disabled, data, row ,column, rowName, columnName, active=false)
    {
        this.isHeader=isHeader;
        this.disabled=disabled;
        this.data=data;
        this.row=row;
        this.column=column;
        this.rowName=rowName;
        this.columnName=columnName;
        this.active=active;
    }
}