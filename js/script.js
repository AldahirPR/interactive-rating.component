function ratings1(){
    let rating1 = document.getElementById('rating-1').getAttribute('value');
    
    document.getElementById('rating-1').classList.add('rating-element-selected');
    document.getElementById('rating-2').classList.remove('rating-element-selected');
    document.getElementById('rating-3').classList.remove('rating-element-selected');
    document.getElementById('rating-4').classList.remove('rating-element-selected');
    document.getElementById('rating-5').classList.remove('rating-element-selected');

    document.getElementById('rating-selected-text').innerHTML = ("You selected ") + rating1 + (" out of 5");
}

function ratings2(){
    let rating2 = document.getElementById('rating-2').getAttribute('value');

    document.getElementById('rating-1').classList.remove('rating-element-selected');
    document.getElementById('rating-2').classList.add('rating-element-selected');
    document.getElementById('rating-3').classList.remove('rating-element-selected');
    document.getElementById('rating-4').classList.remove('rating-element-selected');
    document.getElementById('rating-5').classList.remove('rating-element-selected');

    document.getElementById('rating-selected-text').innerHTML = ("You selected ") + rating2 + (" out of 5");
}

function ratings3(){
    let rating3 = document.getElementById('rating-3').getAttribute('value');

    document.getElementById('rating-1').classList.remove('rating-element-selected');
    document.getElementById('rating-2').classList.remove('rating-element-selected');
    document.getElementById('rating-3').classList.add('rating-element-selected');
    document.getElementById('rating-4').classList.remove('rating-element-selected');
    document.getElementById('rating-5').classList.remove('rating-element-selected');

    document.getElementById('rating-selected-text').innerHTML = ("You selected ") + rating3 + (" out of 5");
}

function ratings4(){
    let rating4 = document.getElementById('rating-4').getAttribute('value');

    document.getElementById('rating-1').classList.remove('rating-element-selected');
    document.getElementById('rating-2').classList.remove('rating-element-selected');
    document.getElementById('rating-3').classList.remove('rating-element-selected');
    document.getElementById('rating-4').classList.add('rating-element-selected');
    document.getElementById('rating-5').classList.remove('rating-element-selected');

    document.getElementById('rating-selected-text').innerHTML = ("You selected ") + rating4 + (" out of 5");
}

function ratings5(){
    let rating5 = document.getElementById('rating-5').getAttribute('value');

    document.getElementById('rating-1').classList.remove('rating-element-selected');
    document.getElementById('rating-2').classList.remove('rating-element-selected');
    document.getElementById('rating-3').classList.remove('rating-element-selected');
    document.getElementById('rating-4').classList.remove('rating-element-selected');
    document.getElementById('rating-5').classList.add('rating-element-selected');

    document.getElementById('rating-selected-text').innerHTML = ("You selected ") + rating5 + (" out of 5");
}

function submit(){
    document.getElementById('rating-state').classList.add('none');
    document.getElementById('thank-you').classList.add('block');
}