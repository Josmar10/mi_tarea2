let allResult = JSON.parse(localStorage.getItem('allResult')) || [];
showData();

function deleteResult ( key ){
    allResult.slice(key , 1);

    const datafiltered = allResult.filter((e, i )=> i !=key);
    localStorage.setItem("allResult", JSON.stringify(datafiltered));
    allResult = datafiltered;
    window.location.reload(true);
}

function showData(){
    let resultdiv = document.getElementById('result');

    allResult.map((e, i) =>{
        resultdiv.innerHTML = `
        <div class="d-flex">
             <p> ${e.result}</p>
             <button class="borrar" onclick="deleteResult(${i})"  > borrar </button>
        </div>     
        `;
    }
    )
}

function calculation(v) {
    para = document.createElement('p');
    data = v + '=' + eval(v);

    allResult.push({result : data});
    localStorage.setItem("allResult", JSON.stringify(allResult));
    allResult = JSON.parse(localStorage.getItem('allResult'));
    window.location.reload(true);
}

function backspace(b){
    return b.slice(0, b.length - 1);
}