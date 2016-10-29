/****************************************Form Builder Js Initiating****************************************/
function showFormData(frmData){     //Initiating Form Builder
	var buildWrap = $(document.getElementById('fb-editor')),
		renderWrap = $(document.getElementById('fb-rendered-form')),
		editBtn = document.getElementById('edit-form'),
		formData = frmData,
		editing = true,
		fbOptions = {
		  dataType: 'json'
		};
	  if (formData) {
		fbOptions.formData = JSON.parse(formData);
	  }
	  var formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');

	  $('.form-builder-save').click(function(e) {
			console.log('helo');
		  buildWrap.toggle();
		 renderWrap.toggle();
		$("#mainForm").formRender({
		  dataType: 'json',
		  formData: formBuilder.formData
		});
		window.sessionStorage.setItem('formData', JSON.stringify(formBuilder.formData));
	  });

	  editBtn.onclick = function() {
	   buildWrap.toggle();
	   renderWrap.toggle()
	  };
}
/****************************************Form Builder Js End****************************************/
$(document).ready(function(){

});
