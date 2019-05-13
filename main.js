const nameContainer = document.querySelector(".profile-name");
const unContainer = document.querySelector(".profile-username");
const reposContainer = document.querySelector(".profile-repos");
const urlContainer = document.querySelector(".profile-url");

const id = "Iv1.23444a087eaf3193";
const secret = "ae25c25e6e81bfc21e2e0c489aac73b9b81d70a6";

const fetchData = async (user) => {
	const api_call = await fetch("https://api.github.com/users/"+user+"?cliet_id ="+id+"& client_secret"+secret);

	const data = await api_call.json();
	return { data }
};

const showData = (user) =>{
	fetchData(user).then((res) => {
		console.log(res);
		var name = res.data.name;
		var username = res.data.login;
		var repos = res.data.public_repos;
		var url = res.data.html_url;
		alert("Github Profile of : "+name);

		nameContainer.innerHTML = 'Name: <span class="profile-value">'+name+'</span>';
		unContainer.innerHTML = 'Username: <span class="profile-value">'+username+'</span>';
		reposContainer.innerHTML = 'Repositories: <span class="profile-value">'+repos+'</span>';
		urlContainer.innerHTML = 'URL: <span class="profile-value">'+url+'</span>';
	})
};

function search(){
	var user = document.querySelector("#user").value;
	if(user == ""){
		alert("Please input Username");
		die();
	}else{
		showData(user);
	}
}
