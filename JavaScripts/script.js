
var myObject = {
    color:"yellow",
    length: 15,
    write: function(){
        console.log("Escreveu");
    }

}

var myArray = [12,32,43,54,65,76]


//transforma objeto em JSON
//JSON.stringify(myObject)

//var myString = JSON.stringify(myObject)

//Transforma a string em JSON.
//JSON.parse(myString)

//lalal12345 lskdl al skf sl
//objeto elevador com funções para subir e descer.
var elevator = {
    floor:0,
    total:3,
    up(){
        if(this.floor < this.total){
            this.floor++
        }
        this.print(this.floor)
    },
    down(){
        if(this.floor > 0){
            this.floor--
        }
        this.print(this.floor)
    },
    print(){
        console.log( `Andar: ${elevator.floor}` )
    } 
}
