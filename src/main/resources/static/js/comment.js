window.onload = function(){
    const btn = document.getElementById('comment_btn');
    btn.addEventListener('click', comment);
}

function comment(){
    const askAnswer = document.getElementById('input_imp').value;
    const askIdx = document.getElementById('ask_idx').value;
    // console.log(askAnswer,askIdx)
    fetch('http://52.79.146.68:7070/askapi/'+askIdx, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "transaction_time":`${new Date()}`,
            "resultCode":"ok",
            "description":"정상",
            "data":{
                "askIdx":askIdx,
                "askAnswer":askAnswer
            }
        }),
    })
        .then((res) => {
            alert('답글 등록 완료!')
            location.reload()
            return;
        })

        .catch((err) => {
            alert('에러!!');
            location.reload();
            return;
        });
}





