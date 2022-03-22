const inputTextArea = document.querySelector('#textarea')
const inputNova = document.querySelector('#floatingInputNova')
const inputAntiga = document.querySelector('#floatingInputAntiga')


function substituir(){
    inputTextArea.value = mudarTexto(transformarTextoArray(inputTextArea.value),inputAntiga.value, inputNova.value)
    //inputTextArea.value = mudarTexto(inputTextArea.value,inputAntiga.value, inputNova.value)
}

function transformarTextoArray(vlrText){
    let array = ['']
    let aux = 0
    for (let i = 0; i < vlrText.length; i++) {
        if (array[aux] === undefined){
            array[aux] = ''
        }
        if (vlrText[i] !== ' '){
            array[aux] += vlrText[i]
        } else {
            aux++
        }
    }
    return array
}

function mudarTexto(arrayText,vlrAntiga,vlrNova){
    let aux = ''
    let regex = /\W|_/;
    let size = vlrAntiga.length < vlrNova.length ? vlrAntiga.length : vlrNova.length
    
    for (let i = 0; i < arrayText.length; i++) {
        if (regex.test(arrayText[i])){
            let textRefact = ['']
            for (let j = 0; j < arrayText[i].length; j++) {
                if(!regex.test(arrayText[i][j])){
                    textRefact += arrayText[i][j]
                }
            }
            if (textRefact === vlrAntiga){
                let vlrNovaAntiga = vlrNova
                if(regex.test(arrayText[i][0])){
                    vlrNova = arrayText[i].substr(0,1) + vlrNova
                }
                if(regex.test(arrayText[i][arrayText[i].length - 1])){
                    vlrNova = vlrNova + arrayText[i].substr(-1)
                }
                arrayText[i] = vlrNova
                vlrNova = vlrNovaAntiga
            }
        } else if (arrayText[i] === vlrAntiga){
            arrayText[i] = vlrNova
        }
        aux += arrayText[i] + ' '
    }
    return aux
}