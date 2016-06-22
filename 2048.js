var game = (function(){
    var mat = [[],[],[],[]];
    var mat1 = [[],[],[],[]];
    var score = 0;
    var reset_button;
    function showGameOver(){
        var el2 = document.getElementById('gameOver');
        el2.style.display = "flex";
    }
    function shiftLeft(){
        var i;
        for(i=0;i<4;i++){
            var start=0, list_zeroes=[],check=false;
            for(j=0;j<4;j++){
                if(!mat[i][j]){
                    check = true;
                    list_zeroes.push(j);
                }
                else if(mat[i][j] && check){
                    mat[i][list_zeroes[start]] = mat[i][j];
                    mat[i][j]=0;
                    list_zeroes.push(j);
                    start++;
                }
            }
        }
    }
    function mergeLeft(){
        var i,j, value;
        copyMatrix();
        for(i=0;i<4;i++){
            value = 0;
            var mark;
            for(j=0;j<4;j++){
                if(mat[i][j]!==0 && !value){
                    value = mat[i][j];
                    mark = j;
                }
                else if(mat[i][j]!==0 && value){
                    if(mat[i][j] === value){
                        mat[i][mark]*=2;
                        score = +score + +mat[i][mark];
                        value = 0;
                        mat[i][j] = 0;
                    }
                    else{
                        value = mat[i][j];
                        mark = j;
                    }
                }
            }
        }
        shiftLeft();
        if(!checkMatrix()){
            while(true){
                var value2;
                var y = Math.floor((Math.random() * 101));
                if(y < 70){
                    value2 = 2;
                }
                else{ 
                    value2 = 4;
                }
                var x = Math.floor((Math.random() * 16));
                i = parseInt(x/4);
                j = x%4;
                if(mat[i][j]==0){
                    mat[i][j] = value2;
                    break;
                }
            }
        }
        redraw();
        if(isGameOver()){
            showGameOver();
        }
    }
    function shiftRight(){
        var i;
        for(i=0;i<4;i++){
            var start=0, list_zeroes=[],check=false;
            for(j=3;j>=0;j--){
                if(!mat[i][j]){
                    check = true;
                    list_zeroes.push(j);
                }
                else if(mat[i][j] && check){
                    mat[i][list_zeroes[start]] = mat[i][j];
                    mat[i][j]=0;
                    list_zeroes.push(j);
                    start++;
                }
            }
        }
    }
    function mergeRight(){
        var i,j, value;
        copyMatrix();
        for(i=0;i<4;i++){
            value = 0;
            var mark;
            for(j=3;j>=0;j--){
                if(mat[i][j]!==0 && !value){
                    value = mat[i][j];
                    mark = j;
                }
                else if(mat[i][j]!==0 && value){
                    if(mat[i][j] === value){
                        mat[i][mark]*=2;
                        score = +score + +mat[i][mark];
                        value = 0;
                        mat[i][j] = 0;
                    }
                    else{
                        value = mat[i][j];
                        mark = j;
                    }
                }
            }
        }
        shiftRight();
        if(!checkMatrix()){
            while(true){
                var value2;
                var y = Math.floor((Math.random() * 101));
                if(y < 70){
                    value2 = 2;
                }
                else{ 
                    value2 = 4;
                }
                var x = Math.floor((Math.random() * 16));
                i = parseInt(x/4);
                j = x%4;
                if(mat[i][j]==0){
                    mat[i][j] = value2;
                    break;
                }
            }
        }
        redraw();
        if(isGameOver()){
            showGameOver();
        }
    }
    function mergeUp(){
        var i,j, value;
        copyMatrix();
        for(j=0;j<4;j++){
            value = 0;
            var mark;
            for(i=0;i<4;i++){
                if(mat[i][j]!==0 && !value){
                    value = mat[i][j];
                    mark = i;
                }
                else if(mat[i][j]!==0 && value){
                    if(mat[i][j] === value){
                        mat[mark][j]*=2;
                        score = +score + +mat[mark][j];
                        value = 0;
                        mat[i][j] = 0;
                    }
                    else{
                        value = mat[i][j];
                        mark = i;
                    }
                }
            }
        }
        shiftUp();
        if(!checkMatrix()){
            while(true){
                var value2;
                var y = Math.floor((Math.random() * 101));
                if(y < 70){
                    value2 = 2;
                }
                else{ 
                    value2 = 4;
                }
                var x = Math.floor((Math.random() * 16));
                i = parseInt(x/4);
                j = x%4;
                if(mat[i][j]==0){
                    mat[i][j] = value2;
                    break;
                }
            }
        }
        redraw();
        if(isGameOver()){
            showGameOver();
        }
    }
    function shiftUp(){
        var i;
        for(j=0;j<4;j++){
            var start=0, list_zeroes=[],check=false;
            for(i=0;i<4;i++){
                if(!mat[i][j]){
                    check = true;
                    list_zeroes.push(i);
                }
                else if(mat[i][j] && check){
                    mat[list_zeroes[start]][j] = mat[i][j];
                    mat[i][j]=0;
                    list_zeroes.push(i);
                    start++;
                }
            }
        }
    }
    function mergeDown(){
        var i,j, value;
        copyMatrix();
        for(j=0;j<4;j++){
            value = 0;
            var mark;
            for(i=0;i<4;i++){
                if(mat[i][j]!==0 && !value){
                    value = mat[i][j];
                    mark = i;
                }
                else if(mat[i][j]!==0 && value){
                    if(mat[i][j] === value){
                        mat[mark][j]*=2;
                        score = +score + +mat[mark][j];
                        value = 0;
                        mat[i][j] = 0;
                    }
                    else{
                        value = mat[i][j];
                        mark = i;
                    }
                }
            }
        }
        shiftDown();
        if(!checkMatrix()){
            while(true){
                var value2;
                var y = Math.floor((Math.random() * 101));
                if(y < 70){
                    value2 = 2;
                }
                else{ 
                    value2 = 4;
                }
                var x = Math.floor((Math.random() * 16));
                i = parseInt(x/4);
                j = x%4;
                if(mat[i][j]==0){
                    mat[i][j] = value2;
                    break;
                }
            }
        }
        redraw();
        if(isGameOver()){
            showGameOver();
        }
    }
    function shiftDown(){
        var i;
        for(j=0;j<4;j++){
            var start=0, list_zeroes=[],check=false;
            for(i=3;i>=0;i--){
                if(!mat[i][j]){
                    check = true;
                    list_zeroes.push(i);
                }
                else if(mat[i][j] && check){
                    mat[list_zeroes[start]][j] = mat[i][j];
                    mat[i][j]=0;
                    list_zeroes.push(i);
                    start++;
                }
            }
        }
    }
    function direction2(e){
        e.preventDefault();
        if(e.keyCode == 37){
            mergeLeft();
        }
        else if(e.keyCode === 38){
            mergeUp();
        }
        else if(e.keyCode === 39){
            mergeRight();
        }
        else if(e.keyCode === 40){
            mergeDown();
        }
    }
    function direction(tag){
        if(tag == "left"){
            mergeLeft();
        }
        else if(tag == "up"){
            mergeUp();
        }
        else if(tag == "right"){
            mergeRight();
        }
        else if(tag == "down"){
            mergeDown();
        }
    }
    function resetGame(){
        var el2 = document.getElementById('gameOver');
        el2.style.display = "none";
        var el3 = document.getElementById('main_id');
        el3.style.display = 'flex';
        mat = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        var i,j,t;
        for(t=0;t<2;t++){
            var value2;
            var y = Math.floor((Math.random() * 101));
            if(y < 70){
                value2 = 2;
            }
            else{ 
                value2 = 4;
            }
            var x = Math.floor((Math.random() * 16));
            i = parseInt(x/4);
            j = x%4;
            if(mat[i][j]==0){
                mat[i][j] = value2;
            }
        }
        score = 0;
        redraw();
    }
    function isGameOver(){
        var over = true,check2 = false, check3 = false;
        var m,n;
        for(m=0;m<4;m++){
            for(n=0;n<4;n++){
                if(mat[m][n] === 0){
                    over = false;
                    break;
                }
            }
        }
        if(over){
            for(m=0;m<4;m++){
                for(n=0;n<3;n++){
                   if(mat[m][n] == mat[m][n+1]){
                        check2 = true;
                        break;
                   }
                }
            }
            if(!check2){
                 for(n=0;n<4;n++){
                    for(m=0;m<3;m++){
                        if(mat[m][n] == mat[m+1][n]){
                            check3 = true;
                            break;
                        }
                    }
                }
            }
            else{
                return false;
            }
            if(check3){
                return false;
            }
            else{
                return true;
            }
        }
        else{
            return false;
        }         
    }
    function redraw(){
        var m,n,x,el,score_el,k,class_name;
        score_el = document.getElementById('Score');
        score_el.innerHTML = "Score: " + score;
        for(m=0;m<4;m++){
            for(n=0;n<4;n++){
                k = mat[m][n];
                x = 4*m + n;
                el = document.getElementById(+x);
                if(k==0){
                    el.innerHTML = "";
                }
                else{
                    el.innerHTML = k;
                }
                if(k <= 2048){
                    class_name = +k;
                    el.className = "tile";
                    el.className += " tile_" + class_name;
                }
                else{
                    el.className = "tile";
                    el.className += " tile_else";
                }
            }
        }
        console.log(mat);
    }
    function copyMatrix(){
        var m,n;
        for(m=0;m<4;m++){
            for(n=0;n<4;n++){
                mat1[m][n] = mat[m][n]; 
            }
        }
    }
    function checkMatrix(){
        var m,n;
        var checkmat = true;
        for(m=0;m<4;m++){
            for(n=0;n<4;n++){
                if(mat1[m][n] !== mat[m][n]){
                    checkmat = false;
                    break;
                } 
            }
        }
        if(!checkmat) {
            return false;
        }
        else{
            return true;
        }
    }
    function init(){

        resetGame();
        document.body.addEventListener('keydown', direction2);
        if (annyang) {
            var commands = {
                '*tag': direction
            };
            annyang.addCommands(commands);
            annyang.debug();
            annyang.start();
        }
        reset_button = document.getElementById('Reset');
        reset_button.addEventListener('click',resetGame);
    }
    return {
        init: init
    };
})();
