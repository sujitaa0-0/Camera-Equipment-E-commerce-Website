function display_date() 
			{
				document.getElementById('date').innerHTML = Date();
				setTimeout(display_date,3000) // this function is triggerred every 3 seconds
			}

			