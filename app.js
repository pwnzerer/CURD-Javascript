const generate_table = (anyarray) => {
    let body = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
    document.body.append(table);
    let tbl = document.getElementsByTagName("table")[0]
    tbl.classList.add('table');
    let tblBody = document.createElement("tbody");
    for (const element of anyarray) {
      let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.className = "name";
        let cell2 = document.createElement("td");
        let cellText = document.createTextNode(element['name']);
        const anybtn = document.createElement("input");
        anybtn.value = 'Delete';
        anybtn.type = 'button';
        anybtn.id = element['name'];
        anybtn.onclick = this.deleteRow;
        anybtn.className = 'btn btn-danger';
        anybtn.style.marginLeft = "5em";
        const editbtn = document.createElement("input");
        editbtn.type = 'button';
        editbtn.onclick = this.toggleModal;
        editbtn.value = 'Edit';
        editbtn.className = 'btn btn-primary'
        cell2.appendChild(editbtn);
        cell2.appendChild(anybtn);
        cell.appendChild(cellText);
        row.appendChild(cell);
        row.appendChild(cell2);
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }
  const add_book = () => {
    let book_el = document.getElementById('add-book');
    let book_name = book_el.value;
    let tblBody = document.getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let cell2 = document.createElement("td");
    cell.className = "name";
    let cellText = document.createTextNode(book_name);
    const anybtn = document.createElement("input");
    anybtn.value = 'Delete';
    anybtn.type = 'button';
    anybtn.id = book_name;
    anybtn.onclick = this.deleteRow;
    anybtn.className = 'btn btn-danger';
    anybtn.style.marginLeft = "5em";
    const editbtn = document.createElement("input");
    editbtn.type = 'button';
    editbtn.onclick = this.toggleModal;
    editbtn.value = 'Edit';
    editbtn.className = 'btn btn-primary'
    cell2.appendChild(editbtn);
    cell2.appendChild(anybtn);
    cell.appendChild(cellText);
    row.appendChild(cell);
    row.appendChild(cell2);
    tblBody.appendChild(row);
  }


  function deleteRow() {
    let index = this.parentNode.parentNode.rowIndex;
    console.log(index);
    console.log(this);
    document.getElementsByTagName("table")[0].deleteRow(index);
  }

// const axios = require('axios').default;
function data() { axios.get('https://the-one-api.dev/v2/book')
  .then(function (response) {
    // let resdata = response.data;
    for (const element of response.data.docs){console.log(element);}
    generate_table(response.data.docs);
    console.log(response.data.docs);
    return response;
  })
  .catch(function (error) {
    console.log(error);})}

    let tableRowElement;
    function toggleModal() {
        tableRowElement = this.parentElement.parentElement;
        console.log(tableRowElement)
        const name = tableRowElement.getElementsByClassName('name')[0].textContent;
        console.log(name);
        document.getElementById('name').value = name;
        openModal(); }

        function openModal() {
          document.getElementById("backdrop").style.display = "block"
          document.getElementById("exampleModal").style.display = "block"
          document.getElementById("exampleModal").classList.add("show");
      }

      function closeModal() {
        document.getElementById("backdrop").style.display = "none"
        document.getElementById("exampleModal").style.display = "none"
        document.getElementById("exampleModal").classList.remove("show");
    }

    function saveInfo() {
      const name = document.getElementById('name').value;
      tableRowElement.getElementsByClassName('name')[0].innerText=name;
      closeModal();
  }

  data();