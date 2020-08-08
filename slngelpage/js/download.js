window.onload = function (){
	var FUNC = {
		downloadUrl: '/h5/about/download',
		privacyUrl: '/h5/about/privacy',
		getDownloadLink: function (){
			var domain = 'http://frontend.maowm.com';
			axios.get(domain + FUNC.downloadUrl)
		  .then(function (res) {
		    if(res.code === 0) {
		    	document.querySelector('#js-android').addEventListener('click', function(){
		    		window.location.href = data.android_download_url;
		    	})
		    	document.querySelector('#js-ios').addEventListener('click', function(){
		    		window.location.href = data.ios_download_url;
		    	})
		    }
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		},
		getPrivacy: function(){
			var domain = 'http://frontend.maowm.com';
			axios.get(domain + FUNC.privacyUrl)
		  .then(function (res) {
		    if(res.code === 0) {
		    	
		    }
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		}
	}
	FUNC.getDownloadLink();
	FUNC.getPrivacy();
}

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

//   axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });