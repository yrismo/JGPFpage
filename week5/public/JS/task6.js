function totup(myform)
{
    let total = 0;
    for(let i = 0; i< myform.elements.entry.length; i ++)
        {
        total += parseFloat(myform.elements.entry[i].value)
        }
    total = total * (1 - myFormElements.d1.value/100)

    document.getElementById("totalled").innerHTML = total.toFixed(2);
}