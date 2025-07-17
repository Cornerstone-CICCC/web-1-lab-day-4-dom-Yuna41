const allInput = document.querySelectorAll("input")
const firstNameInput = document.querySelector("#firstname")
const lastNameInput = document.querySelector("#lastname")
const emailInput = document.querySelector("#email")
const hireDateInput = document.querySelector("#hire_date")
const fileInput = document.querySelector('input[type="file"]')
const employeeList = document.querySelector("#employeeList")
const form = document.querySelector("form")

// all input required
allInput.forEach(input => {
  input.setAttribute("required", "required")
})

// only accept @canada.ca
emailInput.setAttribute("pattern", ".*@canada\.ca")
emailInput.setAttribute("title", "Only @canada.ca employees can register.")

// create employee list
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const email = emailInput.value
  const date = hireDateInput.value
  const filename = fileInput.files[0].name
  const tr = document.createElement("tr")
  const tdfirstName = document.createElement("td")
  const tdlastName = document.createElement("td")
  const tdemail = document.createElement("td")
  const tddate = document.createElement("td")
  const tdphoto = document.createElement("td")
  const tdBtn = document.createElement("td")
  tdfirstName.textContent = firstName
  tdlastName.textContent = lastName
  tdemail.textContent = email
  tddate.textContent = date
  tdphoto.innerHTML = `<img src="../images/${filename}">`
  tdBtn.innerHTML = `<button>Delete</button>`
  tr.appendChild(tdphoto)
  tr.appendChild(tdfirstName)
  tr.appendChild(tdlastName)
  tr.appendChild(tdemail)
  tr.appendChild(tddate)
  tr.appendChild(tdBtn)
  employeeList.appendChild(tr)

  tdBtn.addEventListener('click', () => {
    const result = confirm("Are you sure you want to delete this employee?")
    if(result){
      tr.remove()
    }
  })
})


