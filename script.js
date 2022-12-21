"use strict";
const textareaInput = document.getElementById("inputValues");
const outputUniqueValue = document.getElementById("outputValueUnique");
let tBodyEl = document.querySelector("tbody");

button.addEventListener("click", () => {
  const inputValue = textareaInput.value.split("\n");
  const umrAndDupicate = getRepetetion(inputValue);
  console.log(umrAndDupicate);
  umrAndDupicate.sort((a, b) => {
    return b.duplicateEntries - a.duplicateEntries;
  });
  console.log(umrAndDupicate[0]["duplicateEntries"]);

  for (let i = 0; i < umrAndDupicate.length; i++) {
    // the logic to push data into the table

    tBodyEl.innerHTML += `
      <tr>
       <td>${umrAndDupicate[i]["Data"]}</td>
        <td>${umrAndDupicate[i]["duplicateEntries"]}</td>
     </tr>
    `;
  }
});

function getRepetetion(input) {
  let dataAndCount = [];
  input.forEach((umr) => {
    dataAndCount[umr] = dataAndCount[umr] ? dataAndCount[umr] + 1 : 1;
  });
  let countObjectArray = [];
  Object.entries(dataAndCount).forEach((item) => {
    let countObject = { Data: item[0], duplicateEntries: item[1] };
    countObjectArray.push(countObject);
  });
  return countObjectArray;
}
