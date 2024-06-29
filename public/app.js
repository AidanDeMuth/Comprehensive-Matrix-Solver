import matrixOperations from './matrixOperations.js';
import latexOutput from './latexOutput.js';
import {frac} from './frac.js';
import * as fraction from './frac.js';
import vector from './vector.js';
import {complex, printComplex} from './complex.js';
import * as comp from './complex.js';
import operations from "./operations.js";

/* -------- Event Listeners -------- */

export const createEventListeners = () => {
    document.addEventListener('DOMContentLoaded', function() {
        getTable();

        const submitButton = document.getElementById('submitButton');

        submitButton.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                submitButton.click();
                console.log('Enter key pressed on submitButton');
            }
        });
    });
}

// Ensures selection is within bounds

export const checkValue = (element) => {
    let min = element.min;
    let max = element.max;

    let value = parseInt(element.value);
    if (value > max) {
      element.value = max;
    } 
    else if (value < min) {
      element.value = min;
    }
}

// Creates table

export const getTable = () => {
    document.getElementById('Table Space').innerHTML = '';
    let num_rows = document.getElementById('Rows').value;
    console.log(num_rows);
    let num_cols = document.getElementById('Columns').value;
    console.log(num_cols);
    let table = document.createElement('Table')
    table.setAttribute('id', 'table');
    table.style.margin = 'auto';

    for (let x = 0; x < num_rows; x++) {
        let row = table.insertRow();
        for (let y = 0; y < num_cols; y++) {
        	let cell = row.insertCell();
        	let input_box = document.createElement('input');
        	input_box.style.width = '50px'

        	cell.appendChild(input_box);
        	cell.style.border = '1px solid black';

        	console.log('test');
        }
    }

    document.getElementById('Table Space').appendChild(table);
}

// Parses strings and converts to matrix

export const parseInputs = () => {
    let table = document.getElementById('table');
    let tableData = [];

    // Keeping this separate for now

    for (let i = 0; i < table.rows.length; i++) {
        let tableRow = table.rows.item(i).cells;
        let rowData = [];
        for (let j = 0; j < tableRow.length; j++) {
            rowData.push(tableRow.item(j).children[0].value);
        }
        tableData.push(rowData);
    }

    // Parse string here
    console.log(tableData);

    for (let i = 0; i < tableData.length; i++) {
        for (let j = 0; j < tableData[i].length; j++) {
            let oldString = tableData[i][j];
            oldString = oldString.replaceAll(' ', '');

            let currentString = '';
            let isPositive = true;

            let real = '';
            let complex = '';

            for (let index = 0; index < oldString.length; index++) {
                let char = oldString.charAt(index);
            }
        }
    }


}

export default {
    createEventListeners: createEventListeners,
    checkValue: checkValue,
    getTable: getTable,
    parseInputs: parseInputs
}