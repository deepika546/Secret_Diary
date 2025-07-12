const form = document.getElementById('entryForm');
const entriesDiv = document.getElementById('entries');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const textarea = form.querySelector('textarea');
  const text = textarea.value.trim();

  console.log("Text value:", text); // 👈 check karo yaha

  if (text !== '') {
    const entryData = {
      title: "Diary Entry",
      message: text,
      date: new Date().toLocaleDateString()
    };

    console.log("Sending to backend:", entryData); // 👈 backend me kya jaa raha

    fetch("http://localhost:8080/api/secretdiary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryData)
    })
    .then(response => response.json())
    .then(data => {
      showEntry(data);
      textarea.value = "";
    })
    .catch(err => console.error("Error:", err));
  }
});
