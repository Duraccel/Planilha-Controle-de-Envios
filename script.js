function adicionarEquipamento() {
  var id = document.getElementById("inputID").value;
  var nome = document.getElementById("inputNome").value;
  var data = document.getElementById("inputData").value;

  var table = document.getElementById("equipamentos");
  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = id;
  cell2.innerHTML = nome;
  cell3.innerHTML = data;

  document.getElementById("inputID").value = "";
  document.getElementById("inputNome").value = "";
  document.getElementById("inputData").value = "";
}
