function afficher(name)
{
	elements = document.getElementsByClassName("afficher" + name);
	for(i = 0; i < elements.length; i++)
	{
		elements[i].style.visibility = 'hidden';
		elements[i].style.position = 'absolute';
	}
	elements = document.getElementsByClassName("cacher" + name);
	for(i = 0; i < elements.length; i++)
	{
		elements[i].style.visibility = 'visible';
		elements[i].style.position = 'relative';
	}
}

function cacher(name)
{
	elements = document.getElementsByClassName("afficher" + name);
	for(i = 0; i < elements.length; i++)
	{
		elements[i].style.visibility = 'visible';
		elements[i].style.position = 'relative';
	}
	elements = document.getElementsByClassName("cacher" + name);
	for(i = 0; i < elements.length; i++)
	{
		elements[i].style.visibility = 'hidden';
		elements[i].style.position = 'absolute';
	}
}