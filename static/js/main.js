		var options = {
			stringsElement: '#typed-strings',
			typeSpeed: 5,
			cursorChar: '<span id="cursor">|</span>',
            showCursor: true,
			backSpeed: 0,
		};
			
		var options2 = {
			stringsElement: '#typed-strings2',
			typeSpeed: 5,
			cursorChar: '<span id="cursor">|</span>',
            showCursor: true,
			backSpeed: 0,
		};
		
		var typed = new Typed('#typed', options);
		var typed2 = new Typed('#typed2', options2);
		
		typed2.stop()
		
		function showWindow1(){
			var x = document.getElementById("resume");
			x.style.display="block";
			typed2.start()
		}
		
		function closeWindow1(){
			var x = document.getElementById("resume");
			x.style.display="none";	
			typed2.reset();
			typed2.stop()
		}
		
		function clearPrompt(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ </span>";
		}
		
		function resumeHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText'>./resume.sh</span>";

		}
		
		function emailHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText'>./email.sh</span>";

		}
		
		function blogHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText'>./blog.sh</span>";

		}
		
		function linkedinHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText'>./linkedin.sh</span>";

		}
		
		function facebookHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText'>./facebook.sh</span>";

		}
		
		function skypeHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText'>./skype.sh</span>";

		}
		