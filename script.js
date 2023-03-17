/* remember to include <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> before any of the scripts */

/* you only need to use <script></script> when including js codes in HTML files */

/* to display live Thu Mar 09 2023 13:46:05 GMT+0800 (Malaysia Time) */
/* <script type="text/javascript"> */
    var clockElement = document.getElementById('time');

    function time() {
        clockElement.textContent = new Date().toString();
    }

    setInterval(time, 1000);
/* </script> */

/* for animated dropdown menu (slide down and up) */
/* <script> */
    $(document).ready(function(){
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });
});
/* </script> */

/* for slide in and slide out animation for the side bar */
/* <script> */
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');

    toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    });
/* </script> */

/* for code block */
/* Original code block with copy button:
/* <script>
    var copyBtn = document.querySelectorAll('.copy-btn');
    var codeBlock = document.querySelectorAll('pre code');

    copyBtn.forEach(function(copyBtn) {
    copyBtn.addEventListener('click', function() {
    copyBtn.addEventListener('click', function() {
    copyToClipboard(codeBlock.textContent);
    copyBtn.textContent = 'Copied!';
    setTimeout(function() {
        copyBtn.textContent = 'Copy Code';
    }, 2000);
    });

    function copyToClipboard(text) {
    var dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    }
    });
});
</script> */

/* second version of the code below, but copy button is fixed at lower left of the code block, and copy button must be placed before pre code element. */

/* <script>
var copyBtn = document.getElementsByClassName('copy-btn');
var dummy = document.createElement('textarea');

console.log('copyBtn:', copyBtn);

for (var i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener('click', function() {
    console.log('Clicked');
    var codeBlock = this.previousElementSibling.querySelector('code');
    console.log('codeBlock:', codeBlock);
    dummy.value = codeBlock.textContent;
    console.log('dummy:', dummy);
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    this.textContent = 'Copied!';
    var self = this;
    setTimeout(function() {
        self.textContent = 'Copy Code';
    }, 2000);
    });
}
</script> */

/* In this modified code, the closest method is used to find the nearest code-box element, and the querySelector method is used to select the copy button inside the header element of that code-box. The codeBlock variable is still used to select the code element, and the rest of the code remains the same. */

/* <script> */
    var copyBtn = document.getElementsByClassName('copy-btn');
    var dummy = document.createElement('textarea');

    console.log('copyBtn:', copyBtn);

    for (var i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener('click', function() {
        console.log('Clicked');
        var codeBox = this.closest('.code-box');
        var codeBlock = codeBox.querySelector('code');
        console.log('codeBlock:', codeBlock);
        dummy.value = codeBlock.textContent;
        console.log('dummy:', dummy);
        document.body.appendChild(dummy);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        this.textContent = 'Copied!';
        var self = this;
        setTimeout(function() {
        self.textContent = 'Copy Code';
        }, 2000);
    });
    }
/* </script> */