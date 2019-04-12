/*
let empModule=(function(){
    function getEmps(){
        return $.ajax({
            url: 'https://randomuser.me/api/?results=30',
            dataType: 'json'
        });
    }
    function display(data){
        let tab=document.getElementById("emp");
        let i=1;
        data.results.forEach(element => {
            let {name,email,location,registered,picture}=element;
            let row = tab.insertRow(i++);
            row.insertCell(0).innerHTML=name.first+" "+name.last;
            row.insertCell(1).innerHTML=location.street;
            row.insertCell(2).innerHTML=email;
            row.insertCell(3).innerHTML=registered.age;
            row.insertCell(4).innerHTML=`<img src=${picture.thumbnail}>`;    
        });
        window.allEmps=data.results;
    }
    getEmps().done(display);
    function search(text){
        let results=window.allEmps.filter(s=>s.name.first.indexOf(text)>=0)
        console.log(results);
        
    }
    return {search};

})();
*/
//empModule.search("adam");

function display(data){
    let tab=document.getElementById("emp");
    $("#emp").find("tr:not(:first)").remove();
    let i=1;
    data.users.forEach(element => {
        let {name,email,address,age,img}=element;
        let row = tab.insertRow(i++);
        row.insertCell(0).innerHTML=name;
        row.insertCell(1).innerHTML=address;
        row.insertCell(2).innerHTML=email;
        row.insertCell(3).innerHTML=age;
        row.insertCell(4).innerHTML=`<img src=${img} class='image'>`;    
        row.insertCell(5).innerHTML=`
        <button href="#" class="btn btn-info btn-md">
        <span class="glyphicon glyphicon-pencil"></span> 
      </button>
        `;
        row.insertCell(6).innerHTML=`
            <button class="btn btn-info btn-md" onclick=remove('${name}')>
                <i class="fa fa-trash"></i>
            </button
        `;
    });
}

(()=>{
    $.ajax({
        url: 'http://localhost:8080/users/all',
        dataType: 'json',
        success:function(data){
            console.log(data);
            display(data);
        }
    });
    
})();

function remove(username){
    console.log(username);
    $.ajax({
        url: `http://localhost:8080/users/remove/${username}`,
        type: 'DELETE',
        success: (data)=>{
            display(data);
        }
      });
}
function reset(){
    $.ajax({
        url: 'http://localhost:8080/users/reset',
        dataType: 'json',
        success:function(data){
            console.log(data);
            display(data);
        }
    });
}
function add(){
    var user={name:"Puja",address:"Patna",email:"puja@gmail.com",age:"18",img:"https://randomuser.me/api/portraits/men/90.jpg"};
    jQuery.ajax({
        url: "http://localhost:8080/users/add",
        type: "POST",
        data: JSON.stringify(user),
        contentType:"application/json",
        dataType: "json",
        success: function(result) {
        console.log(result);
        
        }
    }); 
}
document.getElementById("search").addEventListener("input",(e)=>{
    $.ajax({
        url: `http://localhost:8080/users/search?name=${e.target.value}`,
        dataType: 'json',
        success:function(data){
            console.log(data);
            display(data);
        }
    });
});