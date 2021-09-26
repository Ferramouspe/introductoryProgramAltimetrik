function switch3to1() {
        let enabled = "#515151";
        let disabled = "#303030";
        let columns3 = document.querySelector('.columns3SVG').style.backgroundColor;
        let column1 = document.querySelector('.column1SVG').style.backgroundColor;
        
        if(columns3 == disabled){
            columns3 = enabled;
            column1 = disabled;
        }else{
            columns3 = enabled;
        }
}

function switch1to3() {
    let enabled = "#515151";
    let disabled = "#303030";
    let columns3 = document.querySelector('.columns3SVG').style.backgroundColor;
    let column1 = document.querySelector('.column1SVG').style.backgroundColor;
    
    if(column1 == disabled){
        column1 = enabled;
        columns3 = disabled;
    }else{
        column1 = enabled;
    }
}