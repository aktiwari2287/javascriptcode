let url=`http://localhost:8080/`;
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
        url: url+'users/all',
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
        url: url+`users/remove/${username}`,
        type: 'DELETE',
        success: (data)=>{
            display(data);
        }
      });
}
function reset(){
    $.ajax({
        url: url+'users/reset',
        dataType: 'json',
        success:function(data){
            console.log(data);
            display(data);
        }
    });
}

function addUser(name,address,email,age,img){
        var user={name,address,email,age,img};
        console.log(user);
        
       jQuery.ajax({
        url: url+"users/add",
        type: "POST",
        data: JSON.stringify(user),
        contentType:"application/json",
        dataType: "json",
        success: function(result) {
        console.log(result);
        display(result);
        }
    }); 
}
document.getElementById("search").addEventListener("input",(e)=>{
    $.ajax({
        url: url+`users/search?name=${e.target.value}`,
        dataType: 'json',
        success:function(data){
            console.log(data);
            display(data);
        }
    });
});


document.getElementById("add").addEventListener("click",(e)=>{
    let name=document.getElementById("name").value,
    address=document.getElementById("address").value,
    email=document.getElementById("email").value,
    age=document.getElementById("age").value,
    img=document.getElementById("img").value;

    addUser(name,address,email,age,img);
});