// fill in javascript code here
let tbl = document.querySelector('table')
 tbl.setAttribute('id','t')
 tbl.setAttribute('align','center')

 let myForm = document.querySelector('form')
 let names = document.getElementById('name')
 let empId= document.getElementById('employeeID')
 let dept = document.getElementById('department')
 let exper = document.getElementById('exp')
 let mob = document.getElementById('mbl')
 let allData =[];
 let tbody =document.querySelector('tbody')

 myForm.addEventListener('submit',function(a){
    a.preventDefault()
     //console.log(names.value);
     //console.log(empId.value);
     //console.log(dept.value);
     //console.log(exper.value);
     //console.log(mob.value);
     let data ={};
     data.input1 = names.value;
     data.input2 = empId.value;
     data.input3 = dept.value;
     data.input4 = exper.value;
     data.input5 = mob.value;

     allData.push(data);

     //console.log(allData);
     allData.map((ale)=>
     {
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')

        //console.log(ale.input1);
        td1.innerText = ale.input1;
        td2.innerText = ale.input2;
        td3.innerText = ale.input3;
        td4.innerText = ale.input4;
        td5.innerText = ale.input5;
        row.append(td1,td1,td3,td4,td5);
        tbody.append(row);
     })
 })