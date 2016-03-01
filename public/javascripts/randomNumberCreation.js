$(function() {
	var i = 0;
    var bingo = {
        selectedNumbers: [],
        generateRandom: function() {
            var min = 1;
            var max = 89;
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            return random;
        },
        generateNextRandom: function() {
            if (bingo.selectedNumbers.length > 88) {
                alert("All numbers Exhausted");
                return 0;
            }
            var random = bingo.generateRandom();
            while ($.inArray(random, bingo.selectedNumbers) > -1) {
                random = bingo.generateRandom();
            }
            bingo.selectedNumbers.push(random);
            return random;
        }
    };
    $('td').each(function() {
        var concatClass = this.cellIndex + "" + this.parentNode.rowIndex;
        var numberString = parseInt(concatClass, 10).toString();
        $(this).addClass("cell" + numberString).text(numberString);
    });
    $('#btnGenerate').click(function() {
        var random = bingo.generateNextRandom().toString();
        i = i + 1;
        $('.bigNumberDisplay span').text(random);
        $('td.cell' + random).addClass('selected');
        // $('.showDetails').text('The Last Number generated is ' + random);
        // for (var i = 0;i < bingo.selectedNumbers.length; i++) {
        //     $('.showDetails').text('The Last Number generated is ' + bingo.selectedNumbers[i]);
        // };
        var array = bingo.selectedNumbers;
        var newHTML = [];
        $.each(array, function(index, value) {
            index = index+1;
            newHTML.push('<span class="randomText">' + 'The ' + index + ' Random Number Generated is ' + '<span class="value">' + value + '</span></span><br />');
        });
        $(".showDetails").html(newHTML.join(""));
        $.post('/post/uri', {number: i,suggest: random}, function(result){
	        console.log(result);
	    });
    });
    window.onbeforeunload = function(e) {
        e = e || window.event;
        var returnString = 'Are you sure?';
        if (e) {
            e.returnValue = returnString;
        }
        return returnString;
    };
});