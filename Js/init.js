tinymce.init({
    selector: '#txt-textarea',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  
	document.addEventListener( 'DOMContentLoaded', function () {
        new Splide( '.splide',{
            perPage: 3,
            autoplay: "true",
            width: "100%",
            height: "20rem",
            focus: "center",
            type: "loop",
            cover: "true",
            breakpoints:{
                '640': {
                    perPage: 2,
                    gap    : '1rem',
                },
                '480': {
                    perPage: 1,
                    gap    : '1rem',
                },
            }
        } ).mount();
	} );
