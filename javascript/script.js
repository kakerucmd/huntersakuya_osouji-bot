document.getElementById('menu-toggle').addEventListener('change', function() {
    document.querySelector('.discord-container').style.marginLeft = this.checked ? '200px' : '0';
});