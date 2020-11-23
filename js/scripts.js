function getCompanyName() {
    let c = document.getElementById("companyName")
    let name = prompt("Enter Caompany Name")
    console.log("User has input ",name)
    c.innerText = name
}