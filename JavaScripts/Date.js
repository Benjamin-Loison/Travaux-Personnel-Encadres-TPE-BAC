function date()
	{
		date =  new Date(); jours = date.getDate(); mois = date.getMonth() + 1; années = date.getFullYear(); heures = date.getHours(); minutes = date.getMinutes(); secondes = date.getSeconds();
		if(jours < 10)
			jours = "0" + jours;
		if(mois < 10)
			mois = "0" + mois;
		if(heures < 10)
			heures = "0" + heures;
		if(minutes < 10)
			minutes = "0" + minutes;
		if(secondes < 10)
			secondes = "0" + secondes;
		document.getElementById("date").innerHTML = jours + "/" + mois + "/" + années + " " + heures + ":" + minutes + ":" + secondes;
	}
	setInterval(date, 10);