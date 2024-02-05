<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script>
function logResults(json) {
    console.log(json)
}

$.ajax({
    url: "https://raw.githubusercontent.com/cben/sandbox/master/json/index.json",
    dataType: "json"
}).done(function(result){
    console.log(result)
})
</script>
