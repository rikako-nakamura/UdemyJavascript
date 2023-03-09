//コミット作成
	　let createCommit = function(name, branchSHA, commitEmail, refName, message, treeSHA, srcPath) {
		srcPath = location.pathname;
		const GitHubToken = "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"
		let header_auth={"Authorization":`token ${GitHubToken}`, "Accept":"application/vnd.github.v3+json"};
		console.log(message);
		const data = {
			owner: name,
			repo: name,
			message: message,
			author: {
				name: name,
				email: commitEmail
			},
			parents: [
			branchSHA
			],
			tree: treeSHA
		}
		const params = {
			method: "POST",
			headers: header_auth,
			body: JSON.stringify(data)
		};
		fetch(`https://api.github.com/repos/${name}/${name}/git/commits`, params)
		.then(response => response.json())
		.then(commitData => {
		    let SHA = commitData.sha
			updateRef(SHA, name, refName);
		});
	　}
