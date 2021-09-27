function switch3to1() {
        let enabled = "#515151";
        let disabled = "#303030";
        let columns3 = document.getElementById("columns3Id").style.backgroundColor;
        let column1 = document.getElementById("column1Id").style.backgroundColor;
        
        columns3 = enabled;
        column1 = disabled;
}

function switch1to3() {
    let enabled = "#515151";
    let disabled = "#303030";
    let columns3 = document.getElementById("columns3Id").style.backgroundColor;
    let column1 = document.getElementById("column1Id").style.backgroundColor;
    
    column1 = enabled;
    columns3 = disabled;
}
