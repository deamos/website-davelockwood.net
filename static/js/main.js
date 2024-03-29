		var options = {
			stringsElement: '#typed-strings',
			typeSpeed: 5,
			cursorChar: '<span id="cursor">|</span>',
            showCursor: true,
			backSpeed: 0,
		};

		function revealEmail() {
			var part1 = "dave.r.lockwood";
			var part2 = Math.pow(2, 6);
			var part3 = String.fromCharCode(part2);
			var part4 = "gmail.com";
			var part5 = part1 + String.fromCharCode(part2) + part4;
			document.getElementById('emailAddress').innerHTML = '<a href="' + 'mailto' + ':' + part5 + '">' + part1 + part3 + part4 + '</a>';
		}

		function directEmail(){
			var part1 = "dave.r.lockwood";
			var part2 = Math.pow(2, 6);
			var part4 = "gmail.com";
			var part5 = part1 + String.fromCharCode(part2) + part4;

			window.location.href = 'mailto' + '://' + part5;
		}
		
		var typed = new Typed('#typed', options);
		
		function showWindow1(){
			var x = document.getElementById("resume");
			x.style.display="block";
		}
		
		function closeWindow1(){
			var x = document.getElementById("resume");
			x.style.display="none";	
		}

		function showWindow2(){
			var x = document.getElementById("projects");
			x.style.display="block";
		}

		function closeWindow2(){
			var x = document.getElementById("projects");
			x.style.display="none";
		}
		
		function clearPrompt(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ </span>";
		}
		
		function resumeHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText' id='typed-strings'>./resume.sh</span>";

		}
		
		function emailHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText' id='typed-strings'>./email.sh</span>";

		}
		
		function blogHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText' id='typed-strings'>./blog.sh</span>";

		}
		
		function linkedinHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText' id='typed-strings'>./linkedin.sh</span>";

		}
		
		function facebookHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText' id='typed-strings'>./facebook.sh</span>";

		}
		
		function skypeHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText' id='typed-strings'>./skype.sh</span>";

		}
		
		function gitlabHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText' id='typed-strings'>./gitlab.sh</span>";

		}

		function projectsHover(){
			var x = document.getElementById("prompt");
			x.innerHTML = "guest@davelockwood.net:~$ <span class='termText' id='typed-strings'>./projects.sh</span>";

		}
		
		function skipIntro(){
			typed.destroy()
			var x = document.getElementById("typed");
			var y = document.getElementById("menu");
			x.innerHTML = y.innerHTML;
			
			var skipLink = document.getElementById("skipChoice");
			skipLink.style.display="none";
		}
		