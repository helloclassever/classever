// 滾動到指定位置

function scrollEvent(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

// app store 滑鼠效果

var app = document.getElementById('app')
var google = document.getElementById('google')
var float = document.getElementById('float')

app.addEventListener('mouseover', function() {
    float.style.display = 'block';
})

google.addEventListener('mouseover', function() {
    float.style.display = 'block';
})

app.addEventListener('mouseleave', function() {
    float.style.display = 'none';
})

google.addEventListener('mouseleave', function() {
    float.style.display = 'none';
})

  // 訂閱

var mail = document.getElementById('mail')
var send = document.getElementById('send')

send.addEventListener('click', function() {

    // 正則檢查 mail 格式

    if(/^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/.test(mail.value)) {
        var data = {
            'entry.1927707847': mail.value
        };
        
        // 送出表單

        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSfyZrtwfOFBm4O3XvIyvUKx_fvq6nNBaN8J8hbaUpDlW8G0Ww/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function() {
                alert('Subscribed')
            }
        });

    } else {
        alert('Please confirm email format.')
    }
})