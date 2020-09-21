$('#ButtonPost').on('click', function(e){
    e.preventDefault();
    
    const postData = $('#todoText').val();
    
    if (postData === ''){
        alert('Inserta un valor.');
        return;
    }

    $('#todoList').append(`
        <div class="check-item">
            <input type = "checkbox" name="todo" class="myCheckbox" />  ${postData} 
        </div>
    `);
});

$('#ButtonClear').on('click', function(e){
    e.preventDefault();
    $('.myCheckbox').prop('checked', false);
});

$('#ButtonMark').on('click', function(e){
    e.preventDefault();
    $('.myCheckbox').prop('checked', true);
});

$('#ButtonDelete').on('click', function(e){
    e.preventDefault();
    $('.check-item').remove();
});
