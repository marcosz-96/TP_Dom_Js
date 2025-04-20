// La siguiente funcion nos va a permitir agregar nuevas filas a la tabla
function add(){
    // Obtenemos la tabla y el cuerpo de la tabla 
    const table = document.querySelector("table tbody");

    // Creamos una nueva fila
    const new_row = document.createElement("tr");

    // Creamos las celdas para los datos solicitados en la tabla
    const cell_id = document.createElement("td");
    const cell_name = document.createElement("td");
    const cell_surname = document.createElement("td");
    const cell_nationality = document.createElement("td");

    // Asignamos los valores de las celdas
    const id = table.rows.length; // Crea un ID de manera automática a medida que se agregan filas
    const name = prompt("Ingrese el nombre:");
    const surname = prompt("Ingrese el apellido:");
    const nationality = prompt("Ingrese la nacionalidad:");

    // Asignamos los valores a las celdas
    cell_id.textContent = id;
    cell_name.textContent = name;
    cell_surname.textContent = surname;
    cell_nationality.textContent = nationality;

    // Agregamos la celdas a la nueva fila
    new_row.appendChild(cell_id);
    new_row.appendChild(cell_name);
    new_row.appendChild(cell_surname);
    new_row.appendChild(cell_nationality);

    // Agregamos los nuevos datos a la tabla
    table.appendChild(new_row);
}

// Luego se crea la funcion que permite modificar los datos de la tabla según la fila seleccionada
function modify_data(){
    const table = document.querySelector("table tbody");
    const row_index = prompt("Ingrese el número de la fila que desea modificar:") -1;
    
    // Primero se verfica que el ínidce ingresado sea válido antes de intentar modificar el dato
    if (row_index >= 0 && row_index < table.rows.length){
        const row = table.rows[row_index];
    

    // Una vez que verificamos, obtenemos los valores actuales de la fila
    const current_name = row.cells[1].textContent;
    const current_surname = row.cells[2].textContent;
    const current_nationality = row.cells[3].textContent;

    // Luego se ingresan los nuevos valores
    const new_name = prompt("Ingrese el nuevo nombre: ", current_name);
    const new_surname = prompt("Ingrese el nuevo apellido: ", current_surname);
    const new_nationality = prompt("Ingrese la nueva nacionalidad: ", current_nationality);

    // Luego asignamos los nuevos valores a las celdas
    row.cells[1].textContent = new_name;
    row.cells[2].textContent = new_surname;
    row.cells[3].textContent = new_nationality;
    } else {
        alert("El número de fila no es válido.");
    }
}

// tambén se crea una función que permite eliminar los datos de la tabla según la fila seleccionada
function delete_data(){
    const table = document.querySelector("table tbody");
    const row_index = prompt("Ingrese el número de la fila que desea eliminar") -1;

    // Se verifica que el índice ingresado sea válido
    if (row_index >= 0 && row_index < table.rows.length){
        table.deleteRow(row_index)
    } else{
        alert("El número de fila no es válido");
    }
}