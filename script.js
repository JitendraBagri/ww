const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function() {
  const message = messageInput.value;
  if (message.trim() !== '') {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_message.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const li = document.createElement('li');
        li.textContent = message;
        messageList.appendChild(li);
        messageInput.value = '';
      }
    };
    xhr.send('message=' + encodeURIComponent(message));
  }
});
