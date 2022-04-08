var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
})

function func(id) {
    let character = id;
    character = character.charAt(0).toUpperCase() + character.slice(1);
    document.getElementById('modalTitle').innerHTML=`${character} Translator`;
    document.getElementById('translate').addEventListener('click',search);
    async function search(){
        let searchText = document.getElementById('message').value;
        let results = await axios.get(`https://api.funtranslations.com/translate/${id}.json?text=${searchText}`);
        var ans = results.data.contents.translated;
        console.log(ans);
        document.getElementById('display').innerHTML=ans;
        document.getElementById('message').value='';  
    }
}