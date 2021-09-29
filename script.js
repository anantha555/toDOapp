userName = document.getElementById("userName");
userEmail = document.getElementById("userEmail")
userPhone = document.getElementById("userPhone")
userProject = document.getElementById("userproject")
userDesc = document.getElementById("userDesc")
userStartDate = document.getElementById("UserStartDate")
userEndDate = document.getElementById("UserEndDate")
tbody = document.getElementById("user_data")

// temp id 
let tempID = 1;
let usersData1 =[
    {
        id:1,
        name:'Anantha',
        email:"ak@g.com",
        phone: 987654321,
        project: "ABC",
        desc: "asdfhjkl",
        startDate:'01/02/21',
        endDate:'01/02/21',
        status: "done"
    },
    {
        id:2,
        name:'Anantha',
        email:"ak@g.com",
        phone: 987654321,
        project: "ABC",
        desc: "asdfhjkl",
        startDate:'01/02/21',
        endDate:'01/02/21',
        status: "done"
    },
    {
        id:3,
        name:'Anantha',
        email:"ak@g.com",
        phone: 987654321,
        project: "ABC",
        desc: "asdfhjkl",
        startDate:'01/02/21',
        endDate:'01/02/21',
        status: "done"
    }
]

let usersData = []

const onSave = (event) => {
    event.preventDefault()
    let user = {}
    user.id = tempID++
    user.name = userName.value
    user.email = userEmail.value
    user.phone = userPhone.value
    user.project = userProject.value
    user.desc = userDesc.value
    user.startDate = userStartDate.value
    user.endDate = userEndDate.value

    usersData.push(user);
    showDate(usersData)

    console.log(usersData)

}

const showDate = (data) =>{
    let str ='';

    for(let i =0; i< data.length ; i++){
        str +=`<tr>
        <td>${i+1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].project}</td>
        <td>${data[i].desc}</td>
        <td>${data[i].status}</td>
        <td>${data[i].startDate}</td>
        <td>${data[i].endDate}</td>
        <td>
            <button type="button" onclick="updateUser(${data[i].id})">edit</button>
            <button type="button" onclick="removeUser(${data[i].id})">delete</button>
        </td>
    </tr> 
        `
    }
    // console.log(str)
    tbody.innerHTML = str;
    
}

showDate(usersData)
console.log(usersData);

function updateUser(userId){
    // using the user id , and doc.get elements , data will be populated 
    // new form need to be genrated for edit to fill the data and update
    console.log('in update')
}

function removeUser(userId){
    // using filter func, user will be removed
    console.log('in delete')
}

