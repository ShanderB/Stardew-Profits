/**
 * Set up the i18n language when the page loads.
 */
function setLanguage(){
	//Get the current selected language.
	var language = document.getElementById('select_language').value;

	//Define the i18n file.
	var filePath = language + '.json';

	fetch('i18n/' + filePath)
		.then(response => response.json())
		.then(data => {
			for (var key in data) {
				var element = document.getElementById(key);
				if (element) {
					element.innerHTML = data[key];
				}
			}
		});
}

(function init() {
  fetch('i18n/language-list.json')
  .then(response => response.json())
  .then(data => {
	 var select = document.getElementById('select_language');

    select.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
      var option = document.createElement('option');
      option.value = data[i].language;
      option.text = data[i].text;
      option.id = 'language_' + i;
      select.appendChild(option);
    }

	setLanguage();
  })
})()