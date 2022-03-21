const inputTextArea = document.querySelector('#textarea')
const inputNova = document.querySelector('#floatingInputNova')
const inputAntiga = document.querySelector('#floatingInputAntiga')


function substituir(){
    inputTextArea.value = mudarTexto(inputTextArea.value,inputAntiga.value, inputNova.value)
}

function mudarTexto(vlrText,vlrAntiga,vlrNova){
    vlrAntiga = ' ' + vlrAntiga + ' '
    vlrNova = ' ' + vlrNova + ' '
    vlrText = ' ' + vlrText + ' '
    vlrText = vlrText.split(vlrAntiga).join(vlrNova)
    vlrText = vlrText.substring(1)
    return vlrText
}