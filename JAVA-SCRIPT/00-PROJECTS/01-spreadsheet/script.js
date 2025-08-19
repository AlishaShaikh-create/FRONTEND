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

            const cell=new Cell(isHeader,isDisabled,cellData, i,j,rowName,columnName ,false);
            spreadsheetRow.push(cell);
            
        }
        spreadsheet.push(spreadsheetRow);
    }
    console.log(spreadsheet);
   drawSpreadSheet()
}
createSpreedSheet();
 
function drawSpreadSheet()
{
    for(let i=0;i<spreadsheet.length;i++)
    {
        let rowElementContainer=document.createElement("div");
        rowElementContainer.className='cell-row'

        for(let j=0;j<spreadsheet[i].length;j++)
        {
            const cell=spreadsheet[i][j];
            rowElementContainer.append(createCellElement(cell));
        }
        spreadSheetContainer.appendChild(rowElementContainer)
    }
}

function createCellElement(cell)
{
  const cellElement=document.createElement('input');
  cellElement.className='cell';
  cellElement.value =cell.data;
  cellElement.id='cell_'+cell.row+cell.column;
  cellElement.disabled=cell.disabled;
 return cellElement;
}