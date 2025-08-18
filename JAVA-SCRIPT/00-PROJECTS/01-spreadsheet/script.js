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

function createSpreedSheet()
{
  
    for(let i=0;i< COLS;i++)
    {
        let spreadsheetRow=[];
        for(let j=0;j<COLS;j++)
        {
            var isHeader, isDisabled, cellData='', rowName, columnName;
            const cell=new Cell(isHeader,isDisabled,cellData, i,j,rowName,columnName ,false)
            spreadsheetRow.push(cell);
            
        }
        spreadsheet.push(spreadsheetRow);
    }
    console.log(spreadsheet);
   
}
createSpreedSheet();
 
function drawSpreadSheet()
{
    for(let i=0;i<spreadsheet.length;i++)
    {
        for(let j=0;j<spreadsheet[i].length;j++)
        {
            let div=document.querySelector("#cell-status")
        }
    }
}