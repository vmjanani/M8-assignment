// CREATE AN ARRAY OF EMPLOYEES

let employees =[]

const showEmployeeCount = () => {
    let empCount = employees.length;
    const output = document.querySelector('output');
    output.innerText = `(${empCount})`;
  };
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

window.addEventListener('load', () => {
    if (JSON.parse(localStorage.getItem('employees').length)) {
      employees = JSON.parse(localStorage.getItem('employees'));
    } else {
      employees = [
        [12345678, 'ZAK', 1234, 'zak@e.com', 'Marketing'],
        [74732652, 'JESSICA', 5678, 'jessica@e.com', 'Engineering'],
        [53462543, 'MARK', 9012, 'mark@e.com', 'Administrative'],
        [67546135, 'FRED', 3456, 'fred@e.com', 'Quality Assurance'],
        [97453826, 'SALLY', 7890, 'sally@e.com', 'Executive'],
      ];
    }
  
    buildGrid();
  });
// GET DOM ELEMENTS

const form = document.querySelector('form');
const table = document.getElementById('empTable');
let tbody = document.querySelector('tbody');
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    const $ = (id) => document.getElementById(id);
    const id = $('id').value;
    const name = $('name').value;
    const extension = $('extension').value;
    const email = $('email').value;
    const department = $('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  const newEmployee = [id, name, extension, email, department];

  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  employees.push(newEmployee);

  // BUILD THE GRID
  buildGrid();

  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  document.getElementById('id').focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (confirm(`Are you sure you want to delete this row?`)) {
      // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
      const rowIndex = e.target.parentNode.rowIndex;
  
      // REMOVE EMPLOYEE FROM ARRAY
      employees.splice(rowIndex - 1, 1);
  
      // BUILD THE GRID
      buildGrid();
    }
  });

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.remove();
  
    // REBUILD THE TBODY FROM SCRATCH
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(document.createElement('tbody'));
    tbody = document.querySelector('tbody');
  
    for (let employee of employees) {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${employee[0]}</td>
      <td>${employee[1]}</td>
      <td>${employee[2]}</td>
      <td>${employee[3]}</td>
      <td>${employee[4]}</td>
      `;
  
      tbody.appendChild(row);
    }
  
    // UPDATE EMPLOYEE COUNT
    showEmployeeCount();
  
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
  }