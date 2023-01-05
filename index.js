const txt = document.getElementById('textAdd');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
const out3 = document.getElementById('output3');

const createTask = () => {
    const value = document.getElementById("select").value;
    const outText = document.createElement('p');
    
    outText.textContent = txt.value;
    if (value == 'column1') {
        out1.appendChild(outText)
    } else if (value == 'column2'){
        out2.appendChild(outText)
    } else {
        out3.appendChild(outText)
    }
}
