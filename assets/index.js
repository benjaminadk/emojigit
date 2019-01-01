(function() {
  const emojis = document.getElementsByClassName('emoji')
  const colons = document.getElementsByClassName('colon')
  
  function handleClick(e) {
    const original = e.target.textContent
    const temp = 'Copied...'
    const el = document.createElement('textarea')
    el.value = original
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    e.target.textContent = temp
    setTimeout(() => {
      e.target.textContent = original
    }, 3000)
  }

  var i
  for (i = 0; i < emojis.length; i++) {
    emojis[i].addEventListener('click', handleClick)
    colons[i].addEventListener('click', handleClick)
  }

}())
